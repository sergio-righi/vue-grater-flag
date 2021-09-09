const normalize = value =>
  value
    .toUpperCase()
    .replace(new RegExp("[ÁÀÂÃÄ]", "gi"), "A")
    .replace(new RegExp("[ÉÈÊË]", "gi"), "E")
    .replace(new RegExp("[ÍÌÎÏ]", "gi"), "I")
    .replace(new RegExp("[ÓÒÔÕÖ]", "gi"), "O")
    .replace(new RegExp("[ÚÙÛÜ]", "gi"), "U")
    .replace(new RegExp("[Ç]", "gi"), "C")
    .replace(new RegExp("[Ñ]", "gi"), "N")
    .toLowerCase();

export { normalize };
