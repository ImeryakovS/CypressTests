import json
import logging
import inspect

def write_value_in_json(file_path, saved_value, json_value):
    with open(file_path, 'r') as file:
        json_file = json.load(file)

    json_file[json_value] = saved_value

    with open(file_path, 'w') as file:
        json.dump(json_file,file,indent=2)
    logging.info(f'Function: {inspect.currentframe().f_code.co_name}, {json_value}: {saved_value}')

def read_value_in_json(file_path, json_value):
    with open(file_path, 'r') as file:
        json_file = json.load(file)

    saved_value = json_file[json_value]
    if saved_value is None:
        logging.warning(f'Key {json_value} not found in {file_path}')
        raise ValueError

    logging.info(f'Function: {inspect.currentframe().f_code.co_name}, {json_value}: {saved_value}')

    return saved_value

def assert_status_message(response, expected_status, expected_message):
    assert response.status_code == expected_status, f'Expected {expected_status}, got {response.status_code}'
    assert response.json().get('message') == expected_message
