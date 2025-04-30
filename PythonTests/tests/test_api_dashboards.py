import pytest
import logging

from PythonTests.services.api_dashboards_service import ApiDashboardsService

@pytest.mark.PositiveApi
def test_create_folder_for_dashboard():

    response = ApiDashboardsService.create_folder()

    assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'
    assert response.json().get('title') == 'Folder for API Test'

@pytest.mark.PositiveApi
def test_create_dashboard_in_folder():

    response = ApiDashboardsService.create_dashboard()
    assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'

@pytest.mark.PositiveApi1
def test_delete_dashboard_in_folder():
    response,title = ApiDashboardsService.delete_dashboard()

    assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'
    assert response.json().get('title') == title
    assert response.json().get('message') == f'Dashboard {title} deleted'

@pytest.mark.PositiveApi
def test_delete_folder_for_dashboard():
    response = ApiDashboardsService.delete_folder_for_dashboard()

    assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'
    assert response.json().get('message') == 'Folder deleted'
