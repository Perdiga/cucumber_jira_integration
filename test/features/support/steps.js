// features/support/steps.js
const { Given, When, Then } = require('cucumber')
const { expect } = require('chai')
const Calculator = require('../../../src/Calculator')

let calculator;
Given('I want to sum a number to previus value', function () {
  calculator = new Calculator();
});

When('I submit a value {int}', function (value) {
  calculator.sum(value)
});

Then('the output should be previus values plus {int}', function (output) {
  expect(calculator.getValue()).to.be.equal(output);
});

// ----------------------------------------------------------------

Given('I want to sum a value to the previus value of {int}', function (value) {
  calculator.value = value;
});

Then('the output should {int}', function (output) {
  expect(calculator.getValue()).to.be.equal(output);;
});


// ----------------------------------------------------------------
Given('I want to subtract a value to the previus value of {int}', function (value) {
  calculator.value = value;
});

When('I subtract a value {int}', function (valueToSubtract) {
  calculator.subtract(parseInt(valueToSubtract))
});

Then('the output should be {int}', function (output) {
  expect(calculator.getValue()).to.be.equal(output);;
});