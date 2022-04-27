import operate from './__mocks__/operate';

test('sum two values', () => {
  const result = operate(5, 4, '+');
  expect(result).toEqual('9');
});

test('substract one value from another', () => {
  const result = operate(5, 2, '-');
  expect(result).toEqual('3');
});

test('multiply two values', () => {
  const result = operate(5, 4, 'x');
  expect(result).toEqual('20');
});

test('divide one value by another', () => {
  const result = operate(20, 4, '÷');
  expect(result).toEqual('5');
});

test('divide one value by another', () => {
  const result = operate(20, 0, '÷');
  expect(result).toEqual("Can't divide by 0.");
});

test('modulo of one value by another', () => {
  const result = operate(20, 4, '%');
  expect(result).toEqual('0');
});

test('modulo of one value by another', () => {
  const result = operate(20, 0, '%');
  expect(result).toEqual("Can't find modulo as can't divide by 0.");
});
