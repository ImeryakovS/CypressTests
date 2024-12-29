const { createFolder, deleteFolder, createDashboardApi, deleteDashboard} = require("../Functions/APIDashboardTestFunction.js");

class createFolderAndDashboard {
    static createNewFolder() {
        return createFolder();
    }

    static deleteNewFolder() {
        return deleteFolder();
    }

    static createNewDashboard() {
        return createDashboardApi();
    }

    static deleteNewDashboard () {
        return deleteDashboard();
    }
}

module.exports = { createFolderAndDashboard };
