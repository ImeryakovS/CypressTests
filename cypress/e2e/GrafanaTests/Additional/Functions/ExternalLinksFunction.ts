import {mainLinksSelectors} from "../Selectors/MainSelectors";
type ExternalLinkCheckOptions = {
    selector: string;
    childIndex: number;
    htmlTag: string;
    index: number;
    containWord: string;
}

export function checkExternalLink (options: ExternalLinkCheckOptions): void {
    const {selector, childIndex, htmlTag, index, containWord } = options;
    
    cy.get(selector) //В этом куске кода мы переходим на дочерний элемент и проверяем статус кода ответа. Надо запихать в функцию
        .eq(childIndex)
        .within(():void => {
            cy.get(htmlTag).eq(index).contains(containWord)
                .then (link => {
                    cy
                        .request(link.prop('href'))
                        .its('status')
                        .should('eq',200);
                })
        })
}
