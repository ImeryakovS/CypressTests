//Types from TypesFunction
import { TypeLink } from './TypesFunctions'
//Modules
import { profileSelectors }  from '../Selectors/MainSelectors'

export function randName ():string {
    const timestamp:number = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `test_${timestamp}_${random}`;
}

export function navigateAndVerify (selector: string,urlPart: string): void {
    cy.get(selector).should('be.visible').click()
        cy.url().should('include',urlPart)
}

export function expandSection (label: string): void { //открываем секции
    cy.get(`[aria-label="Expand section ${label}"]`).should('be.visible').click()
}

export function usingSearch (request: string): void {

    cy.get('body').type('{ctrl}k')
    cy.get('[role="combobox"]', { timeout: 5000 }) //timeout для прогрузки поиска
    .should('be.visible')
    cy.get('[role="combobox"]').first().type(request)
    cy.wait(500)
    cy.get('[role="combobox"]').type('{enter}')
    cy.url()
        .then((url)=> {
            expect(url.toLowerCase()).to.include(request.toLowerCase());
        })
}

export function goToLink (link: string): void {
    cy.visit(link)
    cy.url().should('include', link)
}

export function navigateLinks (links: TypeLink[]): void { //переходим по ссылкам в цикле
    links.forEach(({selector,urlPart}) => navigateAndVerify(selector,urlPart));
}

export function clickAndType (selector: string, credentials: string):void {
    cy.get(selector).click()
    cy.get(selector).type(credentials)
}

export function checkUserProfile ():void {
    cy.visit('/')
    cy.get(profileSelectors.iconProfile).click()
    cy.wait(100)
    cy.get(profileSelectors.linkProfile).click()
    clickAndType(profileSelectors.editUserProfileName, 'test1')
    clickAndType(profileSelectors.editUserProfileEmail, 'test1Email')
    clickAndType(profileSelectors.editUserProfileUsername, 'test1Username')
    cy.get(profileSelectors.saveChangesProfile).click()
    cy.get(profileSelectors.alertUserUpdated).should('be.visible')
}