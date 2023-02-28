function somaMultiplos() {
  let multiplos = [];
  let multiplosDeCinco;
  let multiplosDeSete;
  let soma = 0;
  for (i = 0; i < 1000; i++) {
    multiplosDeCinco = 5 * i;
    multiplosDeSete = 7 * i;
    multiplos.push(multiplosDeCinco);
    multiplos.push(multiplosDeSete);
  }
  for (i = 0; i < multiplos.length; i++) {
    soma = soma + multiplos[i];
  }
  return soma;
}
console.log(somaMultiplos());
module.exports = { somaMultiplos };
