let objects = [
  { name: 'Василий', surname: 'Васильев' },
  { name: 'Иван', surname: 'Иванов' },
  { name: 'Пётр', surname: 'Петров' }
]


function filter(arr, prop, value){
  // Здесь решение задачи
  // arr - массив объектов
  // prop - свойство по которому производится фильтрация
  // value - значение свойства по которому производится фильтрация

  let result = [];

  for (let i = 0; i <arr.length; i++) {
    let obj = arr[i];

    if (obj[prop] === value) {
      result.push(obj);
    }
  }

  return result

}

let result = filter(objects, 'name', 'Иван');
console.log(result);
