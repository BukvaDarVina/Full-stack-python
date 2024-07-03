//Функция определения текущего возраста
function studentAgeFn(studentBirthdayDateFromForm) {
  //Текущая дата и время
  const now = new Date();
  const studentBirthdayDate = new Date(studentBirthdayDateFromForm);

  //Вычисляем целочисленное количество лет
  let age = now.getFullYear() - studentBirthdayDate.getFullYear();

  //Корректируем возраст с учетом месяца и даты рождения
  if (now.getMonth() < studentBirthdayDate.getMonth() ||
      (now.getMonth() === studentBirthdayDate.getMonth() && now.getDate() < studentBirthdayDate.getDate())) {
        age--
  }

  return age
}

//Функция определения курса
function courseStudy(startStudy) {
  //Текущая дата и время
  const now = new Date(),
    //Год начала
    start = new Date(startStudy, 9, 1)
    //Год окончания
    finish = new Date((startStudy + 4), 9, 1);

  //Проверка на окончание обучения
  if (now.getFullYear() > startStudy + 4 ||
    (now.getFullYear() === startStudy + 4 && now.getMonth() > 8)) {
      return 'Закончил'
  } else {
    return now.getFullYear() - startStudy
  }
}

//Функция вывода даты в формате dd.mm.yyyy
function formatDate(date) {

  let dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  let mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  let yy = date.getFullYear();

  return dd + '.' + mm + '.' + yy;
}

//Функция валидности инпутов
function checkInputs(studentFromForm) {

  const now = new Date()

  function birthdayCheck(birthDay) {
    const inputBirthday = new Date(birthDay);
    const minDate = new Date(1900,1,1)

    if (Number(inputBirthday) < Number(minDate) || Number(inputBirthday) > Number(now)) {
      alert('Дата рождения ожидается в диапазоне от 01.01.1900 до текущей даты')
      return true
    } else {
      return false
    }
  }

  function startStudyCheck(startStudy) {
    if (parseInt(startStudy) < 2000 || parseInt(startStudy) > now.getFullYear()) {
      alert('Год начала обучения не может быть меньше 2000 и больше текущего')
      return true
    } else {
      return false
    }
  }

  if (studentFromForm.name.trim().length === 0) {
    alert('Заполните поле для имени');
    return false
  }

  if (studentFromForm.patronymic.trim().length === 0) {
    alert('Заполните поле для отчества');
    return false
  }

  if (studentFromForm.surname.trim().length === 0) {
    alert('Заполните поле для фамилии');
    return false
  }

  if (String(studentFromForm.birthDay).trim().length === 0) {
    alert('Заполните поле даты рождения');
    return false
  } else {if (birthdayCheck(studentFromForm.birthDay)) {
    return false
  }}

  if (String(studentFromForm.startStudy).trim().length === 0) {
    alert('Заполните поле начало обучения');
    return false
  } else { if(startStudyCheck(studentFromForm.startStudy)) {
    return false
  }}

  if (studentFromForm.faculty.trim().length === 0) {
    alert('Заполните поле факультет');
    return false
  }

  return true
}

// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).

// Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.

const globalStudentsList = [
    // Добавьте сюда объекты студентов
    {
      name: 'Иван',
      patronymic: 'Иванович',
      surname: 'Иванов',
      birthDay: new Date(2002, 11, 17),
      startStudy: 2023,
      faculty: 'Математический'
    },
    {
      name: 'Олег',
      patronymic: 'Олегович',
      surname: 'Олегов',
      birthDay: new Date(2003, 1, 18),
      startStudy: 2020,
      faculty: 'Экономический'
    },
    {
      name: 'Анфиса',
      patronymic: 'Олеговна',
      surname: 'Студентова',
      birthDay: new Date(2005, 9, 30),
      startStudy: 2022,
      faculty: 'Филологический'
    },
    {
      name: 'Михаил',
      patronymic: 'Валентинович',
      surname: 'Дуболомов',
      birthDay: new Date(1984, 6, 20),
      startStudy: 2005,
      faculty: 'Юридический'
    },
    {
      name: 'Артур',
      patronymic: 'Владимирович',
      surname: 'Документооборотов',
      birthDay: new Date(1999, 9, 5),
      startStudy: 2017,
      faculty: 'Агрономический'
    },
]

// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент с информацией и пользователе.У функции должен быть один аргумент - объект студента.

