## About my project

My project with test for Grafana. It's a public demonstration for my skills in autotests. 
I'm learning JS + Cypress currently. And my repository and code will be changed.

I will add information about setup tests and environment as soon as possible

## Requirements

1) Cypress 12.14.0
2) Allure 2.40.2

## How to use my tests?
1) Install Grafana on local machine from https://github.com/grafana/grafana with any comfortable option
2) Start Grafana (check that this address is true http://localhost:3000/)
3) Clone this repository on your machine
4) Go to directory `CypressTests` and run in the command Line `npx cypress open`
5) Choose directory `e2e/GrafanaTests` in Cypress (default directory may delete)
6) Choose any test and run with graphic interface (or console with command `npx cypress run --spec "cypress/e2e/GrafanaTests/*.cy.js"`)

## Allure

I used Allure report system for creating reports
How to use it?

1) Install Cypress 12.14.0 (New version of Cypress (13+) don't work with Allure)
2) Install [Allure](https://github.com/Shelex/cypress-allure-plugin)
3) Run all tests with command `npx cypress run --spec "cypress/e2e/**/*.spec.js" --env allure=true`
4) Run `npm run allure:report` for create reports
5) Run `npm run allure:open` for open and view all reports


