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
const BasicAUTH = {
    Username : 'admin',
    Password : '3cvqsdkw4'
}

const APICredentials = {
    name : 'APITest1',
    email : 'APITest1@email.com',
    login : 'APITest1',
    password : 'test'
}

module.exports = { loginSelectors, credentials, BasicAUTH, APICredentials };