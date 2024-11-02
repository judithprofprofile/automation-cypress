import 'cypress-iframe';

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach( function(){ 
    cy.fixture('example').then(function(data)
    {
        this.data = data 
    })
})


Given ('I navigate to demoblaze ecommerce page', function() {

  // Visit the website
  cy.visit('https://www.demoblaze.com/')
  cy.wait(10000)
  cy.get('#signin2.nav-link').should('be.visible') // Ensuring the signup button is visible
})

//click on signup button

When ('I click on the sign up button' , function() {
    cy.get('#signin2').click()
    cy.get('#signInModal').should('be.visible') // Verify the signup modal is visible
     cy.wait(4000)
})

//valid username and password
When ('I enter a valid username and password' , function() {
    cy.get('#sign-username').type("judithh")
    cy.wait(4000)
    cy.get('#sign-password').type("rain")
    cy.wait(4000)
})

// existing username and an existing password
When ('I enter an existing username and an existing password', function() {
    cy.get('[id="sign-username"]').type(this.data.ExistingUsername)
        cy.get('[id="sign-password"]').type(this.data.ExistingPassword)
          cy.wait(4000)
})

//signup without using username and password

When('I do not input username and password', function(){
    cy.wait(4000)
})


When ('I click on sign up with username and blank password', function(){
    cy.get('#sign-username').type("judithh")
    cy.wait(4000)
    
})



//clicking on the signup button
When ('I click the sign up button', function() {
    cy.get('[class="btn btn-primary"]').contains('Sign up').click();
});


//assertions
Then('I should see a message alert', () => {
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.contain('sign up successful.')
    })
})


Then ('I should see an instruction This user already exist', () =>  {
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.contain('This user already exist.')
    })
})

Then ('I should see an instruction Please fill out Username and Password', () => {
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.contain(' Please fill out Username and Password.')
    })
})   

//assert
Then ('I shoud see an error message please fill out password', () => {
    cy.on('window:alert', (alertText) => {
        expect(alertText).to.contain('Please fill out Password.')
    })
})   




