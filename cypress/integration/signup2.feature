Feature: Demoblaze login functionality test

    Application regression​
  @login1
    
    Scenario: Navigating to the Demoblaze homepage
        Given I navigate to demoblaze ecommerce page
        When I click on the sign up button
        When I enter a valid username and password
        When I click the sign up button
        Then I should see a message alert

        @signup
    Scenario: signup with an existing username and existing password
        Given I navigate to demoblaze ecommerce page
        When I click on the sign up button
        When I enter an existing username and an existing password
        When I click the sign up button
       Then I should see an instruction This user already exist  

       @signup
    Scenario: sign up without inputing username and password
        Given I navigate to demoblaze ecommerce page
        When I click on the sign up button
        When I do not input username and password
        When I click the sign up button
         Then I should see an instruction Please fill out Username and Password  


        @signup
        Scenario: signup up with blank password
        Given I navigate to demoblaze ecommerce page
        When I click on the sign up button
        When I click on sign up with username and blank password
        When I click the sign up button
        Then I shoud see an error message please fill out password

