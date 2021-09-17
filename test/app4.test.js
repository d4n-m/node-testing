import {SumaArray} from '../app4.js';

describe('app4', () => {

  describe('Función suma array', () => {
    test('should sum all positive numbers in the array', () => {
      let myArray = [];
      myArray.push(1);
      myArray.push(4);
      myArray.push(-1);
      myArray.push(-2);
      expect(SumaArray(myArray)).toBe(5);
    });

    test('If the array is empty, return zero.', () => {
      let myArray = [];
      expect(SumaArray(myArray)).toBe(0);
    });

    test('Values that can be converted to numbers should be converted and included in the sum if positive.', () => {
        let myArray = [];
        myArray.push('-100');
        myArray.push('11');
        expect(SumaArray(myArray)).toBe(11);
    });
  });
});