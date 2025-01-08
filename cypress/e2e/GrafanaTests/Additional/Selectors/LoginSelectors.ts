//Types from TypesSelectors
import { TypeCredentials, TypeLoginSelectors } from "./TypesSelectors";

export const loginSelectors: TypeLoginSelectors = {
    user : '[name="user"]',
    password : '[name="password"]',
    submit : '[type="submit"]',
    login : '[href="/login"]',
    userInput : '[id="user-input"]',
    alertError : '[data-testid="data-testid Alert error"]',
    alert : 'div [role="alert"]'
};

export const credentials: TypeCredentials = {
    username: "Sergeytest",
    password: "test",
    email: "Test@test.ru"
}