import { cardNumberCheck } from './task';
import { cardNumbers } from './task/data/cardNumbers';

Object.values(cardNumbers).flat().map(n => cardNumberCheck(n)).forEach(res => {
    console.log('Is correct?', res[0], 'Card provider:', res[1]);
});