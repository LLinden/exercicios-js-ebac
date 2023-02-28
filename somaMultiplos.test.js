const { somaMultiplos } = require("./somaMultiplos");

describe("Testes somaMultiplos", () => {
  it("somaMultiplos", () => {
    expect(somaMultiplos()).toBe(5994000);
  });
});
