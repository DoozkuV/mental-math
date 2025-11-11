import { randInt } from "./math";

const additionGenerator = (max: number = 9) =>
  (): [number, number] => [randInt(1, max), randInt(1, max)];

function subtractionGenerator(max: number = 9) {
  return (): [number, number] => {
    const n1 = randInt(1, max);
    const n2 = randInt(1, max);
    return n1 > n2 ? [n1, n2] : [n2, n1];
  }
}

export {
  additionGenerator,
  subtractionGenerator,
};
