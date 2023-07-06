/* Напишите функцию  createCounter. Он должен принимать начальное целое число  init. 
Он должен возвращать объект с тремя функциями.
 */

function createCounter(init) {
  a = init;
  function increment() {
    return ++init;
  }
  function decrement() {
    return --init;
  }
  function reset() {
    init = a;
    return init;
  }
  return { increment, decrement, reset };
}

const counter = createCounter(5);
counter.increment();
