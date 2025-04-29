import pytest

from PythonTests.services.api_dashboards_service import ApiDashboardsService

@pytest.mark.api
def test_create_folder_for_dashboard():

    folder_uid = ApiDashboardsService.create_folder()
    assert folder_uid is not None

@pytest.mark.api
def test_create_dashboard_in_folder():

    dashboard_uid = ApiDashboardsService.create_dashboard()
    assert dashboard_uid is not None

@pytest.mark.api
def test_delete_dashboard_in_folder():

    dashboard_uid = ApiDashboardsService.delete_dashboard()
    assert dashboard_uid is True
