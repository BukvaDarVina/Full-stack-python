
document.addEventListener('DOMContentLoaded',function() {

  let studentObj={
    name: 'Игорь',
    age: 17
   }

  function createStudentCard(studentObj) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let span = document.createElement('span');

    document.querySelector('.cards').append(div)
    // document.body.append(div)
    div.append(h2);
    div.append(span);

    div.className = 'card';
    h2.className = 'studentName';
    span.className = 'studentAge';

    h2.textContent = studentObj.name;
    span.textContent = `Возраст: ${studentObj.age} лет`;
  }

  createStudentCard(studentObj);

})

