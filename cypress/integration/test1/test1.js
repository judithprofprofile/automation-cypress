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
When("I Enter {string} and {string}", function (name, email) {
  const randomEmail = email === '<randomEmail>' ? faker.internet.email() : email;  // Use Faker to generate a random email if needed
  cy.get("input[data-qa='signup-name']").should('be.visible').type(name);
  cy.get("input[data-qa='signup-email']").should('be.visible').type(randomEmail);
});

When("I Click 'Signup' button", () => {
  cy.get("button[data-qa='signup-button']").should('be.visible').click()
});
Then("I Verify that 'ENTER ACCOUNT INFORMATION' is visible", () => {
  cy.url().should("contain",'automationexercise.com/signup')    
});
When('I Select checkbox Male or Female as Gender', () => {
  // cy.get("#id_gender1").should('be.visible').check()
  cy.get("input[type='radio']").should('be.visible').check({multiple: true})
});

When("I Fill details: {string} and I Select {string}, {string} and {string} as follows",function (pWord, dAy, moNth, yeAr){
  cy.wait(2000)
  cy.get("input#password").should('be.visible').type(pWord)
  cy.wait(2000)
  cy.get("#days").should('be.visible').select(dAy)
  cy.wait(2000)
  cy.get("#months").should('be.visible').select(moNth)
  cy.wait(2000)
  cy.get("#years").should('be.visible').select(yeAr)
  cy.wait(2000)

});
When("I Select checkbox Sign up for our newsletter!",function () {
  cy.get("#newsletter").should('be.visible').check()
//   // cy.get("input[type='checkbox']").should('be.visible').check()
});

When("I Select checkbox Receive special offers from our partners!",function() {
  cy.get("input[id='optin']").should('be.visible').check()
});

When("I Fill details as follows {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}" ,function (fsName, lsName, coMpany, addR, couNtry, stAte, ciTy, zipCde, moBile){
  cy.get("input[id='first_name']").should('be.visible').type(fsName)
  cy.get("input[id='last_name']").should('be.visible').type(lsName)
  cy.get("input[id='company']").should('be.visible').type(coMpany)
  cy.get("input[id='address1']").should('be.visible').type(addR)
  cy.get("select[id='country']").should('be.visible').select(couNtry)
  cy.get("#state").should('be.visible').type(stAte)
  cy.get("#city").should('be.visible').type(ciTy)
  cy.get("#zipcode").should('be.visible').type(zipCde)
  cy.get("#mobile_number").should('be.visible').type(moBile)
  
})
When("I Click Create Account button", () => {
  cy.get("button[data-qa='create-account']").should('be.visible').click()

})
When("I Verify that 'ACCOUNT CREATED!' is visible", () => {
  cy.get("h2[class='title text-center']").should('be.visible').contains("Account Created!")

})
When("I Click Continue button", () => {
  cy.get("a[data-qa='continue-button']").should('be.visible').click()

})
When("I Verify that 'Logged in as username' is visible", () => {
  // cy.get("i[class='fa fa-user']").should('contain.text','Logged in as ')
  cy.get("i[class='fa fa-user']").should('be.visible')

})
When("I Logout of my ACCOUNT", () => {
  cy.get("a[href='/logout']").should('be.visible').click()

})
When("I Enter {string} and {string} as follows",function (naMe, eMail){
  cy.wait(2000)
  cy.get("input[data-qa='signup-name']").should('be.visible').type(naMe)
  cy.wait(2000)
  cy.get("input[data-qa='signup-email']").should('be.visible').type(eMail)
  cy.wait(2000)
});
Then("I Verify error 'Email Address already exist!' is visible", () => {
  cy.get("p[style='color: red;']").should('contain.text','Email Address already exist!')

});