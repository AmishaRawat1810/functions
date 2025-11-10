// deno-lint-ignore-file
//RUN LENGTH

//INPUT ARRAY : [19, 22, 19, 22, 24, 25, 17, 11, 22, 23, 28, 23, 0, 1,12, 9, 13, 27, 15]

//RUN LENGTH :
const array = [
  19,
  22,
  19,
  22,
  24,
  25,
  17,
  11,
  22,
  23,
  28,
  23,
  0,
  1,
  12,
  9,
  13,
  27,
  15,
];

const isOdd = (number) => {
  return number % 2 !== 0;
};

const determiningRunLength = (array, threshold) => {
  let runLength = array.length;
  let reminder = 0;
  while (runLength > threshold) {
    if (isOdd(runLength)) {
      reminder = runLength % 2;
    }
    runLength = Math.floor(threshold / 2);
  }
  return runLength + reminder;
};

const run = determiningRunLength(array, 9);

//INSERTION SORT
const insertionSort = (start, array, end) => {
  for (let i = start; i < end; i++) {
    const currentValue = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currentValue;
  }
  return array;
};

console.log(`
  RUN : ${run}`);

//INSERTION SORT ON THE RUN
const insertionOnRun = (array, run) => {
  for (let i = 0; i < array.length; i = i + run + 1) {
    insertionSort(i, array, run);
  }
  return array;
};
console.log(`
  SORT : ${insertionOnRun(array, run)}
  `);
