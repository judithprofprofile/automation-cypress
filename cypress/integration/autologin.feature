Background:
    Given I am on autoexercise home page
    Then I Verify that home page is visible successfully
    When I Click on 'Signup and Login' button
    Then I Verify 'New User Signup and Login!' is visible



Scenario Outline: Test Case 1: Login User with correct email and password
    # Given I am on autoexercise home page
    # Then I Verify that home page is visible successfully
    # When I Click on 'Signup and Login' button
    # Then I Verify 'New User Signup and Login!' is visible
    When I Enter correct "<email address>" and "<password>"
    When I Click login button
    Then I Verify that 'Logged in as username' is visible
    When I Logout of my ACCOUNT
    Examples:
      | email address         | password |
      | odexsolo007@gmail.com | Yahoo777 |


    Scenario Outline: Test Case 2: Login User with incorrect email and password
    # Given I am on autoexercise home page
    # Then I Verify that home page is visible successfully
    # And Click on 'Signup / Login' button
    # Then I Verify 'New User Signup and Login!' is visible
    When I Enter incorrect "<email address>" and "<password>"
    And I Click login button
    Then Verify error 'Your email or password is incorrect!' is visible
    Examples:
      | email address | password |
      | odex90@gmail.com |Yah70 |



    Scenario Outline: TEST CASES 4:
    Given I am on autoexercise home page
    Then I Verify that home page is visible successfully
    And Click on Contact Us button
    And Verify GET IN TOUCH is visible
    And Enter "<name>", "<email>", "<subject>" and "<message>"
    And I click on choose file to upload document
    And Click Submit button
    And Click OK button
    Then Verify success message 'Success! Your details have been submitted successfully.' is visible
    And Click Home button
    Then I Verify that home page is visible successfully
    Examples:
      | name | email                 | subject      | message                             |
      | solo | odexsolo007@gmail.com | Order Issues | Please unable to place my order with the payment gateway |