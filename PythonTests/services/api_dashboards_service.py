import requests


class ApiDashboardsService:
    BASE_URL = "http://localhost:3000/"
    BASIC_AUTH = ("admin","admin")

    @staticmethod
    def create_folder():
        url = f'{ApiDashboardsService.BASE_URL}/api/folders'
        headers = {'Content-Type': 'application/json'}

        response = requests.post(url, auth=ApiDashboardsService.BASIC_AUTH, json=credentials, headers=headers)
        assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'
        assert response.json().get('message') == 'User created', 'User not created'

        return response.json().get('id')

    @staticmethod
    def delete_api_user(userid: int) -> None:
        url = f'{ApiUsersService.BASE_URL}/api/admin/users/{userid}'

        response = requests.delete(url, auth=ApiUsersService.BASIC_AUTH)

        if response.status_code == 404:
            print(f'User {userid} already deleted. Skipping deletion')
            return

        assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'
        assert response.json().get('message') == 'User deleted'
