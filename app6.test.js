// describe('Sample Test', () => {
//     it('should test that true === true', () => {
//       expect(true).toBe(true);
//     });
// });


import {FindMaxConsecutive1s} from './app6.js';

  describe('Max Consecutive 1s', () => {
    test('arr[1,1,"1",0] should be 3', () => {
      let arr = [1,1,"1",0];
      expect(FindMaxConsecutive1s(arr)).toBe(3);
    });
  
    test('arr[1,"e",1,0] should be -1', () => {
      let arr = [1,'e',1,0];
      expect(()=>FindMaxConsecutive1s(arr)).toThrow(Error(-1));
    });
  });

