export const isCardProvider = (cardNumberString, cardNumberProviderFeatures) => {
    if (typeof cardNumberString !== "string") {
        throw new Error('Card number has to be a string');
    }
    const {cardNumberLengths, cardNumberPrefixes} = cardNumberProviderFeatures;
    const isLength = cardNumberLengths.includes(cardNumberString.length);
    const cardNumberPrefixesAsStrings = cardNumberPrefixes.map(prefix => prefix.toString());
    const prefixLength = cardNumberPrefixesAsStrings.find(prefix => {
        const regex = new RegExp(`^(${prefix})`, 'g');
        return cardNumberString.match(regex);
    }).length;
    const isPrefix = cardNumberPrefixesAsStrings.includes(cardNumberString.substring(0, prefixLength));
    return isLength && isPrefix;
}