const { mdc } = require("./mdc");
let num1, num2;

describe("Testes mdc", () => {
  beforeAll(() => {
    num1 = 20;
    num2 = 24;
  });

  it("mdc", () => {
    expect(mdc(num1, num2)).toBe(4);
  });
});
