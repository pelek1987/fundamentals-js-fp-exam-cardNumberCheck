import {normalizeCardNumber} from "./normalizeCardNumber";

export const isCardValidByLuhnsAlgorithm = (cardNumber) => {
    const normalized = normalizeCardNumber(cardNumber);
    const firstSet = normalized.filter((_, index) => index % 2 === 0);
    const secondSet = normalized.filter((_, index) => index % 2 === 1);
    const firstSum = firstSet
        .map((n) => String(n * 2))
        .reduce((total, curr) => {
            const firstDigit = Number(curr[0]);
            const secondDigit = curr[1] ? Number(curr[1]) : 0;
            return total + firstDigit + secondDigit;
        }, 0);
    const secondSum = secondSet.reduce((total, curr) => total + curr, 0);
    return (firstSum + secondSum) % 10 === 0;
}