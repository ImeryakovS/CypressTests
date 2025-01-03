const { randName } = require('../Functions/PageTestFunction')

const BasicAUTH = {
    Username : 'admin',
    Password : '3cvqsdkw4'
}

const APICredentials = {
    name :'APITest1' + randName(),
    email : 'APITest1@email.com' + randName(),
    login : 'APITest1' + randName() ,
    password : 'test'
}

const roles = {
    roleEditor: { role: 'Editor' },
    roleAdmin: { role: 'Admin' },
    roleViewer: { role: 'Viewer' }
};

module.exports = { BasicAUTH, APICredentials, roles };