const numberToWord = require("./numberToWord");

test("999000000000001", () => {
  expect(numberToWord(999000000000001)).toBe("nine hundred and ninety-nine trillion and one");
});
test("12102550010", () => {
  expect(numberToWord(12102550010)).toBe("twelve billion one hundred and two million five hundred and fifty thousand and ten");
});
test("102550000", () => {
  expect(numberToWord(102550000)).toBe("one hundred and two million five hundred and fifty thousand");
});
test("12550000", () => {
  expect(numberToWord(12550000)).toBe("twelve million five hundred and fifty thousand");
});
test("1300420", () => {
  expect(numberToWord(1300420)).toBe(
    "one million three hundred thousand four hundred and twenty"
  );
});
test("342251", () => {
  expect(numberToWord(342251)).toBe(
    "three hundred and forty-two thousand two hundred and fifty-one"
  );
});
test("100001", () => {
    expect(numberToWord(100001)).toBe(
      "one hundred thousand and one"
    );
  });
test("17999", () => {
    expect(numberToWord(17999)).toBe(
      "seventeen thousand nine hundred and ninety-nine"
    );
  });
test("2001", () => {
    expect(numberToWord(2001)).toBe(
      "two thousand and one"
    );
  });
test("1999", () => {
    expect(numberToWord(1999)).toBe(
      "one thousand nine hundred and ninety-nine"
    );
  });
test("42", () => {
    expect(numberToWord(42)).toBe(
      "forty-two"
    );
  });
test("7", () => {
    expect(numberToWord(7)).toBe(
      "seven"
    );
  });