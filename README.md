URL Shortener Service – Test Driven Development (TDD)

A lightweight but fully functional URL Shortener service built using Test-Driven Development, implemented incrementally over five weeks following an iterative RED → GREEN → REFACTOR workflow.

The objective of the project is not only to implement a URL shortening mechanism, but to demonstrate practical application of TDD, incremental development, clean refactoring, test coverage, and Continuous Integration (CI) in a modular Node.js codebase.

1. Project Overview

The application provides two core capabilities:

Converts a long URL into a short, unique code.

Resolves a short code back to the original URL.

The service is intentionally simple and storage is maintained in-memory using JavaScript Map() objects to keep the focus on:

pure TDD practices

modular and maintainable design

incremental feature delivery

structured test suite

CI automation via GitHub Actions

2. Features (Week-by-Week)
⚡ Feature 1 – Basic URL Shortening (Week 2)

Generates a 6-character alphanumeric short code.

Stores mapping:
shortCode → originalUrl

Resolves short code back to the original URL.

Throws errors for:

unknown short codes (Short code not found)

empty or invalid base input (Invalid URL)

⚡ Feature 2 – Advanced URL Validation (Week 3)

Before generating a short code, the system validates that the URL:

starts with http:// or https://

contains no internal spaces

does not use unsupported protocols (e.g., ftp://)

Error messages include:

Invalid URL → empty/undefined input

Invalid URL format → incorrect syntax, missing protocol, spaces, or unsupported protocol

⚡ Feature 3 – Deduplication & URL Normalization (Week 4)

To optimize system behavior:

Deduplication

If a URL has already been shortened once, the service returns the same short code on future requests.

Prevents duplicate entries and unnecessary randomness.

Normalization

Leading/trailing spaces are removed using .trim().

" https://example.com " behaves identically to "https://example.com".

Both behaviors are verified by an expanded test suite introduced in Week 4.

3. Technology Stack

Node.js – runtime environment

JavaScript (CommonJS) – implementation language

Jest – unit testing

Git & GitHub – version control

GitHub Actions – Continuous Integration pipeline

In-memory Maps – data storage

4. Project Structure
src/
  index.js             # Entry point (prepared for future API integration)
  storage.js           # In-memory storage (shortCode -> URL, URL -> shortCode)
  urlShortener.js      # Core logic: shortening, resolving, validation, deduplication

tests/
  urlShortener.test.js # Jest test suite covering all system behaviors

.gitignore
package.json
package-lock.json
README.md

5. Development Process (TDD)

The entire project follows an iterative RED → GREEN → REFACTOR cycle:

RED – write failing tests describing expected behavior.

GREEN – implement minimal functionality required to pass tests.

REFACTOR – clean and reorganize logic while preserving test results.

This approach ensures:

clear requirement definition

safe and confident refactoring

maintainable and modular code

stable behavior across iterations

6. Continuous Integration

A GitHub Actions workflow automatically runs:

npm install

npm test

test coverage reporting

on every push, guaranteeing that:

the codebase remains stable at all times

no commit breaks existing tests

TDD workflow is preserved end-to-end

7. Test Coverage

Test coverage exceeds 80% across:

statements

branches

functions

lines

This high coverage ensures stability during refactoring and prevents regressions in core functionality.

8. Status

✔ All features (Week 2–4) fully implemented
✔ Refactoring and optimization completed
✔ All tests passing locally and in CI
✔ Coverage above requirements
✔ Final report and presentation completed
