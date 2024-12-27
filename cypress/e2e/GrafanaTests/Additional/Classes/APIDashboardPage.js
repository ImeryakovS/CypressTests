const { createFolder, deleteFolder, createDashboard, deleteDashboard} = require("../Functions/APIDashboardTestFunction.js");

class createFolderAndDashboard {
    static createNewFolder() {
        void createFolder();
    }

    static deleteNewFolder() {
        deleteFolder();
    }

    static createNewDashboard() {
        void createDashboard();
    }

    static deleteNewDashboard () {
        deleteDashboard();
    }
}

module.exports = { createFolderAndDashboard };
