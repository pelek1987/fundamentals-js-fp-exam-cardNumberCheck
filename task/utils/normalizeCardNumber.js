export const normalizeCardNumber = (cardNumber) =>
    cardNumber.toString().length % 2 === 0 ? [...cardNumber.toString()].map((n) => Number(n)) : [0, ...cardNumber.toString()].map((n) => Number(n));
