# URL Shortener Service – Test Driven Development (TDD)

A lightweight but fully functional **URL Shortener** service built using **Test-Driven Development**, implemented incrementally over five weeks following an iterative RED → GREEN → REFACTOR workflow.

This project focuses on:
- Practical application of **TDD**
- Modular and maintainable design
- Incremental feature development
- Test coverage >80%
- Continuous Integration using GitHub Actions

---

## 1. Project Overview

This service provides two main operations:

- Convert a long URL into a **short 6-character code**
- Resolve a short code back to its **original URL**

The system uses simple **in-memory storage** and is structured for clarity, testability, and extensibility.

---

## 2. Features

### ⚡ Feature 1 – Basic URL Shortening (Week 2)
- Generates a random short code (length 6)
- Stores mapping: `shortCode → originalUrl`
- Resolves short code back to URL
- Throws clear errors:
  - `Invalid URL` – empty input
  - `Short code not found` – unknown code

---

### ⚡ Feature 2 – Advanced URL Validation (Week 3)
Before shortening, the system validates that the URL:
- Starts with `http://` or `https://`
- Contains **no spaces**
- Does **not** use unsupported protocols (e.g., ftp://)

Error responses:
- `Invalid URL` – missing or empty input
- `Invalid URL format` – incorrect syntax or unsupported protocol

---

### ⚡ Feature 3 – Deduplication & Normalization (Week 4)
- **Deduplication**:  
  Same URL → always returns the **same short code**
- **Normalization**:  
  Leading/trailing spaces are trimmed  
  `"   https://example.com   "` → `"https://example.com"`

Both improvements are fully tested and verified.

---

## 3. Technology Stack

- **Node.js** – runtime
- **JavaScript (CommonJS)** – implementation
- **Jest** – unit testing framework
- **Git & GitHub** – version control
- **GitHub Actions** – CI pipeline
- **In-memory Map()** – storage backend

---

## 4. Project Structure

src/
index.js # Entry point (placeholder for future HTTP API)
storage.js # In-memory storage (Maps)
urlShortener.js # Core logic: create, resolve, validate, deduplicate

tests/
urlShortener.test.js # Full Jest test suite

.gitignore
package.json
package-lock.json
README.md


---

## 5. Development Process: TDD

This project follows the classic **RED → GREEN → REFACTOR** cycle:

1. **RED** – Write failing tests describing the intended behavior  
2. **GREEN** – Write the minimal implementation to pass tests  
3. **REFACTOR** – Clean and restructure code without changing behavior

Benefits observed:
- Clearer requirements
- Safe refactoring
- Higher code confidence
- Modular & testable architecture

---

## 6. Continuous Integration

A GitHub Actions workflow automatically runs:
- `npm install`
- `npm test`
- Coverage checks

CI ensures:
- All commits remain stable
- No code is merged with failing tests
- TDD workflow is preserved end-to-end

---

## 7. Test Coverage

Coverage exceeds **80%** across:
- Statements  
- Branches  
- Functions  
- Lines  

High coverage ensures stability and prevents regressions during refactoring.

---

## 8. Status

✔ Feature 1 completed  
✔ Feature 2 completed  
✔ Feature 3 completed  
✔ Tests fully passing  
✔ CI fully passing  
✔ Coverage > 80%  
✔ Documentation and presentation completed  
