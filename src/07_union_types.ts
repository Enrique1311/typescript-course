(() => {
  let dinamicVar: string | number; // puede ser string o número

  dinamicVar = 1234;
  console.log(dinamicVar);

  dinamicVar = 'h3er45';
  console.log(dinamicVar);

  // de acuerdon con el tipo de varible que ingremos, se comporta de distinta manera y adquiere los distintos métodos
  function greeting(text: string | number) {
    if (typeof text === 'string') {
      console.log(`Es un string: ${text.toLowerCase()}`);
      // métodos de string
    } else {
      console.log(`Es un número: ${text.toFixed(2)}`);
      // métodos de número
    }
  }
  greeting('Hello');
  greeting(12345);
})();
