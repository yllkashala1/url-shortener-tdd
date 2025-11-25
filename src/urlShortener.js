const storage = require("./storage");

function generateShortCode(length = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    code += chars[index];
  }
  return code;
}

function normalizeUrl(url) {
  if (typeof url !== "string") return url;
  return url.trim();
}

function isValidUrlFormat(url) {
  const pattern = /^https?:\/\/[^\s]+$/;
  return pattern.test(url);
}

function createShortUrl(originalUrl) {
  const normalizedUrl = normalizeUrl(originalUrl);

  if (!normalizedUrl || typeof normalizedUrl !== "string" || normalizedUrl === "") {
    throw new Error("Invalid URL");
  }

  if (!isValidUrlFormat(normalizedUrl)) {
    throw new Error("Invalid URL format");
  }

  const existingCode = storage.findShortCodeByUrl(normalizedUrl);
  if (existingCode) {
    return existingCode;
  }

  const shortCode = generateShortCode(6);
  storage.saveUrl(shortCode, normalizedUrl);

  return shortCode;
}

function resolveShortUrl(shortCode) {
  if (!storage.exists(shortCode)) {
    throw new Error("Short code not found");
  }

  return storage.getUrl(shortCode);
}

module.exports = { createShortUrl, resolveShortUrl, isValidUrlFormat, normalizeUrl };
