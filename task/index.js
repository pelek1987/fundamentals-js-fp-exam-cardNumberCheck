import {CardNumberValidator} from "./utils/cardNumberValidator";
import {normalizeCardNumber} from "./utils/normalizeCardNumber";

const checkCardNumber = (cardNumber) => {
    const cardNumberValidation = new CardNumberValidator(cardNumber);
    cardNumberValidation.validate();

    const normalized = normalizeCardNumber(cardNumber);
};