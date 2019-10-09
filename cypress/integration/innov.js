import pageObject from '../Pages/pageObject'
/// <reference types = "cypress" />

describe("Navigation and Login Check", () => {
    it('navigates to inno veg site and tries to log in', () =>{
        const po = new pageObject()
        po.navigation()
        
        const username = po.getValue()
        //console.log(username)   
        po.login('Prince@rsk-bsl.com', 'Prince@123')
        
        po.CheckLogin('Prince@rsk-bsl.com')
    })
})      