function getStudentItem(studentObj) {

  //Создание DOM студента
  const
    $studentTr = document.createElement('tr'),
    $studentFIO = document.createElement('th'),
    $studentFaculty = document.createElement('th'),
    $studentBirth = document.createElement('th'),
    $studentYearsStudy = document.createElement('th');

  //Подготовка наполнения
  const
    studentFIO = studentObj.surname + ' ' + studentObj.name + ' ' + studentObj.patronymic,
    studentAge = studentAgeFn(studentObj.birthDay),
    studentBirth = `${formatDate(studentObj.birthDay)} (${studentAge})`,
    yearsStudy = `${studentObj.startStudy}-${studentObj.startStudy + 4}`,
    studentCourse = courseStudy(studentObj.startStudy),
    studentYearsStudy = `${yearsStudy} (${studentCourse})`;

  //Наполнение DOM элементов
  $studentFIO.textContent = studentFIO;
  $studentFaculty.textContent = studentObj.faculty;
  $studentBirth.textContent = studentBirth;
  $studentYearsStudy.textContent = studentYearsStudy;

  //Сборка DOM
  $studentTr.append($studentFIO);
  $studentTr.append($studentFaculty);
  $studentTr.append($studentBirth);
  $studentTr.append($studentYearsStudy);

  return $studentTr
}

// Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.

function renderStudentsTable(studentsArray) {

  //Заголовок таблицы
  const $app = document.getElementById('students_list'),
    $table = document.createElement('table'),
    $tableHead = document.createElement('thead'),
    $tableBody = document.createElement('tbody'),
    $tableHeadTr = document.createElement('tr'),
    $tableHeadFIO = document.createElement('th'),
    $tableHeadFaculty = document.createElement('th'),
    $tableHeadBirth = document.createElement('th'),
    $tableHeadYearsStudy = document.createElement('th');


  //Очистка таблицы
  $app.innerHTML = '';

  //Ids
  $tableHeadFIO.setAttribute('id', 'FIOTr');
  $tableHeadFaculty.setAttribute('id', 'facultyTr');
  $tableHeadBirth.setAttribute('id', 'birthTr');
  $tableHeadYearsStudy.setAttribute('id', 'yearStudy');


  //Textcontent
  $tableHeadFIO.textContent = 'Ф.И.О. студента';
  $tableHeadFaculty.textContent = 'Факультет';
  $tableHeadBirth.textContent = 'Дата рождения и возраст';
  $tableHeadYearsStudy.textContent = 'Годы обучения и номер курса';

  //Сборка заголовка
  $tableHeadTr.append($tableHeadFIO);
  $tableHeadTr.append($tableHeadFaculty);
  $tableHeadTr.append($tableHeadBirth);
  $tableHeadTr.append($tableHeadYearsStudy);
  $tableHead.append($tableHeadTr);

  //Цикл вывода всех студентов
  for (const student of studentsArray) {
    const studentTr = getStudentItem(student);
    $tableBody.append(studentTr);
  }

  //Стилизация таблицы
  $table.classList.add('table');
  $tableHead.classList.add('table-primary');
  $tableBody.classList.add('table-secondary');

  //Добавление заголовка и тела таблицы в таблицу
  $table.append($tableHead);
  $table.append($tableBody);

  //Добавление таблицы в DOM
  $app.append($table);

  return {
    $table,
    $app,
    // $tableHeadFIO,
    // $tableHeadFaculty,
    // $tableHeadBirth,
    // $tableHeadYearsStudy
  }
}

