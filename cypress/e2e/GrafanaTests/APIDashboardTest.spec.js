const { createFolderAndDashboard } = require("./Additional/Classes/APIDashboardPage")

describe ("Create folder and dashboards with API", () => {
    it ("User successfully created folder for dashboards with API",() => {
        createFolderAndDashboard.createNewFolder();
    })

    it ("User successfully created new dashboard in the folder with API", () => {
        createFolderAndDashboard.createNewDashboard();
    })

    /*it ("User successfully deleted folder for dashboards with API",() => {
        createFolderAndDashboard.deleteNewFolder();
    })*/


})
