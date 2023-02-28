const { maiorValorIdx, menorValorIdx } = require("./array");
let array;

describe("Testes array", () => {
  beforeAll(() => {
    array = [10, 40, 20, 5];
  });

  it("maiorValorIdx", () => {
    expect(maiorValorIdx(array)).toBe(1);
  });

  it("menorValorIdx", () => {
    expect(menorValorIdx(array)).toBe(3);
  });
});
