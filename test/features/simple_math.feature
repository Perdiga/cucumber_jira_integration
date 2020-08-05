# features/simple_math.feature
Feature: Simple maths
  In order to do maths
  As a developer
  I want to hava a calculator

  Scenario: sum a value
    Given I want to sum a number to previus value
    When I submit a value 10
    Then the output should be previus values plus 10


  Scenario Outline: sum a value
    Given I want to sum a value from the previus value of <previus>
    When I submit a value <valueToSum>
    Then the output should <output>

    Examples:
      | previus | valueToSum | output |
      | 10      | 20         | 30     |
      | 15      | 50         | 65     |
      | 20      | 0          | 20     |

  Scenario Outline: subtract a value
    Given I want to subtract a value from the previus value of <previus>
    When I subtract a value <valueToSubtract>
    Then the output should be <output>

    Examples:
      | previus | valueToSubtract | output |
      | 10      | 10              | 0      |
      | 30      | 40              | -10    |
