export const normalizeCardNumber = (cardNumber) => {
    const cardNumberString = String(cardNumber);
    return cardNumberString.length % 2 === 0 ? [...cardNumberString].map(Number) : [0, ...cardNumberString].map(Number);
}
