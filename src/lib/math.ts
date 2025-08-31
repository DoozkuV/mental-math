export const randInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export const randSingleDigit = () => randInt(1, 9);
