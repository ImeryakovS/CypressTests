import requests
import PythonTests.config.settings as settings
import PythonTests.data.dashboards_data as data

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

        return response.json().get('uid')

    @staticmethod
    def create_dashboard(folder_uid:str):
        url = f'{settings.BASE_URL}/api/dashboards/db'
        headers = {'Content-Type': 'application/json'}
        body = data.get_body_for_create_dashboard(folder_uid)
        response = requests.post(url,
                                 auth = settings.BASIC_AUTH,
                                 json = body,
                                 headers=headers)
        assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'

        return response.json().get('uid')
