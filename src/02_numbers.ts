(() => {
  let price = 200; // declaración inferida

  let stock: number = 10; // declaración explícita

  let amount: number; // declaración explícita
  // Si no se le asigna un valor, hay que declarar las variables de manera explícita.

  console.log(stock);

  let hex = 0xfff; // Valor exadecimal (comienza con 0x)
  console.log(hex);

  let bin = 0b101101; // Valor binario (comienza con 0b)
  console.log(bin); // imprime el número en valor decimal
})();
