(function() {

  //Объявляем массив дел
  let globalTodoList = [
    // {
    //   id: 0,
    //   name: 'qwerty',
    //   done: false,
    // },
  ];

  //Функция генерации id дела
  function createIdTodoItem(todoListObj) {

    //Проверка на пустоту массива
    if (!todoListObj || !todoListObj.length) {
      return 0;
    }

    let maxId = 0;

    for (let i = 0; i < todoListObj.length; i++) {
      if (parseInt(todoListObj[i].id) > maxId) {
        maxId = parseInt(todoListObj[i].id);
      }
    }

    return maxId + 1;
  }

  //Объект для работы с данными
  var JSONAndLS = {

    //Метод записи/перезаписи данных в LS
    dataToLs: function (keyName, data) {
      localStorage.setItem(keyName, JSON.stringify(data));
    },

    //Метод чтения данных из LS
    lsToData: function (keyName) {
      return JSON.parse(localStorage.getItem(keyName));
    }

  }

  //Создание заголовка списка дел
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle;
  }

  //Создание формы добавление дел
  //Возвращает форму в целом, поле ввода и кнопку
  function createTodoItemForm() {

    //Создание элементов формы
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    //Стилизация формы
    form.classList.add('input-group', 'mb-3');
    input.classList.add('form-control');
    input.placeholder = 'Введите название нового дела';
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';
    button.disabled = true;

    //Добавление элементов в форму
    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    //Слушатель импута и активация кнопки
    input.addEventListener('input', function() {
      if (input.value !== "") {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    })

    //Возвращаем форму в целом, поле ввода и кнопку
    return {
      form,
      input,
      button,
    };
  }

  //Создание списка дел
  //Возвращает список дел
  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  //Создание элемента списка
  //Возвращает элемент списка и кнопки выполнения и удаления
  function createTodoItem(listName, todoItemObj) {

    //Создание элементов дела
    let item = document.createElement('li');
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    //Стилизация дела
    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = todoItemObj.name;

    //Стилизация кнопок
    buttonGroup.classList.add('btn-group', 'btn-group-sm');
    doneButton.classList.add('btn', 'btn-success');
    doneButton.textContent = 'Готово';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = 'Удалить';

    //Проверка на "выполненость" дела
    if (todoItemObj.done === true) {
      item.classList.add('list-group-item-success');
    }

    //Добавление кнопок в группу
    buttonGroup.append(doneButton);
    buttonGroup.append(deleteButton);
    item.append(buttonGroup);

    //Слушатель события нажатия на кнопку "Готово"
    doneButton.addEventListener('click', function() {
      item.classList.toggle('list-group-item-success');
      for (let i = 0; i < globalTodoList.length; i++) {
        if (globalTodoList[i].id === todoItemObj.id) {
          if (globalTodoList[i].done === false) {
            globalTodoList[i].done = true;
          } else {
            globalTodoList[i].done = false;
          }
        }
      }

      JSONAndLS.dataToLs(listName, globalTodoList);
    });

    //Слушатель события нажатия на кнопку "Удалить"
    deleteButton.addEventListener('click', function() {
      //Подтверждение действия
      if (confirm('Вы уверены?')) {
        item.remove();
        globalTodoList = globalTodoList.filter(j => j.id !== todoItemObj.id);
      }

      JSONAndLS.dataToLs(listName, globalTodoList);
    });

    //Возвращаем дело и кнопки
    return {
      item,
      doneButton,
      deleteButton,
    };
  }

  //Функция сборки приложения
  function createTodoApp(container, title = 'Список дел', listName) {

    //Создание элементов приложения
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    //Добавление элементов приложения в контейнер
    container.append(todoAppTitle);
    container.append(todoItemForm.form);
    container.append(todoList);

    //Слушатель события отправки ответа
    todoItemForm.form.addEventListener('submit', function(e) {

      //Специальная функция обнуления действий по умолчанию
      e.preventDefault();

      //Если значение пустое, то ничего не делаем
      if (!todoItemForm.input.value) {
        return
      }

      //Создание id
      let todoItemId = createIdTodoItem(globalTodoList);

      //Создание дела
      let todoItemObj = {
        id: todoItemId,
        name: todoItemForm.input.value,
        done: false
      }

      let todoItem = createTodoItem(listName,todoItemObj);
      globalTodoList.push(todoItemObj);
      JSONAndLS.dataToLs(listName, globalTodoList);

      // //Слушатель события нажатия на кнопку "Готово"
      // todoItem.doneButton.addEventListener('click', function() {
      //   todoItem.item.classList.toggle('list-group-item-success');
      // });

      // //Слушатель события нажатия на кнопку "Удалить"
      // todoItem.deleteButton.addEventListener('click', function() {
      //   //Подтверждение действия
      //   if (confirm('Вы уверены?')) {
      //     todoItem.item.remove();
      //   }
      // });

      //Добавление дела в список дел
      todoList.append(todoItem.item);

      //Обнуление формы
      todoItemForm.input.value = '';
      todoItemForm.button.disabled = true;
    });

    if (localStorage.getItem(listName) !== null) {

      globalTodoList = JSONAndLS.lsToData(listName);

      for (let i = 0; i < globalTodoList.length; i++) {
        let todoItem = createTodoItem(listName,globalTodoList[i]);
        todoList.append(todoItem.item);
      }
    }
  }

  //Сборка приложения
  window.createTodoApp = createTodoApp;

}) ();
