import requests
import PythonTests.config.settings as settings
import PythonTests.data.dashboards_data as data
import logging

from PythonTests.helpers.decorators import api_error_handler
from PythonTests.services.utils import write_value_in_json, read_value_in_json, extract_value_in_object


class ApiDashboardsService:

    @staticmethod
    @api_error_handler
    def create_folder():
        url = f'{settings.BASE_URL}/api/folders'
        headers = {'Content-Type': 'application/json'}
        body = data.body_for_create_folder
        response = requests.post(url,
                                 auth=settings.BASIC_AUTH,
                                 json = body,
                                 headers=headers,
                                 timeout = 10)

        folder_uid = response.json().get('uid')

        write_value_in_json('./data/dashboards.json', folder_uid, 'folderUid')

        return response

    @staticmethod
    @api_error_handler
    def create_dashboard():
        url = f'{settings.BASE_URL}/api/dashboards/db'
        headers = {'Content-Type': 'application/json'}

        folder_uid = read_value_in_json('./data/dashboards.json', 'folderUid')

        body = data.get_body_for_create_dashboard(folder_uid)
        response = requests.post(url,
                                 auth = settings.BASIC_AUTH,
                                 json = body,
                                 headers=headers,
                                 timeout = 10)

        dashboard_uid = response.json().get('uid')

        write_value_in_json('./data/dashboards.json', dashboard_uid, 'dashboardUid')
        return response

    @staticmethod
    @api_error_handler
    def get_dashboard():
        dashboard_uid = read_value_in_json('./data/dashboards.json', 'dashboardUid')
        url = f'{settings.BASE_URL}/api/dashboards/uid/{dashboard_uid}'
        headers = {'Content-Type': 'application/json'}
        logging.info(f'Get dashboard uid: {dashboard_uid}')

        title = extract_value_in_object('title')

        response = requests.get(url,
                                auth=settings.BASIC_AUTH,
                                headers=headers,
                                timeout = 10)
        return response, title

    @staticmethod
    @api_error_handler
    def get_dashboard_with_incorrect_auth():
        dashboard_uid = read_value_in_json('./data/dashboards.json', 'dashboardUid')
        url = f'{settings.BASE_URL}/api/dashboards/uid/{dashboard_uid}'
        headers = {'Content-Type': 'application/json'}
        logging.info(f'Get dashboard uid: {dashboard_uid}')

        response = requests.get(url,
                                auth=('admin2','admin2'),
                                headers=headers,
                                timeout = 10)
        logging.info(f'Get status code: {response.status_code}')
        return response

    @staticmethod
    @api_error_handler
    def get_dashboard_with_low_level_access():
        dashboard_uid = read_value_in_json('./data/dashboards.json', 'dashboardUid')
        url = f'{settings.BASE_URL}/api/dashboards/uid/{dashboard_uid}'
        headers = {'Content-Type': 'application/json'}
        logging.info(f'Get dashboard uid: {dashboard_uid}')

        response = requests.get(url,
                                auth=settings.LOW_ACCESS,
                                headers=headers,
                                timeout = 10)
        logging.info(f'Get status code: {response.status_code}')
        return response

    @staticmethod
    @api_error_handler
    def get_404_dashboard():
        dashboard_uid = read_value_in_json('./data/dashboards.json', 'dashboardUid')
        dashboard_uid += '12'
        url = f'{settings.BASE_URL}/api/dashboards/uid/{dashboard_uid}'
        headers = {'Content-Type': 'application/json'}
        logging.info(f'Get dashboard uid: {dashboard_uid}')

        response = requests.get(url,
                                auth=settings.BASIC_AUTH,
                                headers=headers,
                                timeout = 10)
        logging.info(f'Get status code: {response.status_code}')
        return response

    @staticmethod
    @api_error_handler
    def delete_dashboard():
        dashboard_uid = read_value_in_json('./data/dashboards.json', 'dashboardUid')

        url = f'{settings.BASE_URL}/api/dashboards/uid/{dashboard_uid}'

        headers = {'Content-Type': 'application/json'}
        title = extract_value_in_object('title')

        logging.info(f'title: {title}')
        response = requests.delete(url,
                                   auth = settings.BASIC_AUTH,
                                   headers = headers,
                                   timeout = 10)
        if response.status_code == 404:
            logging.warning(f'User {dashboard_uid} already deleted. Skipping deletion')
            return response,title

        return response,title

    @staticmethod
    @api_error_handler
    def delete_folder_for_dashboard():
        folder_uid = read_value_in_json('./data/dashboards.json', 'folderUid')

        url = f'{settings.BASE_URL}/api/folders/{folder_uid}'

        headers = {'Content-Type': 'application/json'}
        response = requests.delete(url,
                                   auth = settings.BASIC_AUTH,
                                   headers = headers,
                                   timeout = 10)
        if response.status_code == 404:
            logging.warning(f'User {folder_uid} already deleted. Skipping deletion')
            return  response

        return response