//Создание формы
function createStudentForm() {

  //Создание DOM элементов формы
  const
    $formPlace = document.getElementById('student_form'),
    $form = document.createElement('form'),
    $inputGroupFIO = document.createElement('div'),
    $inputGroupDate = document.createElement('div'),
    $name = document.createElement('input'),
    $patronymic = document.createElement('input'),
    $surname = document.createElement('input'),
    $birthDay = document.createElement('input'),
    $startStudy = document.createElement('input'),
    $faculty = document.createElement('input'),
    $button = document.createElement('button'),
    $FIOLabel = document.createElement('label'),
    $dateLabel = document.createElement('label'),
    $labelAndinputFIO = document.createElement('div'),
    $labelAndDate = document.createElement('div'),
    $labelAndFaculty = document.createElement('div'),
    $facultyLabel = document.createElement('label');

  //Placeholders
  $name.placeholder = 'Имя';
  $patronymic.placeholder = 'Отчество';
  $surname.placeholder = 'Фамилия';
  $birthDay.placeholder = 'Дата рождения';
  $startStudy.placeholder = 'Год начала обучения';
  $faculty.placeholder = 'Факультет';

  //Types
  $name.type = 'text';
  $patronymic.type = 'text';
  $surname.type = 'text';
  $birthDay.type = 'date';
  $startStudy.type = 'number';
  $faculty.type = 'text';
  $button.type = 'submit';

  //Стилизация формы
  $form.classList.add('mb-5', 'flex', 'flex-column');
  $name.classList.add('form-control');
  $patronymic.classList.add('form-control');
  $surname.classList.add('form-control');
  $birthDay.classList.add('form-control');
  $startStudy.classList.add('form-control');
  $faculty.classList.add('mb-3', 'form-control');
  $inputGroupFIO.classList.add('mb-3', 'input-group');
  $inputGroupDate.classList.add('mb-3', 'input-group');
  $button.classList.add('btn', 'btn-primary', 'btn-lg');
  $button.textContent = 'Добавить студента';
  // $button.disabled = true;
  $FIOLabel.classList.add('form-label');
  $FIOLabel.textContent = 'Введите Фамилию Имя и Отчество студента';
  $dateLabel.classList.add('form-label');
  $dateLabel.textContent = 'Укажите дату рождения студента и год начала обучения';
  $facultyLabel.classList.add('form-label');
  $facultyLabel.textContent = 'Укажите факультет обучения студента';

  //Сборка группы с ФИО
  $inputGroupFIO.append($name);
  $inputGroupFIO.append($patronymic);
  $inputGroupFIO.append($surname);
  $labelAndinputFIO.append($FIOLabel);
  $labelAndinputFIO.append($inputGroupFIO);

  //Сборка группы с датой рождения и Годом начала обучения
  $inputGroupDate.append($birthDay);
  $inputGroupDate.append($startStudy);
  $labelAndDate.append($dateLabel);
  $labelAndDate.append($inputGroupDate);

  //Сборка формы
  $form.append($labelAndinputFIO);
  $form.append($labelAndDate);
  $labelAndFaculty.append($facultyLabel);
  $labelAndFaculty.append($faculty);
  $form.append($labelAndFaculty);
  $form.append($button);
  $formPlace.append($form);

  return {
    $form,
    $name,
    $patronymic,
    $surname,
    $birthDay,
    $startStudy,
    $faculty,
    $button
  }
}

// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.

//Сборка приложения
function createApp(studentsList) {

  //Копирование исходного массива
  let studentsListCopy = [...studentsList];

  //Первичный вызов формы и таблицы
  let studentForm = createStudentForm();
  let studentsTable = renderStudentsTable(studentsListCopy);

  //Переменная для изменения направления сортировки
  let sortDir = false;

  //Слушатель события формы
  studentForm.$form.addEventListener('submit', function(e) {

    //Специальная функция обнуления действий по умолчанию
    e.preventDefault();

    //Собираем объект из инпутов
    const studentFromForm = {
      name: studentForm.$name.value.trim(),
      patronymic: studentForm.$patronymic.value.trim(),
      surname: studentForm.$surname.value.trim(),
      birthDay: new Date(studentForm.$birthDay.value),
      startStudy: Number(studentForm.$startStudy.value),
      faculty: studentForm.$faculty.value.trim()
    }

    //Проверяем валидность заполненных полей
    if (checkInputs(studentFromForm)) {
      studentsListCopy.push(studentFromForm);
      renderStudentsTable(studentsListCopy);
    } else return

    studentForm.$name.value = '';
    studentForm.$patronymic.value = '';
    studentForm.$surname.value = '';
    studentForm.$birthDay.value = '';
    studentForm.$startStudy.value = '';
    studentForm.$faculty.value = '';
  })

  // Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

  //Сортировка
  const sortStudentList = (arr, prop, dir = true) => arr.sort((a,b) => (!dir ? a[prop] < b[prop] : a[prop] > b[prop]) ? -1 : 0)

  //Слушатель клика на колонку ФИО
  document.getElementById('FIOTr').addEventListener('click', () => {
    studentsListCopy = sortStudentList(studentsListCopy, 'surname', sortDir);
    console.log('sortFIO');
    console.log(sortDir);
    sortDir = !sortDir;
    console.log(sortDir);
    renderStudentsTable(studentsListCopy);
  })

  //Слушатель клика на колонку Факультет
  document.getElementById('facultyTr').addEventListener('click', () => {
    studentsListCopy = sortStudentList(studentsListCopy, 'faculty', sortDir);
    console.log('sortfaculty');
    sortDir = !sortDir;
    renderStudentsTable(studentsListCopy);
  })

  //Слушатель клика на колонку ДР
  document.getElementById('birthTr').addEventListener('click', function() {
    studentsListCopy = sortStudentList(studentsListCopy, 'birthDay', sortDir);
    console.log('sortbirth');
    sortDir = !sortDir;
    renderStudentsTable(studentsListCopy);
  })

  //Слушатель клика на колонку Год обучения
  document.getElementById('yearStudy').addEventListener('click', () => {
    studentsListCopy = sortStudentList(studentsListCopy, 'startStudy', sortDir);
    console.log('sortstudy');
    sortDir = !sortDir;
    renderStudentsTable(studentsListCopy);
  })

}

createApp(globalStudentsList);


// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.
