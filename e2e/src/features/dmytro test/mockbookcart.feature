  Feature: Try to mock a book into the shopping cart
  
  @dev
  @smoke
  @regression
  Scenario: As a user I can mock book into the shopping cart
    Given I am on the "home" page
    And I click the "cart item" button
    And the "api" endpoint for "book" is mocked with "cartbook"
    And I wait "10" seconds
