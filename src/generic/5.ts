/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair {
  [key: string| number|symbol] : any;
};

let one: KeyValuePair = {
  name: 'Mary',
  age: 25,
};

let two: KeyValuePair = {
  weight: 24,
  password: 'anagramma',
}

export {};