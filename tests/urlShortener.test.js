// tests/urlShortener.test.js

const { createShortUrl, resolveShortUrl } = require("../src/urlShortener");

describe("URL Shortener Core Logic (planned behavior)", () => {
  test("createShortUrl should return a short code of length 6", () => {
    const code = createShortUrl("https://example.com");
    expect(code).toHaveLength(6);
  });

  test("createShortUrl should allow resolving the original URL", () => {
    const url = "https://example.com";
    const code = createShortUrl(url);
    const resolved = resolveShortUrl(code);
    expect(resolved).toBe(url);
  });

  test("resolveShortUrl should throw for unknown code", () => {
    expect(() => resolveShortUrl("xxxxxx")).toThrow("Short code not found");
  });

  test("createShortUrl should throw for invalid URLs", () => {
    expect(() => createShortUrl("")).toThrow("Invalid URL");
  });
});
