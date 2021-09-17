import { consecutive } from "../consecutive";


describe('1s and 0s', () => {
    
    test('Given an array of 1 and 0s, find the maximum number of consecutive 1 in this array', () => {
        let prove=[0,1,1,"0",1,1,0,0,0,0,"0","1","1","1"];
        expect(consecutive(prove)).toBe(3);
     });
     
    test('If there is any value other than 1 or 0 in the array, this is an error, return -1.', () => {
        let prove=[0,1,3,4,1,32,0,0,0,0,"0","1"];
        expect(consecutive(prove)).toBe(-1);
    });

    test('The 1\'s and 0\'s may be either string or integer values, both are acceptable and should be considered equivalent.', () => {
        let prove=["0","1"];
        expect(consecutive(prove[0])).toBe(0);
    });
     
});