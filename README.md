# URL Shortener Service (TDD Project)

This repository contains a small **URL Shortener** service developed using **Test-Driven Development (TDD)**.

## Project Overview

The goal of the project is to convert long URLs into short codes and later resolve those codes back to the original URLs.
The implementation is intentionally simple, focusing on TDD, clean architecture, and incremental weekly iterations.

## Technology Stack

- **Node.js** – runtime environment
- **JavaScript (CommonJS)** – implementation language
- **Jest** – unit testing framework
- **Git & GitHub** – version control and repository hosting
- **GitHub Actions** – Continuous Integration (CI)
- **In-memory Map()** – simple storage for `shortCode -> originalUrl`

## Project Structure

```text
src/
  index.js           # entry point (placeholder for now)
  storage.js         # in-memory storage module
  urlShortener.js    # core URL shortener logic (create + resolve)
  tests/
    urlShortener.test.js  # Jest test suite

.gitignore
package.json
README.md
