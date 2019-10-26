const chainFns = require(".");

describe("chainFns tests", () => {
  test("if next is called each times then every handlers are called", () => {
    const divideByTwo = next => num => next(num / 2);
    const addOne = next => num => next(num + 1);
    const stopChainIfOdd = next => num => (num % 2 === 0 ? next(num) : num);
    const thousandTimes = next => num => num * 1000;

    const operations = chainFns([
      divideByTwo,
      addOne,
      stopChainIfOdd,
      thousandTimes
    ]);

    expect(operations(10)).toBe(6000);
  });

  test("if next() is not called then the next node of the chain is not called", () => {
    const divideByTwo = next => num => next(num / 2);
    const addOne = next => num => next(num + 1);
    const stopChainIfOdd = next => num => (num % 2 === 0 ? next(num) : num);
    const thousandTimes = next => num => num * 1000;

    const operations = chainFns([
      divideByTwo,
      addOne,
      stopChainIfOdd,
      thousandTimes
    ]);

    expect(operations(12)).toBe(7);
  });

  test("if next() is called in the last handler the behavior of the chain is the same", () => {
    const divideByTwo = next => num => next(num / 2);
    const addOne = next => num => next(num + 1);
    const stopChainIfOdd = next => num => (num % 2 === 0 ? next(num) : num);
    const thousandTimes = next => num => next(num * 1000);

    const operations = chainFns([
      divideByTwo,
      addOne,
      stopChainIfOdd,
      thousandTimes
    ]);

    expect(operations(12)).toBe(7);
  });
});
