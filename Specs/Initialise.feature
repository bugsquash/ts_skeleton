Feature: Initialise Rover

    Scenario: Rover is initialised succesfully
    Given The Rover hasn't been initialised
    And The system is prompting "Please enter initial position and direction for Rover (x y N, eg 2 4 N)"
    When The operator enters "2 4 N"
    Then The Rover is initialised at 2, 4 facing north
    And The system displays "The Rover is at: 2 4 facing north"