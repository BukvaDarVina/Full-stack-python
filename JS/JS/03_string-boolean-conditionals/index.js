/*
  Задача №1
  В переменную password запишите строку с любым произвольным паролем. Проверьте надёжность пароля с помощью условного оператора if.
  Пароль является надёжным, когда в нём есть хотя бы четыре символа, один из которых — это дефис или нижнее подчёркивание.
  Выведите в консоль сообщения «Пароль надёжный» или «Пароль недостаточно надёжный».
*/

console.log('Задача №1:');

let password = '123456789';

function chexk_pass (pass) {
  if (pass.length >= 4 && (pass.includes('-') || pass.includes('_'))) {
    console.log('Пароль надёжный');
  } else {
    console.log('Пароль недостаточно надёжный')
  }
}

chexk_pass(password);


/*
  Задача №2
  В переменных userName, userSurname даны имя и фамилия пользователя.
  При этом в строках беспорядок с большими и маленькими буквами, и нужно оформить строки единообразно.
  Для этого первые буквы имени и фамилии приведите к верхнему регистру (большие буквы), а оставшиеся — к нижнему (маленькие буквы).
  Запишите результат в новые переменные и выведите их значения с помощью console.log.
  С помощью тернарных операторов и console.log выведите сообщение «Имя было преобразовано» или «Имя осталось без изменений» для имени и фамилии в зависимости от того,
  были ли исходные строки равны преобразованным.
*/

console.log('Задача №2:');

let userName = 'Данил';
let userSurname = 'Бурдуковский';

function normalize_name (string_name) {
  let first = string_name.substring(0,1);
  let last = string_name.substring(1);

  first_normalize = first.toUpperCase();
  last_normalize = last.toLowerCase();

  return first_normalize + last_normalize
}

let userName_normalize = normalize_name(userName);
let userSurname_normalize = normalize_name(userSurname);

if (userName_normalize !== userName || userSurname_normalize !== userSurname) {
  console.log('Имя было преобразовано');
} else {
  console.log('Имя осталось без изменений')
}

/*
  Задача №3
  В переменной number записано число. Необходимо с помощью console.log вывести сообщение, указывающее на чётность или нечётность числа.
*/

console.log('Задача №3:');

let number = 5;

if (number % 2 > 0) {
  console.log('Число нечётное');
} else {
  console.log('Число чётное');
}
