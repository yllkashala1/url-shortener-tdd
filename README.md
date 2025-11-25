# URL Shortener Service (TDD Project)

This repository contains a small **URL Shortener** service developed using **Test-Driven Development (TDD)** as part of a weekly, iteration-based course project.

The main goal is *not only* to build a working URL shortener, but to **practice TDD, incremental design, refactoring, and CI** in a realistic but simple codebase.

---

## 1. Project Overview

The application converts long URLs into short codes and later resolves those codes back to their original URLs.

Key characteristics:

- Implementation is intentionally simple and **in-memory** (no database).
- Focus on:
  - **TDD (Red → Green → Refactor)**
  - **Clean, modular design**
  - **Small, incremental weekly iterations**
  - **Good test coverage and CI integration**

---

## 2. Features

### ✅ Feature 1 – Core URL Shortening (Week 2)

- Generate a random short code (length = 6).
- Store mapping `shortCode -> originalUrl` in memory.
- Resolve short code back to original URL.
- Error if short code does not exist.
- Error if URL input is empty.

### ✅ Feature 2 – Advanced URL Validation (Week 3)

Before shortening a URL, the system validates that:

- The URL starts with `http://` or `https://`
- The URL contains **no spaces**
- Unsupported protocols such as `ftp://` are rejected

Invalid URLs throw a clear error:

- `Invalid URL` – for empty or missing input
- `Invalid URL format` – for wrong format (no protocol, spaces, unsupported protocol)

### ✅ Feature 3 – Deduplication & URL Normalization (Week 4)

To improve design and behavior:

- **Deduplication**:
  - If the same URL is shortened multiple times, the **same short code** is returned.
  - Prevents duplicate entries in storage.
- **URL Normalization**:
  - Leading and trailing spaces are trimmed (`"   https://example.com   "` → `"https://example.com"`).
  - URLs with spaces around them behave exactly like clean URLs.
- These behaviors are fully covered by new tests.

---

## 3. Technology Stack

- **Node.js** – runtime environment
- **JavaScript (CommonJS)** – implementation language
- **Jest** – unit testing framework
- **Git & GitHub** – version control and repository hosting
- **GitHub Actions** – Continuous Integration (CI)
- **In-memory `Map()`** – storage for `shortCode -> originalUrl`

---

## 4. Project Structure

```text
src/
  index.js             # Entry point (placeholder for future HTTP API)
  storage.js           # In-memory storage module (Map-based)
  urlShortener.js      # Core URL shortener logic (create + resolve + validation + deduplication)

tests/
  urlShortener.test.js # Jest test suite for all core features

.gitignore
package.json
package-lock.json
README.md
