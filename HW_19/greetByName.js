/*
 Ваше завдання - створити функцію greet в JavaScript. Ця функція повинна приймати два аргументи:

 msg: Рядок, який представляє привітання, наприклад “Hi”, “Hey” або “Hello”.
 name: Рядок, який представляє ім’я особи, наприклад “John”, “Bob” або “Mary”.

 Функція greet повинна повертати новий рядок, який поєднує msg та name з комою та пробілом між ними. Наприклад, якщо msg це “Hi” і name це “John”, то функція повинна повернути рядок “Hi, John”.

 Ось приклад використання цієї функції:

 console.log(greet('Hi', 'John')) // Hi, John 
 console.log(greet('Hey', 'Bob')) // Hey, Bob
 console.log(greet('Hello', 'Mary')) // Hello, Mary
*/

// *** Функія називається "greetByName" але в умовах і в прикладі використання вона називається просто "greet", можливо це помилка, тому мій варіант вирішення задачі: ***

function greetByName(msg, name) {
  
  return msg + ", " + name;
}

console.log(greetByName('Hi', 'John'));
console.log(greetByName('Hey', 'Bob'));
console.log(greetByName('Hello', 'Mary'));

// Альтирнативний варіант, якщо потрібно щоб підходили лише запропоновані умовами задачі привітання:

function greetByName(msg, name) {
  if (msg === 'Hi' || msg === 'Hey' || msg === 'Hello') {
    return msg + ", " + name;
  }
  return "Нормально потрібно вітатись";
}

console.log(greetByName('Hi', 'John'));
console.log(greetByName('Хай', 'John'));
console.log(greetByName('Hey', 'Bob'));
console.log(greetByName('Hello', 'Mary'));