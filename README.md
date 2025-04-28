## About this project

[![CI](https://github.com/ImeryakovS/CypressTests/actions/workflows/ci.yml/badge.svg)](https://github.com/ImeryakovS/CypressTests/actions)
![Cypress](https://img.shields.io/badge/cypress-12.14.0-brightgreen)

This is an automated testing project for **Grafana**, built with **Cypress** and **TypeScript**.  
It serves as a public demonstration of my automation testing skills.

> ⚙️ I'm currently learning JavaScript/TypeScript and Cypress. This repository is a work in progress, and improvements are continuously being made.

> 🔹 The project is now fully written in **TypeScript**.


📁 All tests are located in `cypress/e2e/GrafanaTests`.  
Support code (classes, functions, selectors) is located in the `Additional` folder.

---

![Demo](./Demo/aboutProject.gif)
---

## Requirements

1) Cypress 12.14.0
2) Allure 2.40.2
3) TypeScript 5.7.2

---

## How to run the tests

1) Install Grafana locally: https://github.com/grafana/grafana (choose any convenient method)
2) Start Grafana and ensure it's available at: `http://localhost:3000/`
3) Clone this repository on your machine
4) Navigate to the project folder and run: `npx cypress open`
5) In the Cypress UI, go to e2e/GrafanaTests (you may delete the default example folder)
6) Select and run any test using the graphical interface (or run via CLI: `npx cypress run --spec "cypress/e2e/GrafanaTests/*.cy.js"`)

---

## Allure

This project uses Allure for generating detailed test reports.

> ⚠️ Note: Allure does not work with Cypress v13+ as of now. Use Cypress 12.14.0.

1) Install [Allure](https://github.com/Shelex/cypress-allure-plugin)
2) Run tests Allure enabled: `npx cypress run --spec "cypress/e2e/**/*.spec.js" --env allure=true`
3) Generate the report: `npm run allure:report`
4) Open the report in browser: `npm run allure:open`

Current Allure example:

![Allure](./image/Allure.png)

---

## CI/CD Integration

All tests are integrated with GitHub Actions.
While test execution is currently available only for me, you can view the results in the Actions tab.

All CI settings are located in [ci.yml](./.github/workflows/ci.yml)

---

## Python tests

Steps for install:
1. Install Python (from scoop): `scoop install python`
2. Activate virtual environment: `venv\Scripts'activate`
3. Install pytest: `pip install pytest`
4. Install dependencies: `pip install -r requirements.txt`