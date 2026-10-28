
Feature: CasePro Login

  Scenario: Login with valid user credentials
    Given I open the CasePro login page
    When I enter username "user1"
    And I enter password "User@123"
    And I click the CasePro Sign In button
    Then I should be logged in to CasePro
