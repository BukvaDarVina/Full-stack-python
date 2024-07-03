(function() {

  // Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.
  function createNumbersArray(count) {
    let arr = [];
    for (let i = 1; i < count + 1; i++) {
      arr.push(i);
      arr.push(i);
    }
    return arr
  }

  // Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
  }

  // Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.
  function startGame(count) {
    const arr = createNumbersArray(count);
    return shuffle(arr);
  }

  //Класс Карточка
  class Card {
    _open = false;
    _success = false;

    //Функция создание нового объекта класса Карточчка
    constructor (container, number, fn) {
      //Создание карточка
      this.card = document.createElement('div');
      this.card.classList.add('card');
      this.card.textContent = number;
      this.number = number;

      //Слушатель клика по карточке
      this.card.addEventListener('click', () => {
        if (this.open == false && this.success == false) {
          this.open = true;
          fn(this);
        }
      })

      //Вывод карточки на поле
      container.append(this.card);
    }

    //Срабатывает при переопределении свойства open карточки
    set open(value) {
      this._open = value;
      if (value) {
        this.card.classList.add('open')
      } else {
        this.card.classList.remove('open')
      }
    }

    get open() {
      return this._open
    }

    //Срабатывает при переопределении свойства success карточки
    set success(value) {
      this._success = value;
      if (value) {
        this.card.classList.add('success')
      } else {
        this.card.classList.remove('success')
      }
    }

    get success() {
      return this._success
    }

  }

  //Сборка приложения
  function newGame(container, count) {

    const numberArr = startGame(count);
    let cardsArr = [];
    let firstCard = null;
    let secondCard = null;

    //Наполнение массива карточек
    for (let i = 0; i < numberArr.length; i++) {
      cardsArr.push(new Card(container, numberArr[i], flip))
    }

    //Логика игры
    function flip (card) {
      //Проверка открытых карточек и сброс, если они разные
      if (firstCard !== null && secondCard !== null) {
        if (firstCard.number != secondCard.number) {
          firstCard.open = false;
          firstCard.success = false;
          firstCard = null;
          secondCard.open = false;
          secondCard.success = false;
          secondCard = null;
        }
      }

      //Запоминание карточек
      if (firstCard == null) {
        firstCard = card;
      } else {
        if (secondCard == null) {
          secondCard = card;
        }
      }

      //Обнуление "памяти" при совпадении
      if (firstCard !== null && secondCard !== null) {
        if (firstCard.number == secondCard.number) {
          firstCard.success = true;
          secondCard.success = true;
          firstCard = null;
          secondCard = null;
        }

        //Проверка на совпадение по всем карточкам и перезапуск игры
        if (document.querySelectorAll('.card.success').length == cardsArr.length) {
          alert('Вы нашли все карточки!');
          container.innerHTML = '';
          const numberArr = startGame(count);
          let cardsArr = [];
          let firstCard = null;
          let secondCard = null;

          newGame(container, count);
        }
      }
    }
  }

  window.newGame = newGame;
}) ();


