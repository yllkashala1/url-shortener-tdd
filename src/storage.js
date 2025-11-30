let shortToUrl = new Map();

let urlToShort = new Map();

function saveUrl(shortCode, originalUrl) {
  shortToUrl.set(shortCode, originalUrl);
  urlToShort.set(originalUrl, shortCode);
}

function getUrl(shortCode) {
  return shortToUrl.get(shortCode);
}

function exists(shortCode) {
  return shortToUrl.has(shortCode);
}

function findShortCodeByUrl(originalUrl) {
  return urlToShort.get(originalUrl) || null;
}

function reset() {
  shortToUrl.clear();
  urlToShort.clear();
}

module.exports = {
  saveUrl,
  getUrl,
  exists,
  findShortCodeByUrl,
  reset,
};
