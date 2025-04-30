import pytest

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

@pytest.mark.PositiveApi
def test_get_dashboard():
    response, title = ApiDashboardsService.get_dashboard()
    assert title == 'Dashboard for API'
    assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'
    assert response.json().get("dashboard",{}).get("title") == title

@pytest.mark.PositiveApi
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

@pytest.mark.NegativeDashboard
def test_get_dashboard_with_incorrect_auth():
    response = ApiDashboardsService.get_dashboard_with_incorrect_auth()
    assert response.status_code == 401, f'Expected status code 401, got {response.status_code}'

@pytest.mark.NegativeDashboard
def test_get_dashboard_with_low_level_access():
    response = ApiDashboardsService.get_dashboard_with_low_level_access()
    assert response.status_code == 403, f'Expected status code 403, got {response.status_code}'

@pytest.mark.NegativeDashboard
def test_get_404_dashboard():
    response = ApiDashboardsService.get_404_dashboard()
    assert response.status_code == 404, f'Expected status code 404, got {response.status_code}'

