// INPUT : [2,2,3,4,5,2,4]
// OUTPUT : [[2, 3], [3, 1], [4, 2], [5, 1]]

const occurences = (accumulator, element) => {
  const occurence = accumulator.find((x) => x[0] === element);
  if (occurence !== undefined) {
    occurence[1]++;
  } else {
    accumulator.push([element, 1]);
  }
  return accumulator;
};

console.log([2, 2, 3, 4, 5, 2, 4].reduce(occurences, []));
console.log([2, 2, 3, 4, [5, 2], 4].reduce(occurences, []));
