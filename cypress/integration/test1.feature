Feature: Register User
    Application regression​
  @signup1


Scenario Outline: Test Case 1: Register User
    Given I am on autoexercise home page
    Then I Verify that home page is visible successfully
    When I Click on 'Signup and Login' button
    Then I Verify 'New User Signup and Login!' is visible
    When  I Enter "<name>" and "<email address>"
    When I Click 'Signup' button
    Then I Verify that 'ENTER ACCOUNT INFORMATION' is visible
    When I Select checkbox Male or Female as Gender
    # When I Fill details: "<Password>" and I Select "<Days>", "<Months>" and "<Years>" as follows
    # When I Select checkbox Sign up for our newsletter!
    # When I Select checkbox Receive special offers from our partners!
    # When I Fill details as follows "<First name>", "<Last name>", "<Company>", "<Address>", "<Country>", "<State>", "<City>", "<Zipcode>", "<Mobile Number>"
    # When I Click Create Account button
    # Then I Verify that 'ACCOUNT CREATED!' is visible
    # When I Click Continue button
    # Then I Verify that 'Logged in as username' is visible
    # Then I Logout of my ACCOUNT

    Examples:
      | name    | email address          | Password  | Days | Months | Years | First name | Last name | Company    | Address  | Country | State  | City       | Zipcode | Mobile Number |
      | solo    | odexsolo77@gmail.com   | Yahoo77   | 19   | February    | 1990  | solomon    | odele     | eledavibes | 60 brega | Canada  | Dublin | Balbriggan | k32     | 0899736888    |
   

 