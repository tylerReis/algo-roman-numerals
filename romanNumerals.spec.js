
const romanNumeral = require("./romanNumerals.js")

test("tests toRomanLazy(4) = IIII", () => {
    expect(romanNumeral.toRomanLazy(4)).toBe("IIII");
});
test("tests toRomanLazy(150) = CL", () => {
    expect(romanNumeral.toRomanLazy(150)).toBe("CL");
});
test("tests toRomanLazy(944) = DCCCCXXXXIIII", () => {
    expect(romanNumeral.toRomanLazy(944)).toBe("DCCCCXXXXIIII");
});

test("tests toRoman(4) = IV", () => {
    expect(romanNumeral.toRoman(4)).toBe("IV");
});
test("tests toRoman(150) = CL", () => {
    expect(romanNumeral.toRoman(150)).toBe("CL");
});
test("tests toRoman(944) = CMCLIV", () => {
    expect(romanNumeral.toRoman(944)).toBe("CMXLIV");
});


