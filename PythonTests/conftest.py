import pytest

from PythonTests.data.users_credentials import credentials
from PythonTests.services.api_dashboards_service import ApiDashboardsService
from PythonTests.services.api_users_service import ApiUsersService


@pytest.fixture
def created_user():
    user_id = ApiUsersService.create_api_user(credentials)
    yield user_id
    ApiUsersService.delete_api_user(user_id)

@pytest.fixture
def created_folder_for_dashboard():
    folder_uid = ApiDashboardsService.create_folder()
    yield folder_uid


