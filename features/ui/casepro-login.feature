
Feature: CasePro Login

  Scenario: Login with valid user credentials
    Given I open the CasePro login page
    When I enter the CasePro username
    And I enter the CasePro password
    And I click the CasePro Sign In button
    Then I should be logged in to CasePro
