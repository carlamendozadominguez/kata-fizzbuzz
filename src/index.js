export const isFizz = (value) => value % 3 === 0;
export const isBuzz = (value) => value % 5 === 0;

export const fizzbuzz = (value) => {
  if (isBuzz(value) && isFizz(value)) {
    return 'FIZZBUZZ';
  }

  if (isFizz(value)) {
    return 'FIZZ';
  }

  if (isBuzz(value)) {
    return 'BUZZ';
  }
  return value.toString();
};
