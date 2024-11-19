(() => {
  //* Alias type ******************
  type UserID = string | number; // crea un tipo

  let userID: UserID; // declara una variable del tipo creado anteriormente

  //* Literal types **********************

  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirtSize: Sizes; // Sólo van a ser del tipo de las opciones declaradas

  shirtSize = 'S';
  shirtSize = 'M';
  shirtSize = 'L';
  shirtSize = 'XL';

  // shirtSize = 'JDG'; //! Si es distinto a los tipos asignados, marca error

  function greeting(userID: UserID, size: Sizes) {
    if (typeof userID === 'string') {
      console.log(`Es un string: ${userID.toLowerCase()}`);
      console.log('Size: ' + size);
    } else {
      console.log(`Es un número: ${userID.toFixed(2)}`);
      console.log('Size: ' + size);
    }
  }
  greeting(123, 'M');
  greeting('tye4', 'L');
})();
