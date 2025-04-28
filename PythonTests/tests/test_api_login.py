import pytest

from PythonTests.conftest import created_user
from PythonTests.services.api_users_service import ApiUsersService


@pytest.mark.api
def test_create_user(created_user):
    assert created_user is not None
    print(f'Created user with id: {created_user}')

@pytest.mark.api
def test_delete_user(created_user):
    ApiUsersService.delete_api_user(created_user)
    print(f'Deleted user with id: {created_user}')
