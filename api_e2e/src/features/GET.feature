Feature: As an API I can retrieve posts

    Scenario: As an API I can retrive all the posts
        Given I retrieve "posts"
        And the response was successful
        Then the response status code is 200