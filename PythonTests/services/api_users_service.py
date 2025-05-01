import inspect

import requests
from requests import Response
import logging

import PythonTests.config.settings as settings
from PythonTests.helpers.decorators import api_error_handler, retry
from PythonTests.services.utils import write_value_in_json, read_value_in_json

class ApiUsersService:

    @staticmethod
    @api_error_handler
    @retry(3)
    def create_api_user(credentials: dict) -> Response:
        url = f'{settings.BASE_URL}/api/admin/users'
        headers = {'Content-Type': 'application/json'}
        response = requests.post(url,
                                 auth=settings.BASIC_AUTH,
                                 json=credentials,
                                 headers=headers,
                                 timeout=10)
        logging.info(f"Method: {inspect.currentframe().f_code.co_name}: Status - {response.status_code}, Body - {response.text}")
        user_id = response.json().get('id')
        if response.status_code == 200:
            write_value_in_json('./data/users.json', user_id,'userId')
            return response
        else:
            logging.info(f'User {user_id} is existing.')
            return response

    @staticmethod
    @api_error_handler
    @retry(3)
    def find_user_by_login(login: str) -> int:
        url = f'{settings.BASE_URL}/api/users/lookup?loginOrEmail={login}'
        headers = {'Content-Type': 'application/json'}
        try:
            response = requests.get(url,
                                    auth=settings.BASIC_AUTH,
                                    headers=headers,
                                    timeout = 10)
            logging.info(f"Method: {inspect.currentframe().f_code.co_name}: Status - {response.status_code}, Body - {response.text}")

            user_id = response.json().get('id')
            return user_id
        except Exception as e:
            logging.error(f'Error: {e}')

    @staticmethod
    @api_error_handler
    @retry(3)
    def delete_api_user(userid=None):
        if userid is None:
            userid = read_value_in_json('./data/users.json', 'userId')

        url = f'{settings.BASE_URL}/api/admin/users/{userid}'
        response = requests.delete(url,
                                   auth=settings.BASIC_AUTH,
                                   timeout = 10)
        logging.info(f"Method: {inspect.currentframe().f_code.co_name}: Status - {response.status_code}, Body - {response.text}")

        if response.status_code == 404:
            print(f'User {userid} already deleted. Skipping deletion')
            return

        return response

    @staticmethod
    @api_error_handler
    @retry(3)
    def create_bad_request():
        url = f'{settings.BASE_URL}/api/admin/users'
        headers = {'Content-Type': 'application/json'}

        response = requests.post(url,
                                 auth=settings.BASIC_AUTH,
                                 headers=headers,
                                 timeout = 10)
        logging.info(f"Method: {inspect.currentframe().f_code.co_name}: Status - {response.status_code}, Body - {response.text}")

        return response



