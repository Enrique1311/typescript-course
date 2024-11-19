(() => {
  //! No pueden ser undefined o null
  // let myNumber: number = undefined;
  // let myString: string = null;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  //* Esta es la manera correcta de asignarle el tipo cuando queremos que sea número o null
  let myNumber: number | null = null;
  console.log(myNumber);

  myNumber = 15;
  console.log(myNumber);

  //* Esta es la manera correcta de asignarle el tipo cuando queremos que sea string o undefined
  let myString: string | undefined = undefined;
  console.log(myString);

  myString = 'Hello';
  console.log(myString);

  // function hello(name: string | null) {
  //   let hi = 'Hola ';
  //   if (name) {
  //     hi += name;
  //   } else {
  //     hi += 'nobody';
  //   }
  //   console.log(hi);
  // }
  // hello('Enrique');
  // hello(null);

  //* manera correcta de ejecutar un opcional en typescript, con "optional chaining" (variable + ?)
  function hello2(name: string | null) {
    let hi = 'Hola ';
    hi += name?.toLocaleLowerCase() || 'nobody'; // Si no trae un valor null, imprime nobody
    console.log(hi);
  }

  hello2(null);
  hello2('Enrique');
})();
