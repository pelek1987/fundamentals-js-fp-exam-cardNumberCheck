export const isCardProvider = (cardNumberString, cardNumberProviderFeatures) => {
    if (typeof cardNumberString !== "string") {
        throw new Error('Card number has to be a string');
    }
    const {cardNumberLengths, cardNumberPrefixes} = cardNumberProviderFeatures;
    const isLength = cardNumberLengths.includes(cardNumberString.length);
    const cardNumberPrefixesAsStrings = cardNumberPrefixes.map(String);
    const prefix = cardNumberPrefixesAsStrings.find(p => {
        const regex = new RegExp(`^(${p})`);
        return cardNumberString.match(regex);
    });
    const isPrefix = Boolean(prefix) && cardNumberPrefixesAsStrings.includes(cardNumberString.substring(0, prefix.length));
    return isLength && isPrefix;
}