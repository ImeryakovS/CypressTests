const { randName } = require("../Functions/DashboardTestFunction");

const BasicAUTH = {
    Username : 'admin',
    Password : '3cvqsdkw4'
}

const APICredentials = {
    name : randName() + 'APITest1',
    email : randName() + 'APITest1@email.com',
    login : randName() + 'APITest1',
    password : 'test'
}

const roles = {
    roleEditor: { role: 'Editor' },
    roleAdmin: { role: 'Admin' },
    roleViewer: { role: 'Viewer' }
};

module.exports = { BasicAUTH, APICredentials, roles };