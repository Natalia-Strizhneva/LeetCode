/*Учитывая массив arr и функцию сопоставления fn, верните новый массив с преобразованием, 
примененным к каждому элементу.
Возвращаемый массив должен быть создан таким образом, чтобы  returnedArray[i] = fn(arr[i], i).
Pешите это без встроенного Array.map метода.
 */

const map = function (arr, fn) {
  arr.forEach((el, index) => {
    arr[index] = fn(el, index);
  });
  return arr;
};
