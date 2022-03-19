export class CardNumberValidator {

    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }

    validate() {
        this.throwsWhenIsNotStringOfDigits(this.cardNumber);
        this.throwsWhenIsNotNumberOrNumberAsString(this.cardNumber);
    }

    throwsWhenIsNotStringOfDigits(cardNumber) {
        const onlyDigitsRegExp = new RegExp('^[0-9]+$', "gi");
        const hasOnlyDigits = onlyDigitsRegExp.test(cardNumber);
        if (typeof cardNumber === "string" && !hasOnlyDigits) {
            throw new Error('If card number is type of string, then it should contain only digits');
        }
    }

    throwsWhenIsNotNumberOrNumberAsString(cardNumber) {
        const number = Number(cardNumber);
        const isTrueNumber = typeof number === "number" && Number.isNaN(number);
        if (!isTrueNumber) {
            throw new Error('Card number has to be a number');
        }
    }
}