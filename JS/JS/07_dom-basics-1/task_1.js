
document.addEventListener('DOMContentLoaded',function() {

  function createStudentCard(name, age) {
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

    h2.textContent = name;
    span.textContent = `Возраст: ${age} лет`;
  }

  createStudentCard('Егор', 17);

})

