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

  test('Debería return BUZZ si number es divisible por 5', () => {
    expect(fizzbuzz(5)).toBe('BUZZ');
    expect(fizzbuzz(20)).toBe('BUZZ');
  });

  test('Debería return FIZZBUZZ si number es divisible por 3 y 5', () => {
    expect(fizzbuzz(15)).toBe('FIZZBUZZ');
    expect(fizzbuzz(30)).toBe('FIZZBUZZ');
    expect(fizzbuzz(45)).toBe('FIZZBUZZ');
  });
});
