const { createFolder, deleteFolder, createDashboardApi, deleteDashboard} = require("../Functions/APIDashboardTestFunction.js");

class createFolderAndDashboard {
    static createNewFolder() {
        void createFolder();
    }

    static deleteNewFolder() {
        deleteFolder();
    }

    static createNewDashboard() {
        void createDashboardApi();
    }

    static deleteNewDashboard () {
        deleteDashboard();
    }
}

module.exports = { createFolderAndDashboard };
