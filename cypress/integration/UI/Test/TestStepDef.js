/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
import {Given,When,Then} from "cypress-cucumber-preprocessor/steps"
import TestDef from "./TestDef"



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

Then ('Clicks on login button in Sign in form', () => {
    TestDef.clickSubmitButton()
})

Then ('I validate user is loged in his profile', () => {
    TestDef.validateLoginIsSuccessfull()
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

Then('I enter Article Title', () =>{
    TestDef.enterArticleTitle()
})
Then('I enter Whats this Article about', () =>{
    TestDef.enterWhatisthisabout()
})
Then('I enter article text', () =>{
    TestDef.enterWriteYourArticle()
})
Then('I click publish', () =>{
    TestDef.clickOnPublishButton()
})
Then('updates user settings and logs out', () =>{
    TestDef.updateAndLogOutFromConduit()
})
Then ('user enters email from data', () =>{

    TestDef.enterEmailfromData()
})

Then ('user enters password from data', () =>{

    TestDef.enterPasswordFromData()
})