// checks if deep equal
const areDeepEqual = function (array1, array2) {
  const areArraysEqual = function (array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }

    for (let index = 0; index < array1.length; index++) {
      if (!areDeepEqual(array1[index], array2[index])) {
        return false;
      }
    }

    return true;
  }
  if (typeof array1 !== typeof array2) {
    return false;
  }

  if (Array.isArray(array1) && Array.isArray(array2)) {
    return areArraysEqual(array1, array2);
  }

  return array1 === array2;
}

//displays the text,input,result,passed
const testCode = (text, result, expected, array1, array2 = [], array3 = []) => {
  console.log(`
    ${text}
    ${"-".repeat(text.length)}
    Input : ${[array1, array2, array3].flatMap(arr => arr)}
    Output : ${result}
    PASSED : ${areDeepEqual(result, expected) ? "✅" : "❌"}
`);
};

// 11. Lunchbox Ingredient Inventory
const distinctIngredients = (list1, list2, list3) => {
  return [list1, list2, list3].flatMap(x => x).filter((item, index, lists) => {
    return lists.indexOf(item) === index;
  });
};

testCode("11) Lunchbox Ingredient Inventory : ",
  distinctIngredients(["rice", "lentils"], ["rice"], ["curd", "lentils"]),
  ["rice", "lentils", "curd"],
  ["rice", "lentils"], ["rice"], ["curd", "lentils"]
);

// 12. Choir Harmony Review
const findNote = (musicNote1, musicNote2, musicNote3) => {
  return [musicNote1, musicNote2, musicNote3].flatMap(x => x).some((note) => {
    return note === "so";
  });
};

testCode("12) Music Rehearsal Notes : so",
  findNote(["la", "la"], ["mi"], ["so", "la"]),
  true,
  ["la", "la"], ["mi"], ["so", "la"]
);

//13. Vegetable Crate Totals
const crateTotal = (weightList1, weightList2, weightList3) => {
  return [weightList1, weightList2, weightList3].flatMap(x => x).reduce(
    (previous, current) => {
      return previous + current;
    });
};

testCode("13) Vegetable Crate Totals : ",
  crateTotal([4, 6], [2, 3, 1], [5]),
  21,
  [4, 6], [2, 3, 1], [5]
);

// 14. Post Office Parcel Record
const uniqueParcel = (list) => {
  return list.filter((item, index, lists) => {
    return lists.indexOf(item) === index;
  });
};

testCode("14) Post Office Unique Parcel Size : ",
  uniqueParcel(["small", "large", "medium", "small"]),
  ["small", "large", "medium"],
  ["small", "large", "medium", "small"]
);

// 15. Wildlife Sighting Count
const deerSightingCount = (sightings) => {
  return sightings.reduce((count, animal) => {
    return animal === "deer" ? count + 1 : count;
  }, 0);
};

testCode("15) Wildlife Sighting Count : ",
  deerSightingCount(["deer", "deer", "rabbit", "deer"]),
  3,
  ["deer", "deer", "rabbit", "deer"]
);

// 16. Study Group Completion
const completedChapters = (group1, group2, group3) => {
  return [group1, group2, group3].flatMap(x => x).reduce((previous, current) => {
    return previous + current;
  });
};

testCode("16) Study Group Completion : ",
  completedChapters([1, 2], [3], [2, 4, 1]),
  13,
  [1, 2], [3], [2, 4, 1]
);

// 17. Dance Class Steps
const isTurnPresent = (sequence1, sequence2) => {
  return [sequence1, sequence2].flatMap(x => x).some((sequence) => {
    return sequence === "turn";
  });
};

testCode("17) Dance Class Steps : ",
  isTurnPresent(["step", "tap"], ["turn", "step"]),
  true,
  ["step", "tap"], ["turn", "step"]
);

// 18. Garden Watering Amount
const totalWaterUsed = (record1, record2, record3) => {
  return [record1, record2, record3].flatMap(x => x).reduce(
    (previous, current) => {
      return previous + current;
    });
};

testCode("18) Garden Watering Amount : ",
  totalWaterUsed([4, 6], [2, 3, 1], [5]),
  21,
  [4, 6], [2, 3, 1], [5]
);

// 19. Paper Crane Making
const totalCranes = (record1, record2, record3) => {
  return [record1, record2, record3].flatMap(x => x).reduce(
    (previous, current) => {
      return previous + current;
    });
};

testCode("19) Paper Crane Making : ",
  totalCranes([5, 6], [1], [5]),
  17,
  [5, 6], [1], [5]
);

// 20. Fruit Basket Inventory
const uniqueFruits = (list1, list2, list3) => {
  return [list1, list2, list3].flatMap(x => x).filter((fruit, index, lists) => {
    return lists.indexOf(fruit) === index;
  });
};

testCode("20) Fruit Basket Inventory : ",
  uniqueFruits(["apple", "banana"], ["apple"], ["apple", "orange"]),
  ["apple", "banana", "orange"],
  ["apple", "banana"], ["apple"], ["apple", "orange"]
);