const storage = require("./storage");

const ALPHABET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


function generateShortCode(length = 6) {
  let code = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * ALPHABET.length);
    code += ALPHABET[index];
  }
  return code;
}

function normaliseUrl(url) {
  return url.trim();
}

function isValidUrlFormat(url) {
  const normalised = normaliseUrl(url);
  const pattern = /^https?:\/\/[^\s]+$/;
  return pattern.test(normalised);
}

function createShortUrl(originalUrl) {
  if (!originalUrl || typeof originalUrl !== "string" || originalUrl.trim() === "") {
    throw new Error("Invalid URL");
  }

  const normalisedUrl = normaliseUrl(originalUrl);

  if (!isValidUrlFormat(normalisedUrl)) {
    throw new Error("Invalid URL format");
  }

  const existingCode = storage.findShortCodeByUrl(normalisedUrl);
  if (existingCode) {
    return existingCode;
  }

  let shortCode;
  do {
    shortCode = generateShortCode(6);
  } while (storage.exists(shortCode));

  storage.saveUrl(shortCode, normalisedUrl);
  return shortCode;
}

function resolveShortUrl(shortCode) {
  if (!shortCode || typeof shortCode !== "string" || shortCode.trim() === "") {
    throw new Error("Invalid short code");
  }

  if (!storage.exists(shortCode)) {
    throw new Error("Short code not found");
  }

  return storage.getUrl(shortCode);
}

module.exports = {
  createShortUrl,
  resolveShortUrl,
  isValidUrlFormat,
  generateShortCode,
};
