/// <reference types="Cypress"/>
/// <reference types="cypress-xpath"/>
import CommonLocator from "./CommonLocator";
import ReusableData from "../CommonUtil/ReusableData"

module.exports=class CommonDef
{
    static clickingonElements()
    {
      cy.get('#main > div > .navbar > .container > .navbar-brand').click()
      
    }
}