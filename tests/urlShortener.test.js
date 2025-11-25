const { createShortUrl, resolveShortUrl } = require("../src/urlShortener");
const storage = require("../src/storage");

describe("URL Shortener Core Logic (planned behavior)", () => {
  beforeEach(() => {
    if (storage.reset) storage.reset();
  });

  test("createShortUrl should return a short code of length 6", () => {
    const code = createShortUrl("https://example.com");
    expect(code.length).toBe(6);
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
    expect(() => createShortUrl("https://exa mple.com")).toThrow(
      "Invalid URL format"
    );
  });

  test("createShortUrl should reject URLs with unsupported protocol (ftp)", () => {
    expect(() => createShortUrl("ftp://example.com")).toThrow(
      "Invalid URL format"
    );
  });

  test("same URL should return the same short code (deduplication)", () => {
    const url = "https://example.com";
    const code1 = createShortUrl(url);
    const code2 = createShortUrl(url);
    expect(code1).toBe(code2);
  });

  test("URL with surrounding spaces should be normalized and behave the same", () => {
    const urlWithSpaces = "   https://example.com   ";
    const cleanUrl = "https://example.com";

    const code1 = createShortUrl(urlWithSpaces);
    const code2 = createShortUrl(cleanUrl);

    expect(code1).toBe(code2);

    const resolved = resolveShortUrl(code1);
    expect(resolved).toBe(cleanUrl);
  });

  test("different URLs should still be resolvable independently", () => {
    const url1 = "https://example.com/one";
    const url2 = "https://example.com/two";

    const code1 = createShortUrl(url1);
    const code2 = createShortUrl(url2);

    const resolved1 = resolveShortUrl(code1);
    const resolved2 = resolveShortUrl(code2);

    expect(resolved1).toBe(url1);
    expect(resolved2).toBe(url2);
  });
});
