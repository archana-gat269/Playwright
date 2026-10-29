
Feature: CasePro Requester Details

  Scenario: Login and fill requester details
    Given I open the CasePro login page
    When I enter the CasePro username
    And I enter the CasePro password
    And I click the CasePro Sign In button
    Then I should be logged in to CasePro

    When I open the CasePro application
    And I fill in the requester details
    Then the requester details should be entered correctly

    When I click Next on the Requester page
    And I fill in the Case Details
    Then the Case Details should be entered correctly

    When I click Next on the Case Details page
    And I fill in the Timesheet details
    Then the Timesheet details should be entered correctly
   
    When I click Next on the Timesheet page
    Then the Review page should be displayed
    When I submit the case
    Then the case submission should complete successfully

    When I log out from the requester account
    And I log in as the CasePro admin
    And I search for the submitted case as admin
    Then the case ID and status should be displayed

