body_for_create_folder = {
    'title': 'Folder for API Test'
}

def get_body_for_create_dashboard(folder_uid:str)-> dict:
    return {
    'dashboard': {
        'id': None,
        'uid': None,
        'title': "Dashboard for API",
        'tags': [ "API" ],
        'timezone': "browser",
        'schemaVersion': 16,
        'refresh': "25s"
    },
    'folderUid': folder_uid,
    'message': "Create new dashboard with API",
    'overwrite': False
}