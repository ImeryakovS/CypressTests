const loginSelectors = {
    user : '[name="user"]',
    password : '[name="password"]',
    submit : '[type="submit"]',
    login : '[href="/login"]',
    userInput : '[id="user-input"]',
    alertError : '[data-testid="data-testid Alert error"]',
    alert : 'div [role="alert"]'
};

const credentials = {
    username: "Sergeytest",
    password: "test",
    email: "Test@test.ru"
}

module.exports = { loginSelectors, credentials };