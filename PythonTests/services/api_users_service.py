import requests
import PythonTests.config.settings as settings
from PythonTests.services.utils import write_value_in_json, read_value_in_json

class ApiUsersService:

    @staticmethod
    def create_api_user(credentials: dict) -> int:
        url = f'{settings.BASE_URL}/api/admin/users'
        headers = {'Content-Type': 'application/json'}

        response = requests.post(url, auth=settings.BASIC_AUTH, json=credentials, headers=headers)
        assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'
        assert response.json().get('message') == 'User created', 'User not created'

        user_id = response.json().get('id')

        write_value_in_json('./data/users.json', user_id,'userId')

        return user_id

    @staticmethod
    def delete_api_user():
        userid = read_value_in_json('./data/users.json', 'userId')

        url = f'{settings.BASE_URL}/api/admin/users/{userid}'
        response = requests.delete(url, auth=settings.BASIC_AUTH)

        if response.status_code == 404:
            print(f'User {userid} already deleted. Skipping deletion')
            return

        assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'
        assert response.json().get('message') == 'User deleted'

        return True


