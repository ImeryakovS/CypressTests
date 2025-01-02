const { createFolderAndDashboard } = require("./Additional/Classes/APIDashboardPage")

describe ("Create folder and dashboards with API", () => {
    it ("User successfully created folder for dashboards with API",() => {
        createFolderAndDashboard.createNewFolder()
            .then (() => createFolderAndDashboard.createNewDashboard() )
            .then (() => createFolderAndDashboard.deleteNewDashboard() )
            .then (() => createFolderAndDashboard.deleteNewFolder() )
    })
})
