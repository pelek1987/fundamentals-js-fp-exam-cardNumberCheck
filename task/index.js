import {CardNumberValidator} from "./utils/cardNumberValidator";
import {isCardValidByLuhnsAlgorithm} from "./utils/isCardValidByLuhnsAlgorithm";
import {getCardProvider} from "./utils/getCardProvider";

const cardNumberCheck = (cardNumber) => {
    const cardNumberValidation = new CardNumberValidator(cardNumber);
    cardNumberValidation.validate();

    const isAlgorithmFulfilled = isCardValidByLuhnsAlgorithm(cardNumber);

    return isAlgorithmFulfilled && [isAlgorithmFulfilled, getCardProvider(cardNumber)];
};