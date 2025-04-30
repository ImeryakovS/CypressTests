import pytest

from PythonTests.data.users_credentials import credentials, existing_credentials
from PythonTests.services.api_users_service import ApiUsersService
from PythonTests.services.utils import assert_status_message

@pytest.mark.PostiveApi
def test_create_user():
    response = ApiUsersService.create_api_user(credentials)
    assert_status_message(response, 200, 'User created')

@pytest.mark.PostiveApi
def test_delete_user():
    response = ApiUsersService.delete_api_user()
    assert_status_message(response, 200, 'User deleted')

@pytest.mark.NegativeApi
def test_create_existing_user():
    response_created = ApiUsersService.create_api_user(existing_credentials)
    assert_status_message(response_created, 200, 'User created')

    ApiUsersService.create_existing_api_user(existing_credentials)
    response_existing = ApiUsersService.create_existing_api_user(existing_credentials)

    message_existing = response_existing.json().get('message')
    assert_status_message(response_existing, 412, message_existing)

    response_delete = ApiUsersService.delete_api_user()
    assert_status_message(response_delete, 200, 'User deleted')

@pytest.mark.NegativeApi
def test_create_bad_request():
    response = ApiUsersService.create_bad_request()
    assert_status_message(response, 400, 'bad request data')




