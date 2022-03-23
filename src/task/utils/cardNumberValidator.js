export class CardNumberValidator {
    constructor(cardNumber) {
        this.cardNumber = cardNumber;
    }

    normalizeCardNumberWhenString(cardNumber) {
        const normalized = cardNumber.trim().replace(/-/g, "").replace(/\s+/g, "");
        const number = Number(normalized);
        const validator = new CardNumberValidator(number);
        if (!validator.isCorrectNumber()) {
            throw new Error("String has to represent correct card number");
        }
        return number;
    }

    validateAndNormalize() {
        if (this.isString()) {
            return this.normalizeCardNumberWhenString(this.cardNumber);
        }
        if (this.isCorrectNumber()) {
            return this.cardNumber;
        }
        throw new Error("Card number has to be positive integer number or a string representing such number")
    }

    isCorrectNumber() {
        return this.isNumber()
            && this.isInteger()
            && this.isPositive();
    }

    isNumber() {
        return Number.isFinite(this.cardNumber);
    }

    isInteger() {
        return Number.isInteger(this.cardNumber)
    }

    isPositive() {
        return this.cardNumber >= 0
    }

    isString() {
        return typeof this.cardNumber === "string"
    }
};

// class CardNumberValidator {
//
//     constructor(cardNumber) {
//         this.cardNumber = cardNumber;
//     }
//
//     validate() {
//         this.throwsWhenIsNotStringOfDigits(this.cardNumber);
//         this.throwsWhenIsNotNumberOrNumberAsString(this.cardNumber);
//     }
//
//     throwsWhenIsNotStringOfDigits(cardNumber) {
//         const onlyDigitsRegExp = new RegExp('^[0-9]+$', "gi");
//         const hasOnlyDigits = onlyDigitsRegExp.test(cardNumber);
//         if (typeof cardNumber === "string" && !hasOnlyDigits) {
//             throw new Error('If card number is type of string, then it should contain only digits');
//         }
//     }
//
//     throwsWhenIsNotNumberOrNumberAsString(cardNumber) {
//         const number = Number(cardNumber);
//         const isTrueNumber = typeof number === "number" && !Number.isNaN(number);
//         if (!isTrueNumber) {
//             throw new Error('Card number has to be a number');
//         }
//     }
// }
