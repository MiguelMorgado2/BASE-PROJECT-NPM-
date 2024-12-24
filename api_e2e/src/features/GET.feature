Feature: As an API I can retrieve posts

  @smoke
  @regression
  Scenario: As an API I can retrieve all the posts
    Given I retrieve "posts"
    And the response was successful
    Then the response status code is 200

  @smoke
  @regression
  Scenario: As an API I can retrieve a single post
    Given I retrieve the 1st "posts"
    And the response was successful
    Then the response status code is 200
    And the response json contains the attributes:
      | id     | 1 |
      | userId | 1 |

  @smoke
  @regression
  Scenario: As an API I cannot retrieve animals
    Given I retrieve "animals"
    And the response was unsuccessful
    Then the response status code is 404