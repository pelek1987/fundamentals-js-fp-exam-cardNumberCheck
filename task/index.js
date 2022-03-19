import {CardNumberValidator} from "./utils/cardNumberValidator";
import {isCardValidByLuhnsAlgorithm} from "./utils/isCardValidByLuhnsAlgorithm";

const cardNumberCheck = (cardNumber) => {
    const cardNumberValidation = new CardNumberValidator(cardNumber);
    cardNumberValidation.validate();

    const isAlgorithmFulfilled = isCardValidByLuhnsAlgorithm(cardNumber);

    return isAlgorithmFulfilled && [isAlgorithmFulfilled, "Some provider"];
};