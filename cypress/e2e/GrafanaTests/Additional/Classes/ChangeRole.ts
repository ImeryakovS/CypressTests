import { changeRole } from '../Functions/APIChangeRoleFunction';
import { APIUsersPage } from './APIUsersPage';
import { checkPermissionsViewer, checkPermissionsEditor } from '../Functions/CheckRoleFunction';
import { TypeRoles } from '../Selectors/TypesSelectors'

export class ChangeRole  {
    static  createAndChangeRoleForApiUser(roles: TypeRoles ): ReturnType<typeof APIUsersPage.createApiUser> {
           return APIUsersPage.createApiUser().then(() => {
               changeRole(roles);
        });
    }

    static checkRoleForViewer(): void {
        checkPermissionsViewer('/dashboard/new')
    }

    static checkRolesForEditor(): void {
        checkPermissionsEditor()
    }
}
