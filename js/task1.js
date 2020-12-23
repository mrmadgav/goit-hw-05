const present = ["adult", "adult", "child", "child", "neighbour"];
const future = [];
let iterationCounter = 0;
// функция поиска элемента, подсчета количества его в массиве, принимает в параметр элемент и массив
const count = (arr, param) => {
  let countParam = 0;
  for (let word of arr) {
    if (word === param) {
      countParam++;
    }
  }

  return countParam;
};
// функия убирает все элементы //
const sliceElem = (arr, elem) => {
  let index;
  while ((index = arr.indexOf(elem)) > -1) {
    arr.splice(index, 1);
  }
};
// функция убирает один элемент //
const sliceElemOnce = (arr, elem) => {
  let index;
  if ((index = arr.indexOf(elem)) > -1) {
    arr.splice(index, 1);
  }
};

const iterationDescription = () => {
  let pc;
  let presentChildStat = () => {
    if (count(present, "child") > 0) {
    pc = console.log(`${count(present, "child")} детей`);
    }
return pc;
  };
  let presentAdultStat = () => {
    if (count(present, "adult") > 0) {
      console.log(`${count(present, "adult")} взрослых`);
    }
  };
  let presentNeighbourStat = () => {
    if (count(present, "neighbour") > 0) {
      console.log(`${count(present, "neighbour")} сосед`);
    }
  };
  let futureChildStat = () => {
    if (count(future, "child") > 0) {
      console.log(`${count(future, "child")} детей`);
    }
  };
  let futureAdultStat = () => {
    if (count(future, "adult") > 0) {
      console.log(`${count(future, "adult")} взрослых`);
    }
  };
  let futureNeighbourStat = () => {
    if (count(future, "neighbour") > 0) {
      console.log(`${count(future, "neighbour")} сосед`);
    }
  };
  // console.log(presentChildStat());
  // return console.log(
  //   `Итерация #${iterationCounter} в настоящем ${presentChildStat()} ${presentAdultStat()} ${presentNeighbourStat()}-------- в будущем ${futureChildStat()} ${futureAdultStat()} ${futureNeighbourStat()}`
  // );

};

// поехали в будущее //
const futureTrip = () => {
  if (count(present, "child") >= 2) {
    future.push("child", "child");
    sliceElem(present, "child");
    ++iterationCounter;
    iterationDescription();
    presentTrip(); // добавлено для вызова функции Car() один раз
  } else if (
    count(future, "adult") < 2 &&
    count(present, "child") &&
    count(future, "child") === 1
  ) {
    future.push("adult");
    sliceElemOnce(present, "adult");
    ++iterationCounter;
    iterationDescription();
    presentTrip(); // добавлено для вызова функции Car() один раз
  } else if (count(present, "child") === 1 && count(present, "adult") === 0) {
    future.push("neighbour");
    sliceElem(present, "neighbour");
    ++iterationCounter;
    iterationDescription();
  }
  // presentTrip();
};
// поехали в настоящее //
const presentTrip = () => {
  if (count(present, "child") === 0 && count(present, "neighbour") === 1) {
    present.push("child");
    sliceElemOnce(future, "child");
    ++iterationCounter;
    iterationDescription();
    futureTrip(); // добавлено для вызова функции Car() один раз
  } else if (
    count(future, "adult") >= 1 &&
    count(present, "child") &&
    count(future, "child") === 1
  ) {
    present.push("child");
    sliceElemOnce(future, "child");
    ++iterationCounter;
    iterationDescription();
    futureTrip(); // добавлено для вызова функции Car() один раз
  } else if (
    count(future, "neighbour") === 1 &&
    count(present, "child") === 0
  ) {
    present.push("neighbour");
    sliceElem(future, "neighbour");
    ++iterationCounter;
    iterationDescription();
    return console.log(`Всех перевезли за: ${iterationCounter} раз`);
  }
  // futureTrip();
};
// функия тачка
const car = function () {
  console.log("старт функции");
  console.log("present: ", present);
  console.log("future: ", future);
  futureTrip();
  presentTrip();
  console.log("present: ", present);
  console.log("future: ", future);
  console.log("завершение функции");
};
// вызов функции
car();
