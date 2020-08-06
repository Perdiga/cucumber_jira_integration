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

    this.getValue = function () {
        return this.value;
    }
}
