import { fizzbuzz } from "../src";

describe('Index', () => {
  test('Debería devolver un number como un string', () => {
    expect(fizzbuzz(1)).toBe('1');
  });

  test('Debería return FIZZ si number es divisible por 3', () => {
    expect(fizzbuzz(6)).toBe('FIZZ');
    expect(fizzbuzz(18)).toBe('FIZZ');
    expect(fizzbuzz(21)).toBe('FIZZ');
  });
});
