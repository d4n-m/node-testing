import {fizzBuzz} from '../fizzBuzz'
    
describe('FizzBuzz', () => {
    
    test('If the number is divisible by 3, return "Fizz"', () => {
    expect(fizzBuzz(6)).toBe("Fizz");
    });
    test('If the number is divisible by 5, return "Buzz".', () => {
    expect(fizzBuzz(20)).toBe("Buzz");
    });
    test('If the number is divisible by both 3 and 5, return "FizzBuzz".', () => {
    expect(fizzBuzz(30)).toBe("FizzBuzz");
    });
    test('Otherwise, just return the number that was passed into the function.', () => {
    expect(fizzBuzz(4)).toBe(4);
    expect(fizzBuzz("fdasfad")).toBe("This is not a number");
    expect(fizzBuzz("")).toBe("This is not a number");
    });
 
});
    
    

