/*
  Задача №1
  1. Напишите генератор массивов длиной count со случайными числами от n до m. Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
  2. Выведите результат с помощью console.log.
*/

let n = 100;
let m = -5;
let count = 70;
let arr = [];

function random_generator(n, m) {
  let range = Math.abs(m - n);
  let generate_num = Math.round(Math.random() * range);
  let min_num = Math.min(n, m);
  return min_num + generate_num;
}

while (arr.length < count) {
  arr.push(random_generator(n, m));
}

console.log('Задача №1:\n\n', arr);
console.log(`Количество эллементов в массиве: ${arr.length}`);

/*
  Задача №2
  1. Создайте с помощью цикла for массив упорядоченных чисел с количеством чисел, равным count. Например:
    count = 5; соответствует массив [1,2,3,4,5];
    count = 7; соответствует массив [1,2,3,4,5,6,7];
    count = 3; соответствует массив [1,2,3].
  2. С помощью второго цикла перемешайте этот массив.
  3. Выведите получившийся результат на экран с помощью console.log.
*/

console.log('\n\n\nЗадача №2:\n');

let t2_count = 10;

// Генератор массива порядковых чисел
function arr_generator_count(count) {

  let arr = [];

  for  (let i = 0; i < count; i++) {
    arr.push(i + 1)
  }

  console.log('Сгенерированный массив:\n', arr);

  return arr
}

function fresh_arr(array) {
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    let j = random_generator(0, array.length - 1);
    array[i] = array[j];
    array[j] = temp;
  }

  console.log('Перемешанный массив:\n', array);

  return array
}

let fr_arr = fresh_arr(arr_generator_count(t2_count));

/*
  Задача №3
  С помощью цикла найдите индекс (порядковый номер) элемента массива из предыдущего задания с числом n.
  Если такой элемент не будет найден, то выведите соответствующее сообщение на экран.
*/

console.log('\n\n\nЗадача №3:\n');

let t3_n = 3;

function search_index(array, n) {
  let index = -1
  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i]) === n) {
      index = i;
      break
    }
  }
  if (index >= 0) {
    console.log(`Индекс искомого элемента ${index}`)
  } else {
    console.log('Искомого Элемента в заданном массиве не существует')
  }
}

search_index(fr_arr, t3_n);

/*
  Задача №4
  Даны два массива:
  arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53]
  arr2 = [12, 44, 23, 5]
  Напишите программу, которая будет объединять два массива: arr1 и arr2. Результат объединения нужно вывести в консоль с помощью команды console.log в таком виде:
  [2, 2, 17, 21, 45, 12, 54, 31, 53, 12, 44, 23, 5]
  Важно: для выполнения этого задания можно использовать только один цикл. Программа должна корректно работать с массивами любой длины.
  Нельзя переприсвоить массивы целиком друг в друга
*/

console.log('\n\n\nЗадача №4:\n');

let arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
let arr2 = [12, 44, 23, 5];


function merge_arrs(arr1,arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  return arr1
}

console.log(`Входной массив №1:\n ${arr1}\nВходной массив №2:\n ${arr2}\nВыходной массив:\n ${merge_arrs(arr1,arr2)}\n`);
