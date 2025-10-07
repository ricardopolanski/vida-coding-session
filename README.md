# Cypress E2E Tests for OHIF Viewer

This project contains Cypress tests to verify functionality of the OHIF medical image viewer application across different environments (DEV, STAGING, PROD).

---

## 🌐 Environment Configuration

Cypress dynamically sets the base URL based on the `ENV` environment variable passed at runtime.

### 🔧 Supported Environments

| ENV Value | Base URL                          |
|-----------|-----------------------------------|
| `dev`     | https://viewer.ohif.org           |
| `stagin`  | https://staginviewer.ohif.org     |
| `prod`    | https://prod-viewer.ohif.org      |

---

## 🚀 How to Run the Tests

You must pass the environment variable `ENV` when launching Cypress. This selects the correct `baseUrl`.

### 1. Open Cypress Test Runner

#### Mac/Linux:
```bash
ENV=dev npx cypress open
```

#### Windows CMD:
```bash
set ENV=dev && npx cypress open
```

#### Windows PowerShell:
```bash
$env:ENV="dev"; npx cypress open
```
Replace dev with stagin or prod as needed.