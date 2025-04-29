import requests
from requests import Response

import PythonTests.config.settings as settings
from PythonTests.services.utils import write_value_in_json, read_value_in_json

class ApiUsersService:

    @staticmethod
    def create_api_user(credentials: dict) -> Response:
        url = f'{settings.BASE_URL}/api/admin/users'
        headers = {'Content-Type': 'application/json'}

        response = requests.post(url,
                                 auth=settings.BASIC_AUTH,
                                 json=credentials,
                                 headers=headers)

        user_id = response.json().get('id')

        write_value_in_json('./data/users.json', user_id,'userId')

        return response

    @staticmethod
    def create_existing_api_user(credentials: dict) -> Response:
        url = f'{settings.BASE_URL}/api/admin/users'
        headers = {'Content-Type': 'application/json'}

        response = requests.post(url,
                                 auth=settings.BASIC_AUTH,
                                 json=credentials,
                                 headers=headers)

        return response

    @staticmethod
    def delete_api_user():
        userid = read_value_in_json('./data/users.json', 'userId')

        url = f'{settings.BASE_URL}/api/admin/users/{userid}'
        response = requests.delete(url,
                                   auth=settings.BASIC_AUTH)

        if response.status_code == 404:
            print(f'User {userid} already deleted. Skipping deletion')
            return

        return response

    @staticmethod
    def create_bad_request():
        url = f'{settings.BASE_URL}/api/admin/users'
        headers = {'Content-Type': 'application/json'}

        response = requests.post(url,
                                 auth=settings.BASIC_AUTH,
                                 headers=headers)

        return response



