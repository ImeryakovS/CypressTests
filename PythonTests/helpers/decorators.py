import logging
import traceback
from functools import wraps
import requests

def api_error_handler(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        try:
            result = func(*args, **kwargs)
            return result
        except requests.exceptions.HTTPError as e:
            logging.error(f'[{func.__name__}]: HTTPError: {e}')
            raise
        except requests.exceptions.RequestException as e:
            logging.error(f'[{func.__name__}]: RequestException: {e}')
            raise
        except Exception as e:
            logging.error(f'[{func.__name__}]: Unexpected error: {e}\n{traceback.format_exc()}')
            raise
    return wrapper