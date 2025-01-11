import { deleteNewUser, createNewUser } from '../Functions/APIUsersTestFunction';
import { APICredentials } from '../Selectors/APILoginSelectors';

export class APIUsersPage {
    static createApiUser (): ReturnType<typeof createNewUser>  {
        return createNewUser(APICredentials);
    }
    static deleteApiUser (): ReturnType<typeof deleteNewUser> {
        const userId = Cypress.env('userId');
        if (!userId) {
            throw new Error('User ID is missing. Please create user before deleted')
        }
        return deleteNewUser(userId);
    }
}
