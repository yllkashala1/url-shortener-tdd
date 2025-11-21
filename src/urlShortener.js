// src/urlShortener.js
// Week 2: implementation pa dependency te jashtme

const storage = require("./storage");

// helper i thjeshte per me gjeneru short code 6-shkronjor
function generateShortCode(length = 6) {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let code = "";
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    code += chars[index];
  }
  return code;
}

function createShortUrl(originalUrl) {
  if (!originalUrl || typeof originalUrl !== "string" || originalUrl.trim() === "") {
    throw new Error("Invalid URL");
  }

  const shortCode = generateShortCode(6);
  storage.saveUrl(shortCode, originalUrl);

  return shortCode;
}

function resolveShortUrl(shortCode) {
  if (!storage.exists(shortCode)) {
    throw new Error("Short code not found");
  }

  return storage.getUrl(shortCode);
}

module.exports = { createShortUrl, resolveShortUrl };
