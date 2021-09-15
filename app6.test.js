// describe('Sample Test', () => {
//     it('should test that true === true', () => {
//       expect(true).toBe(true);
//     });
// });

import SortedList from '../index.js';

describe('SortedList', () => {

  let sl;

  beforeEach(()=>{
    sl = new SortedList();
  })

  describe('Constructor', () => {
    test('should create an empty SortedList', () => {
      const sl = new SortedList();
      expect(sl instanceof SortedList).toBe(true);
    });
    test('should have a property items', () => {
      const sl = new SortedList();
      expect(sl.items).toBeDefined();
    });
    test('should have a property length', () => {
      const sl = new SortedList();
      expect(sl.length).toBeDefined();
    });
    
  });

});
