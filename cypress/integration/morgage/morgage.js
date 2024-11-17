import 'cypress-iframe';

import { Before, After, Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Before(() => {

    cy.reload()
  })
  
  After(() => {
    cy.reload()
  })


Given('I am on the Mortgage calculator website', () => {
    cy.visit('https://www.mortgagecalculator.org/')
    
})

    When('I enter the following data', (dataTable) => {
        cy.scrollTo('center')
        cy.wait(2000)
        cy.get('#homeval').should('be.visible').clear().type(dataTable.rawTable[1][1])
        cy.wait(2000)
        cy.get('#downpayment').should('be.visible').clear().type(dataTable.rawTable[2][1])
        cy.wait(2000)
        cy.get('#intrstsrate').should('be.visible').clear().type(dataTable.rawTable[3][1]);
        cy.wait(2000)
        cy.get('#loanterm').should('be.visible').clear().type(dataTable.rawTable[4][1]);
        cy.wait(2000)
        cy.get("select[name='param[start_month]']").should('be.visible').select(dataTable.rawTable[5][1]);
        cy.wait(2000)
        cy.get('#start_year').should('be.visible').type(dataTable.rawTable[6][1]);
        
    });
      When('accept default value for all the remaining values', () => {

    });
      When('I click on calculate link', () => {
        cy.get("input[value='Calculate']").should('be.visible').click()

    });

    Then('I should get mortgage offer with {string}, {string}, {string}, {string}, {string} and {string}', (toMonthlyPmt, doPmtAmount, doPmtPerce, loPayoffDate, totalIntPaid, monthlyTaxPaid) => {
        // cy.scrollTo('center')
        cy.get(".repayment-block").scrollIntoView()
        cy.get(".repayment-block .rw-box:nth-of-type(1) .left-cell").should('be.visible').contains(toMonthlyPmt)
        cy.get(".repayment-block .rw-box:nth-of-type(2) .left-cell").should('be.visible').contains(doPmtAmount)
        cy.get(".repayment-block .rw-box:nth-of-type(2) .right-cell").should('be.visible').contains(doPmtPerce)
        cy.get(".repayment-block .rw-box:nth-of-type(4) .left-cell").should('be.visible').contains(loPayoffDate)
        cy.get(".repayment-block .rw-box:nth-of-type(4) .right-cell").should('be.visible').contains(totalIntPaid)
        cy.get("div:nth-of-type(5) > .left-cell").should('be.visible').should('be.visible').contains(monthlyTaxPaid)
        
    });

    When('I enter the following data information', (dataTable) => {
        cy.scrollTo('center')
        cy.wait(2000)
        cy.get('input#pptytax').should('be.visible').clear().type(dataTable.rawTable[1][1])
        cy.wait(2000)
        cy.get('input#pmi').should('be.visible').clear().type(dataTable.rawTable[2][1])
        cy.wait(2000)
        cy.get('input#hoi').should('be.visible').clear().type(dataTable.rawTable[3][1]);
        cy.wait(2000)
        cy.get('input#hoa').should('be.visible').clear().type(dataTable.rawTable[4][1]);
        cy.wait(2000)
        cy.get("select[name='param[milserve]']").should('be.visible').select(dataTable.rawTable[5][1]);
        cy.wait(2000)
        
    });

    Then('I should get mortgage offer with as follows {string}, {string}, {string}, {string} and {string}', (toTaxPaid, monHomeInsu, toHomeInsu, annPmtAmount, toof360Pmt ) => {
    
        // cy.scrollTo('center')
        cy.get(".repayment-block").scrollIntoView()
        cy.get("div:nth-of-type(5) > .right-cell > h3").should('be.visible').contains(toTaxPaid)
        cy.get("div:nth-of-type(6) > .left-cell").should('be.visible').contains(monHomeInsu)
        cy.get("div:nth-of-type(6) > .right-cell").should('be.visible').contains(toHomeInsu)
        cy.get("div:nth-of-type(7) > .left-cell > h3").should('be.visible').contains(annPmtAmount)
        cy.get("div:nth-of-type(7) > .right-cell > h3").should('be.visible').contains(toof360Pmt)
        
    });