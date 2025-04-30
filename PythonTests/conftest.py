import atexit

import pytest
import shutil
import os
import logging

from PythonTests.data.users_credentials import existing_credentials, low_access_credentials
from PythonTests.helpers.cleanup import delete_user_by_login
from PythonTests.services.api_users_service import ApiUsersService

@pytest.fixture(scope="session", autouse=True)
def create_users_jsons():
    if not os.path.exists('./data/users.json'):
        shutil.copy('./data/users.template.json', './data/users.json')

@pytest.fixture(scope="session",autouse=True)
def create_dashboards_jsons():
    if not os.path.exists('./data/dashboards.json'):
        shutil.copy('./data/dashboards.template.json', './data/dashboards.json')

@pytest.fixture(scope="session",autouse=True)
def create_low_access_user():
    ApiUsersService.create_api_user(low_access_credentials)

@pytest.fixture(scope="session",autouse=True)
def create_existing_user():
    ApiUsersService.create_api_user(existing_credentials)

def pytest_sessionfinish(session, exitstatus):
    delete_user_by_login(existing_credentials)
    delete_user_by_login(low_access_credentials)
    logging.info("Cleaning up is done")
