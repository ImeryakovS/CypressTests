import {login,
    receiveNewCredentials,
    returnToLogin,
    checkErrorLoginMessage} from '../Functions/LoginTestFunction';
import { credentials } from '../Selectors/LoginSelectors';

//import { deleteNewUser, createNewUser } from '../Functions/APIUsersTestFunction';
//import { APICredentials } from "../Selectors/APILoginSelectors";

export class LoginPage {
    static successLogin(): void {
        login(credentials.username,credentials.password)
    };
    static newCredentials(): void {
        receiveNewCredentials()
    };
    static goBackToLogin(): void {
        returnToLogin()
    };
    static incorrectCredentials(): void {
        checkErrorLoginMessage()
    };
   /* static createApiUser () {
        void createNewUser(APICredentials);
    }
    static deleteApiUser () {
        deleteNewUser();
    }*/
}
