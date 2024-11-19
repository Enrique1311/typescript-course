(() => {
  // la función va a retornar un string
  const calcTotal = (prices: number[]): string => {
    // explícita
    let total = 0;
    prices.forEach((item) => {
      total += item;
    });
    return total.toString();
  };

  //* Las funciones que no retornan nada se llaman funciones "void"
  const printTotal = (prices: number[]) => {
    const res = calcTotal(prices);
    console.log(`El total es ${res}`);
  };

  printTotal([1, 2, 3]);

  //* Funciones "void" explícitas
  const printTotal2 = (prices: number[]): void => {
    const res = calcTotal(prices);
    console.log(`El total es ${res}`);
  };

  printTotal2([1, 2, 6]);
})();
