const SHEET_NAME = "Réponses";

const HEADERS = [
  "timestamp", "version", "age", "sport", "inscrit", "freq12m",
  "frequence", "vw1", "vw2", "vw3", "vw4", "vw_coherent",
  "gg20", "gg25", "gg30", "gg35", "gg40", "gg45", "controle",
  "L1", "L2", "L3", "L4", "L5", "statut", "budget"
];

const ALLOWED = {
  version: ["A", "B"],
  age: ["<18", "18-24", "25-34", "35-44", "45-54", "55+"],
  sport: ["plusieurs", "hebdo", "occasionnel", "non"],
  inscrit: ["oui", "non"],
  freq12m: ["oui", "non"],
  frequence: ["<1", "1", "2-3", "4-5", "5+"],
  vw_coherent: ["Oui", "Non"],
  gg20: ["Oui", "Non"],
  gg25: ["Oui", "Non"],
  gg30: ["Oui", "Non"],
  gg35: ["Oui", "Non"],
  gg40: ["Oui", "Non"],
  gg45: ["Oui", "Non"],
  controle: ["Oui", "Non", "Je ne m'en souviens pas"],
  statut: ["Etudiant", "Salarie", "Independant", "Sans activité", "Retraite", "Autre"],
  budget: ["0", "<20", "20-30", "31-40", "41-50", "50+"]
};

const PRICE_FIELDS = ["vw1", "vw2", "vw3", "vw4"];
const LIKERT_FIELDS = ["L1", "L2", "L3", "L4", "L5"];

function doPost(e) {
  try {
    if (!e || !e.postData || typeof e.postData.contents !== "string") {
      throw new Error("Corps de requête manquant.");
    }
    if (e.postData.contents.length > 20000) {
      throw new Error("Requête trop volumineuse.");
    }

    let data;
    try {
      data = JSON.parse(e.postData.contents || "{}");
    } catch (parseError) {
      throw new Error("JSON invalide.");
    }

    if (!data || typeof data !== "object" || Array.isArray(data)) {
      throw new Error("Le contenu reçu doit être un objet JSON.");
    }

    const row = validateAndBuildRow_(data);

    // Évite que deux soumissions simultanées écrivent en même temps.
    const lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) {
      throw new Error("Le service est momentanément occupé. Réessayez.");
    }

    try {
      const sheet = getSheet_();
      ensureHeaders_(sheet);
      sheet.appendRow(row);
      SpreadsheetApp.flush();
    } finally {
      lock.releaseLock();
    }

    return jsonResponse_({ ok: true });
  } catch (error) {
    console.error("Échec de réception : " + error.message);
    return jsonResponse_({
      ok: false,
      error: error.message || "Erreur lors de l'enregistrement."
    });
  }
}

function validateAndBuildRow_(data) {
  const missing = HEADERS.filter(function(key) {
    return data[key] === undefined || data[key] === null || data[key] === "";
  });

  if (missing.length) {
    throw new Error("Champ(s) manquant(s) : " + missing.join(", "));
  }

  if (typeof data.timestamp !== "string" ||
      !/^\d{4}-\d{2}-\d{2}T/.test(data.timestamp) ||
      isNaN(Date.parse(data.timestamp))) {
    throw new Error("Horodatage invalide.");
  }

  Object.keys(ALLOWED).forEach(function(key) {
    if (ALLOWED[key].indexOf(String(data[key])) === -1) {
      throw new Error("Valeur non autorisée pour le champ " + key + ".");
    }
  });

  const prices = {};
  PRICE_FIELDS.forEach(function(key) {
    const value = Number(data[key]);
    if (!Number.isFinite(value) || value < 0 || value > 1000000) {
      throw new Error("Montant invalide pour le champ " + key + ".");
    }
    prices[key] = value;
  });

  LIKERT_FIELDS.forEach(function(key) {
    const value = Number(data[key]);
    if (!Number.isInteger(value) || value < 1 || value > 5) {
      throw new Error("Réponse invalide pour le champ " + key + ".");
    }
  });

  const expectedCoherence =
    prices.vw1 < prices.vw2 &&
    prices.vw2 < prices.vw3 &&
    prices.vw3 < prices.vw4 ? "Oui" : "Non";

  if (data.vw_coherent !== expectedCoherence) {
    throw new Error("L'indicateur de cohérence des prix ne correspond pas aux montants.");
  }

  return HEADERS.map(function(key) {
    if (PRICE_FIELDS.indexOf(key) !== -1) return prices[key];
    if (LIKERT_FIELDS.indexOf(key) !== -1) return Number(data[key]);
    return String(data[key]);
  });
}

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  if (!ss) {
    throw new Error("Aucun classeur Google Sheets associé au script.");
  }

  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  return sheet;
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    return;
  }

  const existing = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const matches = HEADERS.every(function(header, index) {
    return existing[index] === header;
  });

  if (!matches) {
    throw new Error(
      "Les en-têtes de l'onglet « " + SHEET_NAME +
      " » ne correspondent pas au format attendu. Aucune ligne n'a été ajoutée."
    );
  }

  if (sheet.getFrozenRows() === 0) {
    sheet.setFrozenRows(1);
  }
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
