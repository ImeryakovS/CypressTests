const { randName } = require("../Functions/DashboardTestFunction");

const BasicAUTH = {
    Username : 'admin',
    Password : '3cvqsdkw4'
}

const APICredentials = {
    name :'APITest1',
    email : 'APITest1@email.com',
    login : 'APITest1',
    password : 'test'
}

const roles = {
    roleEditor: { role: 'Editor' },
    roleAdmin: { role: 'Admin' },
    roleViewer: { role: 'Viewer' }
};

module.exports = { BasicAUTH, APICredentials, roles };