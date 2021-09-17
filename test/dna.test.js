import {dnaCheck} from '../dna'

describe('DNA Check', () => {
    test(' in a DNA string (for example CTAGGGTA) and returns a new string with any non-canonical DNA base values removed', () => {
        expect(dnaCheck("CTAGGGTA")).toBe("CTAGGGTA");
        expect(dnaCheck("")).toBe("");
        expect(dnaCheck("     CfdasTgfsdafA")).toBe("CTA");
        expect(dnaCheck("CMY 23TFDH/MNBA")).toBe("CTA");
     });
});