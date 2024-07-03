/*
  Задача №1
  Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка; x2, y2 — вторая точка.
  Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками.
  Выведите результат с помощью console.log.
  Напомним, что площадь прямоугольника — это произведение ширины и высоты.
*/

let t1_x1 = -5;
let t1_y1 = 8;
let t1_x2 = 10;
let t1_y2 = 5;

/* Функция вычисления площади */

function sq_rectangle(x1 = 2, y1 = 3, x2 = 10, y2 =5) {
  let x_max = Math.max(x1,x2);
  let x_min = Math.min(x1,x2);
  let y_max = Math.max(y1,y2);
  let y_min = Math.min(y1,y2);

  let x_dist = Math.abs(x_max - x_min);
  let y_dist = Math.abs(y_max - y_min);

  return x_dist * y_dist
}

console.log("Задача №1: \n" + sq_rectangle(t1_x1,t1_y1,t1_x2,t1_y2))

/* 
  Задача №2
  Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log. 
  Выведите результаты их сравнения (>, <, ≥, ≤, ===, ≠) с помощью console.log.
*/

let t2_a = 13.123456789;
let t2_b = 2.123;
let t2_n = 5;

function normalize(x, n) {
  let normalize = Math.trunc((x - Math.trunc(x)) * Math.pow(10, n))
  return normalize
}

function comparison(a, b) {
  console.log('Число а > b? ', a > b);
  console.log('Число а < b? ', a < b);
  console.log('Число а >= b? ', a >= b);
  console.log('Число а <= b? ', a <= b);
  console.log('Число а = b? ', a === b);
  console.log('Число а ≠ b? ', a !== b);
}

console.log('\n\nЗадача №2:');
console.log('Дробная часть числа', t2_a, 'с точностью', t2_n, 'знаков после запятой:', normalize(t2_a, t2_n));
console.log('Дробная часть числа', t2_b, 'с точностью', t2_n, 'знаков после запятой:',  normalize(t2_b, t2_n));
comparison(normalize(t2_a, t2_n), normalize(t2_b, t2_n));

/* 
  Задача №3
  Напишите генератор двух случайных чисел в диапазоне между n и m включительно. Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.
  Выведите два произвольных числа в консоль с помощью console.log.
  Сравните два полученных числа. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.
*/

let t3_n = 100;
let t3_m = -5;

function random_generator(n, m) {
  let range = Math.abs(m - n);
  let generate_num = Math.round(Math.random() * range);
  let min_num = Math.min(n, m);
  return min_num + generate_num;
}

let generate_a = random_generator(t3_n, t3_m);
let generate_b = random_generator(t3_n, t3_m);

console.log('\n\nЗадача №3:');
console.log('Сгенирированные числа:');
console.log('Первое число:', generate_a, '\nВторое число:', generate_b);

comparison(generate_a, generate_b);
