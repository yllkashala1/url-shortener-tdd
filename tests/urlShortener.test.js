const {
  createShortUrl,
  resolveShortUrl,
  isValidUrlFormat,
} = require("../src/urlShortener");
const storage = require("../src/storage");

beforeEach(() => {
  storage.reset();
});

describe("URL Shortener – core functionality", () => {
  test("createShortUrl should return a short code of length 6", () => {
    const code = createShortUrl("https://example.com");
    expect(code).toHaveLength(6);
  });

  test("createShortUrl and resolveShortUrl should map URL correctly", () => {
    const originalUrl = "https://example.com";
    const code = createShortUrl(originalUrl);
    const resolved = resolveShortUrl(code);
    expect(resolved).toBe(originalUrl);
  });

  test("resolveShortUrl should throw for unknown short code", () => {
    expect(() => resolveShortUrl("xxxxxx")).toThrow("Short code not found");
  });

  test("createShortUrl should throw for empty URL", () => {
    expect(() => createShortUrl("")).toThrow("Invalid URL");
    expect(() => createShortUrl("   ")).toThrow("Invalid URL");
  });

  test("resolveShortUrl should throw for invalid (empty) short code", () => {
    expect(() => resolveShortUrl("")).toThrow("Invalid short code");
    expect(() => resolveShortUrl("   ")).toThrow("Invalid short code");
  });
});

describe("URL Shortener – URL validation", () => {
  test("isValidUrlFormat should accept valid http/https URLs", () => {
    expect(isValidUrlFormat("http://example.com")).toBe(true);
    expect(isValidUrlFormat("https://example.com")).toBe(true);
    expect(isValidUrlFormat("https://example.com/path?query=1")).toBe(true);
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

describe("URL Shortener – deduplication & normalization", () => {
  test("same URL should return the same short code (deduplication)", () => {
    const url = "https://example.com";
    const code1 = createShortUrl(url);
    const code2 = createShortUrl(url);
    expect(code1).toBe(code2);
  });

  test("same URL with extra spaces should still return the same short code", () => {
    const urlClean = "https://example.com";
    const urlWithSpaces = "   https://example.com   ";
    const code1 = createShortUrl(urlClean);
    const code2 = createShortUrl(urlWithSpaces);
    expect(code1).toBe(code2);
  });

  test("different URLs should return different short codes", () => {
    const code1 = createShortUrl("https://example.com/one");
    const code2 = createShortUrl("https://example.com/two");
    expect(code1).not.toBe(code2);
  });
});
