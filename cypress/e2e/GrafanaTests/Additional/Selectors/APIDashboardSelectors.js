let { folderUid } = require("../Functions/APIDashboardTestFunction")

const bodyForCreateFolder = {
    title: 'Folder for API Test'
}

const bodyForCreateDashboard = {

        'dashboard': {
        'id': null,
        'uid': null,
        'title': "Dashboard for API",
        'tags': [ "API" ],
        'timezone': "browser",
        'schemaVersion': 16,
        'refresh': "25s"
},
        'folderUid': folderUid,
        'message': "Create new dashboard with API",
        'overwrite': false

}

module.exports = { bodyForCreateFolder, bodyForCreateDashboard }