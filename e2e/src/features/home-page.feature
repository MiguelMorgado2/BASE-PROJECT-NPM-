Feature: As a User I expect to be able to navigate to the home page

    @dev @smoke @regression
    Scenario: As a user I expect to be able to see the contacts header
        Given I am on the home page
        Then the contacts header should contain the text Contacts