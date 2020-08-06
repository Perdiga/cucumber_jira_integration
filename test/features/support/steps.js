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
  expect(calculator.getValue()).to.be.equal(output);
});

//-------------------------------------------------------
Given('I want to divide a value to he previus value of {int}', function (valueToDivide) {
  calculator.value = valueToDivide;
  //return 'pending';
});

When('I divide a value {float}', function (value) {
  calculator.divide(value);
});

Then('the output should be Infinity', function () {
  expect(calculator.getValue()).to.be.equal(Infinity);
});

// TODO: 03 - Copy the generated Givem step here 
// TODO: 06 - Implement the test for Givem step (you should prepare the context)

// TODO: 04 - Copy the generated When step here 
// TODO: 07 - Implement the test for When step (you should implement the multiplier action)

// TODO: 05 - Copy the generated Then step here 
// TODO: 09 - Implement the test for Then step (you should test if what you expected occoured)

// TODO: 10 - Run npm test. All tests should pass
// TODO: 11 - Open the html report file to check you live documentation



