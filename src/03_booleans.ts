(() => {
  let boolean = false; // inicializar boolean de manera inferida

  let newBoolean: boolean = false; // inicializar boolean de manera explícita

  const random = Math.random();
  console.log(random);
  console.log(newBoolean);
  newBoolean = random >= 0.5 ? true : false;
  console.log(newBoolean);
})();
