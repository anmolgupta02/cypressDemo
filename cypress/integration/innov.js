import pageObject from '../Pages/pageObject'
import adminpage from '../Pages/adminPage'
/// <reference types = "cypress" />

describe("Navigation, Login and Admin Navigation", () => {

    it('navigates to inno veg site and tries to log in', () => {
        const po = new pageObject()

        po.navigation()
        
        po.login('fixtures:data:username', 'Prince@123')

        po.CheckLogin('Prince@rsk-bsl.com')

        po.NavigateToAdminSettings()
    })

    it('Checks for the Admin Related Functionality', () => {

        const hp = new adminpage()

        hp.checkTitle('RoyalUI Dashboard')
    })
})      