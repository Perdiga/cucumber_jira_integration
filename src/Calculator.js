module.exports = function () {
    this.value = 0;

    this.sum = function (valueToSum) {
        this.value = this.value + valueToSum;
    }

    this.subtract = function (valueToSubtract) {
        this.value = parseInt(this.value) - parseInt(valueToSubtract);
    }

    this.divide = function (valueToDivide) {
        this.value = this.value / valueToDivide;
    }

    //TODO: 08 - Create a function that receive a value e use this value to multiplier the calculator value

    this.getValue = function () {
        return this.value;
    }
}
