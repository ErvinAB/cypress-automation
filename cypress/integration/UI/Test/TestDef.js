/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>

import TestLocator from "./TestLocator";
const TestLoc=new TestLocator()
import ReusableData from "../CommonUtil/ReusableData"
const ReuseData=new ReusableData()

module.exports=class TestDef
{
    static clickOnLoginButton()
    {
        cy.xpath(TestLoc.getSignInButton,{timeout: ReuseData.explicitTimeOut}).click()
    }
    static enterEmailFirstUser()
    {
        cy.xpath(TestLoc.getUserEmail,{timeout: ReuseData.explicitTimeOut}).type(ReuseData.EmailFirstUser)
    }

    static enterEmailSecondUser()
    {
        cy.xpath(TestLoc.getUserEmail,{timeout: ReuseData.explicitTimeOut}).type(ReuseData.EmailSecondUser)
    }

    static clickSubmitButton()
    {
        cy.xpath(TestLoc.getSignInButtonClick,{timeout: ReuseData.explicitTimeOut}).click()
    }

    static enterEmailThirdUser()
    {
        cy.xpath(TestLoc.getUserEmail,{timeout: ReuseData.explicitTimeOut}).type(ReuseData.EmailThirdUser)
    }

    static enterPasswordForUsers()
    {
        cy.xpath(TestLoc.getUserPassword,{timeout: ReuseData.explicitTimeOut}).type(ReuseData.Password)
    }

    static logOutOfPage()
    {
        cy.xpath(TestLoc.getSettingsButton,{timeout: ReuseData.explicitTimeOut}).click()
        cy.xpath(TestLoc.getSignOutButton,{timeout: ReuseData.explicitTimeOut}).click()

    }

    static clickOnNewPost()
    {
        cy.xpath(TestLoc.getNewPostButton,{timeout: ReuseData.explicitTimeOut}).click()
    }

    static enterArticleTitle() 
    {
        cy.xpath(TestLoc.getArticleTitle,{timeout: ReuseData.explicitTimeOut}).type(ReuseData.ArticleTitle)
    }

    static enterWhatisthisabout() 
    {
        cy.xpath(TestLoc.getWhatIsThisAboutinput,{timeout: ReuseData.explicitTimeOut}).type(ReuseData.thisIsAbout)
    }

    static enterWriteYourArticle() 
    {
        cy.xpath(TestLoc.getWriteYourArticle,{timeout: ReuseData.explicitTimeOut}).type(ReuseData.articlePost)
    }

    static clickOnPublishButton()
    {
        cy.xpath(TestLoc.getPublishButton,{timeout: ReuseData.explicitTimeOut}).click()
    }

    static updateAndLogOutFromConduit()
    {
        cy.xpath(TestLoc.getSettingsButton,{timeout: ReuseData.explicitTimeOut}).click()
        cy.xpath(TestLoc.getUpdateUserSettingsField,{timeout: ReuseData.explicitTimeOut}).type(ReuseData.userSettingsUpdate)
        cy.xpath(TestLoc.getSignOutButton,{timeout: ReuseData.explicitTimeOut}).click()
        
    }

    static validateLoginIsSuccessfull()
    {

        cy.xpath(TestLoc.getValidatorForLogIn,{timeout: ReuseData.explicitTimeOut}).should('contain', 'No articles are here... yet.')
    }



}