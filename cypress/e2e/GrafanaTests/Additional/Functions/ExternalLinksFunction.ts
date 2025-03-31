
type ExternalLinkCheckOptions = {
    selector: string;
    childIndex: number;
    htmlTag: string;
    index: number;
    containWord: string;
}

export function useFindFunction (options: ExternalLinkCheckOptions): Cypress.Chainable<JQuery<HTMLElement>> {
    const {selector, childIndex, htmlTag, index, containWord } = options;

    return cy.get(selector)
        .eq(childIndex)
        .find(htmlTag)
        .eq(index)
        .contains(containWord)
}
export function checkExternalLink (Fn: (options: ExternalLinkCheckOptions) => Cypress.Chainable<JQuery<HTMLElement>>, options: ExternalLinkCheckOptions): void {
                Fn(options).then ($el => {
                    const href = $el.prop('href');
                    expect(href,'Ссылка должна существовать').to.exist;
                    cy.request(href).its('status').should('eq',200);
                })
}

