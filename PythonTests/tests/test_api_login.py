import pytest

from PythonTests.data.users_credentials import credentials
from PythonTests.services.api_users_service import ApiUsersService


@pytest.mark.api
def test_create_user():
    user_id = ApiUsersService.create_api_user(credentials)
    assert user_id is not None

@pytest.mark.api
def test_delete_user():
    user_deleted = ApiUsersService.delete_api_user()
    assert user_deleted is True

