import {CardNumberValidator} from "./utils/cardNumberValidator";
import {isCardValidByLuhnsAlgorithm} from "./utils/isCardValidByLuhnsAlgorithm";
import {getCardProvider} from "./utils/getCardProvider";

export const cardNumberCheck = (cardNumber) => {
    (new CardNumberValidator(cardNumber)).validateAndNormalize();

    const isAlgorithmFulfilled = isCardValidByLuhnsAlgorithm(cardNumber);

    return isAlgorithmFulfilled && [isAlgorithmFulfilled, getCardProvider(cardNumber)];
};