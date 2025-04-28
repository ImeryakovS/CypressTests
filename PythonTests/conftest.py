import pytest
import random

from PythonTests.services.api_users_service import ApiUsersService


@pytest.fixture
def created_user():
    rand = random.randint(1000, 9999)
    credentials =   {
        'name' : f'Sergey{rand}',
        'email' : f'Sergey{rand}@test.ru',
        'login' : f'Sergey{rand}',
        'password' : 'password123'
    }

    user_id = ApiUsersService.create_api_user(credentials)

    yield user_id

    ApiUsersService.delete_api_user(user_id)