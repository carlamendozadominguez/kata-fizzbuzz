export const fizzbuzz = (value) => {
  if (value % 3 === 0 && value % 5 === 0) {
    return 'FIZZBUZZ';
  }

  if (value % 3 === 0) {
    return 'FIZZ';
  }

  if (value % 5 === 0) {
    return 'BUZZ';
  }
  return value.toString();
};
