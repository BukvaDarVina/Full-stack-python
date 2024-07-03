/*
  Задача №1
  Создайте функцию с названием getAge(), которая будет рассчитывать возраст по году рождения.
  У функции будет всего один аргумент (параметр), который нужно передать в функцию. Функция должна сделать расчёт возраста по текущему году.
  После расчёта функция должна вернуть результат с помощью команды return.
  Созданную функцию нужно вызвать, передав ей дату рождения.
  Результат, который вернёт функция, необходимо вывести в консоль.
*/

console.log('Задача №1:\n');

function getAge(birthYear) {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  return currentYear - birthYear;
}

console.log(getAge(1999));

/*
  Задача №2
  Напишите функцию filter(), которая создаёт массив email-адресов, не попавших в чёрный список.
  В качестве аргументов функция должна принимать два массива: массив строк с исходными email-адресами и массив строк с email-адресами в чёрном списке.

  Пример вызова функции с параметрами:
  // Массив с почтовыми адресами:
  let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
  // Массив с почтовыми адресами в чёрном списке:
  let blackList = ['jsfunc@mail.ru','goodday@day.ru']
  // Вызов созданной функции:
  let result = filter(whiteList, blackList)

  Выведите результат выполнения функции в консоль в виде массива:

  ['my-email@gmail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru'].
*/

console.log('\n\nЗадача №2:\n');

// Массив с почтовыми адресами:
let whiteList = ['my-email@gmail.ru', 'jsfunc@mail.ru', 'annavkmail@vk.ru', 'fullname@skill.ru', 'goodday@day.ru']
// Массив с почтовыми адресами в чёрном списке:
let blackList = ['jsfunc@mail.ru','goodday@day.ru']

function filter(whiteList, blackList) {

  let result = [];

  for (let i = 0; i < whiteList.length; i++) {
    if (!blackList.includes(whiteList[i])) {
      result.push(whiteList[i]);
    }
  }

  return result
}

console.log(filter(whiteList, blackList));

/*
  Задача №3
  Создайте функцию arrSort(), аргументом (параметром) которой будет массив. Задача функции — сделать сортировку элементов переданного массива по возрастанию.
  Функция должна вернуть отсортированный массив, а результат выполнения функции должен быть выведен в консоль с помощью console.log.
*/

console.log('\n\nЗадача №3:\n');

function arrSort(array) {

  console.log('Массив на входе:\n', array)

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array
}

console.log('Массив на выходе:\n', arrSort([12,33,3,44,100]));
