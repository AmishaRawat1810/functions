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
const insertionSortOnRun = (array, run) => {
  for (let i = 0; i < array.length; i = i + run + 1) {
    insertionSort(i, array, run);
  }
  return array;
};
console.log(`
  AFTER INSERTION SORT : ${insertionSortOnRun(array, run)}
  `);

//MERGE SORT
const mergeSort = (array, left, right) => {
  if (left >= right) {
    return [array[left]]; // Return as array
  }
  const mid = Math.floor((left + right) / 2);
  const temp1 = mergeSort(array, left, mid);
  const temp2 = mergeSort(array, mid + 1, right);
  return merge(temp1, temp2);
};

const merge = (array1, array2) => {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
      result.push(array1[i]);
      i++;
    } else {
      result.push(array2[j]);
      j++;
    }
  }
  while (i < array1.length) {
    result.push(array1[i]);
    i++;
  }

  while (j < array2.length) {
    result.push(array2[j]);
    j++;
  }
  return result;
};

//MERGE SORT ON THE RUN
console.log(`
  AFTER MERGESORT : ${mergeSort(array, 0, array.length - 1)}
  `);

// console.log(mergeSort([1, 4, 3, 5, 2], 0, 4))
