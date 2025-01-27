//Types
import { TypeBasicAuth,
    TypeSergeyCredentials,
    TypeAPICredentials,
    TypeRoles} from './TypesSelectors';

//modules
import { randName } from '../Functions/PageTestFunction';


export const BasicAUTH: TypeBasicAuth = {
    Username : 'admin',
    Password : 'admin'
}

export const APICredentials: TypeAPICredentials = {
    name :'APITest1' + randName(),
    email : 'APITest1@email.com' + randName(),
    login : 'APITest1' + randName() ,
    password : 'test'
}

export const SergeyCredentials: TypeSergeyCredentials = {
    name :'sergeytest',
    email : 'testing@test.ru',
    login : 'sergeytest',
    password : 'test'
}

export const roles: {
    roleEditor: TypeRoles;
    roleAdmin: TypeRoles;
    roleViewer: TypeRoles;
} = {
    roleEditor: { role: 'Editor' },
    roleAdmin: { role: 'Admin' },
    roleViewer: { role: 'Viewer' }
};
