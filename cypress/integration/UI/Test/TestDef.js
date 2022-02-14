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
        cy.xpath(TestLoc.getSettingsButton,{timeout: ReuseData.explicitTimeOut}).click()
    }
    static enterEmailFirstUser()
    {
        cy.xpath(TestLoc.getUserEmail,{timeout: ReuseData.explicitTimeOut}).type(ReuseData.EmailFirstUser)
    }

    static enterEmailSecondUser()
    {
        cy.xpath(TestLoc.getUserEmail,{timeout: ReuseData.explicitTimeOut}).type(ReuseData.EmailSecondUser)
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

    static enterArticleTitle(string) 
    {
        cy.xpath(TestLoc.getArticleTitle,{timeout: ReuseData.explicitTimeOut}).type(string)
    }

    static enterWhatisthisabout(string) 
    {
        cy.xpath(TestLoc.getWhatIsThisAboutinput,{timeout: ReuseData.explicitTimeOut}).type(string)
    }

    static enterWriteYourArticle(string) 
    {
        cy.xpath(TestLoc.getWriteYourArticle,{timeout: ReuseData.explicitTimeOut}).type(string)
    }

    static clickOnPublishButton()
    {
        cy.xpath(TestLoc.getPublishButton,{timeout: ReuseData.explicitTimeOut}).click()
    }

    static updateAndLogOutFromConduit()
    {
        cy.xpath(TestLoc.getSettingsButton,{timeout: ReuseData.explicitTimeOut}).click()
        cy.xpath(TestLoc.getSignOutButton,{timeout: ReuseData.explicitTimeOut}).click()
        cy.xpath(TestLoc.getUpdateUserSettingsField,{timeout: ReuseData.explicitTimeOut}).click()
    }





}