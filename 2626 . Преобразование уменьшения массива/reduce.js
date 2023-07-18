/* Учитывая массив  nums, функцию fn и начальное значение init, вернуть сумму чисел массива.
Решить не используя встроенный Array.reduce метод. 
ввод:
nums = [1,2,3,4];
fn = function sum(accum, curr) { return accum + curr; };
init = 0;
*/

const reduce = function (nums, fn, init) {
  let sum = init;
  nums.forEach((el) => (sum = fn(sum, el)));
  return sum;
};
