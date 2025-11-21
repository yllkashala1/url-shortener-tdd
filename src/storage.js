const store = new Map();

function saveUrl(shortCode, originalUrl) {
  store.set(shortCode, originalUrl);
}

function getUrl(shortCode) {
  return store.get(shortCode);
}

function exists(shortCode) {
  return store.has(shortCode);
}

function reset() {
  store.clear();
}

module.exports = { saveUrl, getUrl, exists, reset };
