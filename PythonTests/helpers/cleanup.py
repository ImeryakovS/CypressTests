import inspect
import logging

from PythonTests.services.api_users_service import ApiUsersService

def delete_user_by_login(dictionary):
    user_id = ApiUsersService.find_user_by_login(dictionary['login'])
    ApiUsersService.delete_api_user(user_id)
    logging.info(f'Function: {inspect.currentframe().f_code.co_name}, {dictionary["login"]} is deleted')