import calculate from "./__mocks__/calculate";

test('AC button', () => {
  const object = {
    total: '0',
    next: '0',
    operation: '+',
  };
  const button = 'AC';
  const expected = {
    total: null,
    next: null,
    operation: null,
  }
  expect(calculate(object, button)).toStrictEqual(expected);
});

test('Number button if there is an operation', () => {
  const object = {
    total: '3',
    next: '0',
    operation: 'x',
  };
  const button = '3';
  const expected = {
    total: '3',
    next: '3',
    operation: 'x',
  };
  expect(calculate(object, button)).toStrictEqual(expected);
});

test('User pressed operation after pressing "="', () => {
  const object = {
    total: '6',
    next: null,
    operation: null,
  };
  const button = 'x';
  const expected = {
    total: '6',
    next: null,
    operation: 'x',
  };
  expect(calculate(object, button)).toStrictEqual(expected);
});

test('User pressed operation when there is an existing operation', () => {
  const object = {
    total: '7',
    next: null,
    operation: 'x',
  };
  const button = '+';
  const expected = {
    total: '7',
    next: null,
    operation: '+',
  };
  expect(calculate(object, button)).toStrictEqual(expected);
});