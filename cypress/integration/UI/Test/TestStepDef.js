/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import CommonDef from "../CommonUtil/CommonDef"
import TestDef from "./TestDef"

// Given('User Open Url',() =>{

//     //cy.visit('https://demoqa.com/')
//     cy.visit(Cypress.config().BaseURI)
// })
// Then('User Click on Element',() =>{
// CommonDef.clickingonElements()
// })
// Then('User Click on TextBox',() =>{
// TestDef.clickingonTextBox()
// })
// Then('User Fill all the Details',() =>{
// TestDef.FillingDetailsForTextBook()   
// })
// Then('User click on Submit Button',() =>{
// TestDef.clickingonSubmitButton() 
// })


Given('User navigates to Conduit',() =>{
    cy.visit(Cypress.config().baseUrl)
})
Then('Clicks on login button',() =>{
    TestDef.clickOnLoginButton()
})
Then('user enters email',() =>{
    TestDef.enterEmailFirstUser()
})
Then('user enters password', () => {
    TestDef.enterPasswordForUsers()
})
Then('Logs out of Conduit', () => {
    TestDef.logOutOfPage()
})

Then('user enters Second test email', () =>{
    TestDef.enterEmailSecondUser()
})

Then ('user enters Third test email', () => {
    TestDef.enterEmailThirdUser()
})

Then('I click on new Post', () =>{
    TestDef.clickOnNewPost()
})

Then('I enter Article Title ', (string) =>{
    TestDef.enterArticleTitle(string)
})
Then('I enter Whats this Article about', (string) =>{
    TestDef.enterWhatisthisabout(string)
})
Then('I enter article text', (string) =>{
    TestDef.enterWriteYourArticle(string)
})
Then('I click publish', () =>{
    TestDef.clickOnPublishButton()
})
Then('updates user settings and logs out', () =>{
    TestDef.updateAndLogOutFromConduit()
})