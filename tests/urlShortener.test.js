const { createShortUrl, resolveShortUrl } = require("../src/urlShortener");
const storage = require("../src/storage");

describe("URL Shortener Core Logic (planned behavior)", () => {
  beforeEach(() => {
    if (storage.reset) {
      storage.reset();
    }
  });

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

  test("createShortUrl should throw for invalid URLs (empty string)", () => {
    expect(() => createShortUrl("")).toThrow("Invalid URL");
  });


  test("createShortUrl should reject URLs without http/https", () => {
    expect(() => createShortUrl("example.com")).toThrow("Invalid URL format");
  });

  test("createShortUrl should reject URLs with spaces", () => {
    expect(() => createShortUrl("https://exa mple.com")).toThrow("Invalid URL format");
  });

  test("createShortUrl should reject URLs with unsupported protocol (ftp)", () => {
    expect(() => createShortUrl("ftp://example.com")).toThrow("Invalid URL format");
  });
});
