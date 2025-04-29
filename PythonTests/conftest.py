import pytest
import shutil
import os

@pytest.fixture(scope="session", autouse=True)
def create_users_jsons():
    if not os.path.exists('./data/users.json'):
        shutil.copy('./data/users.template.json', './data/users.json')

@pytest.fixture(scope="session",autouse=True)
def create_dashboards_jsons():
    if not os.path.exists('./data/dashboards.json'):
        shutil.copy('./data/dashboards.template.json', './data/dashboards.json')


