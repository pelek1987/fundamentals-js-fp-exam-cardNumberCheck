import {cardNumbersFeatures} from '../data/cardNumbersFeatures';
import {isCardProvider} from "./isCardProvider";

export const getCardProvider = (cardNumber) => {
    const cardNumberString = cardNumber.toString();

    const isMasterCard = isCardProvider(cardNumberString, cardNumbersFeatures.Mastercard);
    const isVisa = isCardProvider(cardNumberString, cardNumbersFeatures.Visa);
    const isAmericanExpress = isCardProvider(cardNumberString, cardNumbersFeatures.AmericanExpress);
    const isDiscover = isCardProvider(cardNumberString, cardNumbersFeatures.Discover);

    switch(true) {
        case isMasterCard:
            return 'Mastercard';
        case isVisa:
            return 'Visa';
        case isAmericanExpress:
            return 'American Express';
        case isDiscover:
            return "Discover";
        default:
            throw new Error('Cannot recognize card provider');
    }
};
