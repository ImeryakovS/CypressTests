const { createFolder, deleteFolder, createDashboard } = require("../Functions/APIDashboardTestFunction.js");

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
}

module.exports = { createFolderAndDashboard };
