import requests
import PythonTests.config.settings as settings
import PythonTests.data.dashboards_data as data

from PythonTests.services.utils import write_value_in_json, read_value_in_json


class ApiDashboardsService:

    @staticmethod
    def create_folder():
        url = f'{settings.BASE_URL}/api/folders'
        headers = {'Content-Type': 'application/json'}
        body = data.body_for_create_folder
        response = requests.post(url,
                                 auth=settings.BASIC_AUTH,
                                 json = body,
                                 headers=headers)
        assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'
        assert response.json().get('title') == 'Folder for API Test'

        folder_uid = response.json().get('uid')

        write_value_in_json('./data/dashboards.json', folder_uid, 'folderUid')

        return folder_uid

    @staticmethod
    def create_dashboard():
        url = f'{settings.BASE_URL}/api/dashboards/db'
        headers = {'Content-Type': 'application/json'}

        folder_uid = read_value_in_json('./data/dashboards.json', 'folderUid')

        body = data.get_body_for_create_dashboard(folder_uid)
        response = requests.post(url,
                                 auth = settings.BASIC_AUTH,
                                 json = body,
                                 headers=headers)
        assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'

        dashboard_uid = response.json().get('uid')

        write_value_in_json('./data/dashboards.json', dashboard_uid, 'dashboardUid')
        return dashboard_uid
