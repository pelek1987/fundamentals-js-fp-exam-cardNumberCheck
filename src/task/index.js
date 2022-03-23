import {CardNumberValidator} from "./utils/cardNumberValidator";
import {isCardValidByLuhnsAlgorithm} from "./utils/isCardValidByLuhnsAlgorithm";
import {getCardProvider} from "./utils/getCardProvider";

export const cardNumberCheck = (cardNumber) => {
    const validAndNormalizedCardNumber  = new CardNumberValidator(cardNumber).validateAndNormalize();

    const isAlgorithmFulfilled = isCardValidByLuhnsAlgorithm(validAndNormalizedCardNumber);

    return isAlgorithmFulfilled && [isAlgorithmFulfilled, getCardProvider(validAndNormalizedCardNumber)];
};