import {leapYear} from '../leapYear'

describe('LeapYear', () => {
    test('Returns a boolean indicating if the year is a leap year', () => {
        expect(leapYear(4)).toBe(true);
        expect(leapYear(21)).toBe(false);
        expect(leapYear(100)).toBe(false);
        expect(leapYear(400)).toBe(true);
        expect(leapYear(400.2)).toBe("This is not a year");
        expect(leapYear("fgadfds")).toBe("This is not a year");
     });
});