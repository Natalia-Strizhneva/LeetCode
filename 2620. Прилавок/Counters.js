/* Учитывая целое число  n, вернуть counter функцию. 
Функция сначала возвращает n, а затем возвращает на 1 больше предыдущего значения. */

const createCounter = function (n) {
  return function () {
    return n++;
  };
};
