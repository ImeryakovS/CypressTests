import pytest

from PythonTests.data.users_credentials import credentials, existing_credentials
from PythonTests.services.api_users_service import ApiUsersService


@pytest.mark.PostiveApi
def test_create_user():
    response = ApiUsersService.create_api_user(credentials)

    assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'
    assert response.json().get('message') == 'User created', 'User not created'


@pytest.mark.PostiveApi
def test_delete_user():
    response = ApiUsersService.delete_api_user()

    assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'
    assert response.json().get('message') == 'User deleted'

@pytest.mark.NegativeApi
def test_create_existing_user():
    ApiUsersService.create_api_user(existing_credentials)
    ApiUsersService.create_existing_api_user(existing_credentials)
    response = ApiUsersService.delete_api_user()

    assert response.status_code == 200, f'Expected status code 200, got {response.status_code}'
    assert response.json().get('message') == 'User deleted'

@pytest.mark.NegativeApi
def test_create_bad_request():
    response = ApiUsersService.create_bad_request()
    assert response.status_code == 400, f'Expected status code 400, got {response.status_code}'
    assert response.json().get('message') == 'bad request data'



