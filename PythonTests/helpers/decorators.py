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

def retry(attempts):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            retries = 0
            while retries < attempts:
                try:
                    result = func(*args, **kwargs)
                    return result
                except Exception as e:
                    retries += 1
                    logging.error(f'[{func.__name__}] is not working. Try attempt = {retries}. {e}')
                    if retries > attempts:
                        logging.error(f'[{func.__name__}]: Unexpected error: {e}\n{traceback.format_exc()}')
                        raise e
        return wrapper
    return decorator


