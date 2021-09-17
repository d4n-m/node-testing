import {FindRepeatChar} from '../app5.js';

describe('app5', () => {

  describe('Find first repeating char', () => {
    test('find the first consecutively repeating character in it and return it\'s index.', () => {
      let string = "abcddefgh";
      expect(FindRepeatChar(string)).toBe(3);
    });

    test('If there are no repeating characters, return -1.', () => {
      let string = "abcdefgh";
      expect(FindRepeatChar(string)).toBe(-1);
    });

    test('This function should ignore any spaces and should be __case insensitive__ - treat \'a\' as eqivalent to \'A\'.', () => {
        let string = "abc deEfgh"
        expect(FindRepeatChar(string)).toBe(4);
    });
  });
});