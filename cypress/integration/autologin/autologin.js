import 'cypress-iframe';

import { Before, After, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


  
  Before(() => {

    cy.reload()
  })
  
  After(() => {
    cy.reload()
  })


Given('I am on autoexercise home page', () => {
    cy.visit('https://automationexercise.com/')
})

Then('I Verify that home page is visible successfully', () => {
  cy.url().should("contain",'automationexercise.com/')    
});
When("I Click on 'Signup and Login' button", () => {
      cy.get("a[href='/login']").should('be.visible').click()
});
Then("I Verify 'New User Signup and Login!' is visible", () => {
  cy.url().should("contain",'automationexercise.com/login')    
});
When("I Enter correct {string} and {string}",function (eMail, pWord){
  cy.wait(2000)
  cy.get("input[data-qa='login-password']").should('be.visible').type(pWord)
  cy.wait(2000)
  cy.get("input[data-qa='login-email']").should('be.visible').type(eMail)
  cy.wait(2000)
});
When('I Click login button', () => {
  cy.get("button[data-qa='login-button']").should('be.visible').click()
});
Then("I Verify that 'Logged in as username' is visible", () => {
  // cy.get("i[class='fa fa-user']").should('contain.text','Logged in as ')
  cy.get("i[class='fa fa-user']").should('be.visible')

})
When("I Logout of my ACCOUNT", () => {
  cy.get("a[href='/logout']").should('be.visible').click()

})
When("I Enter incorrect {string} and {string}",function (eMail, pWord){
  cy.wait(2000)
  cy.get("input[data-qa='login-password']").should('be.visible').type(pWord)
  cy.wait(2000)
  cy.get("input[data-qa='login-email']").should('be.visible').type(eMail)
  cy.wait(2000)
});
Then("Verify error 'Your email or password is incorrect!' is visible", () => {
  cy.get("p[style='color: red;']").should('contain.text','Your email or password is incorrect!')

});