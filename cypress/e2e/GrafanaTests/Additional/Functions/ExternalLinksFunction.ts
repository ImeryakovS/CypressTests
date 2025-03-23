
export function checkExternalLink (selector: string): void {
    cy.get(selector)
}
//нужно где-то сделать функцию, которая циклом проверяем количество вложенных элементов в div и кликает на каждый