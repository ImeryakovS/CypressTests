import pytest

from PythonTests.services.api_dashboards_service import ApiDashboardsService
from PythonTests.conftest import created_folder_for_dashboard

@pytest.mark.api
def test_create_folder_and_dashboard(created_folder_for_dashboard):
    folder_uid = created_folder_for_dashboard

    dashboard_uid = ApiDashboardsService.create_dashboard(folder_uid)
    assert dashboard_uid is not None
    print(f'Created dashboard UID: {dashboard_uid}')


