module.exports = arrayAsString =>
  arrayAsString.split(",").map(tech => tech.trim());
