
document.addEventListener('DOMContentLoaded',function() {

  let allStudents=[
    {name: 'Валя', age: 11},
    {name: 'Таня', age: 24},
    {name: 'Рома', age: 21},
    {name: 'Надя', age: 34},
    {name: 'Антон', age: 7}
  ]

  function createStudentCard(allStudents) {

    let ul = document.createElement('ul');
    ul.className = 'cards flex';
    document.querySelector('.container').append(ul);
    // document.body.append(ul);

    for(let i = 0; i < allStudents.length; i++) {

      let li = document.createElement('li');
      let h2 = document.createElement('h2');
      let span = document.createElement('span');

      li.append(h2);
      li.append(span);
      ul.append(li);

      li.className = 'card';
      h2.className = 'studentName';
      span.className = 'studentAge';

      h2.textContent = allStudents[i].name;
      span.textContent = `Возраст: ${allStudents[i].age} лет`;
    }


  }

  createStudentCard(allStudents);

})

