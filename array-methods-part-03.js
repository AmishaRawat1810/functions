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

// 21. Classroom Pen Distribution
const totalPens = (array1, array2, array3) => {
  return [array1, array2, array3].flatMap(x => x).reduce(
    (previous, current) => {
      return previous + current;
    });
};

testCode("21) Classroom Pen Distribution : ",
  totalPens([2, 3], [1], [3, 2]),
  11,
  [2, 3], [1], [3, 2]
);


// 22. Movie Marathon Titles
const uniqueMovies = (list1, list2, list3) => {
  return [list1, list2, list3].flatMap(x => x).filter((item, index, lists) => {
    return lists.indexOf(item) === index;
  });
};

testCode("22) Movie Marathon Titles : ",
  uniqueMovies(["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]),
  ["Inception", "Dunkirk", "Interstellar"],
  ["Inception", "Dunkirk"], ["Interstellar"], ["Inception"]
);

// 23. Name Badge Sorting
const uniqueAttendees = (list) => {
  return list.filter((item, index, lists) => {
    return lists.indexOf(item) === index;
  });
};

testCode("23) Name Badge Sorting : ",
  uniqueAttendees(["A", "B", "A", "C", "B"]),
  ["A", "B", "C"],
  ["A", "B", "A", "C", "B"]
);

// 24. Ice Cream Orders
const chocolateCount = (order1, order2, order3) => {
  return [order1, order2, order3].flatMap(x => x).reduce((count, flavor) => {
    return flavor === "chocolate" ? count + 1 : count;
  }, 0);
};

testCode("24) Ice Cream Orders : ",
  chocolateCount(["vanilla", "chocolate"], ["strawberry"], ["chocolate"]),
  2,
  ["vanilla", "chocolate"], ["strawberry"], ["chocolate"]
);

// 25. Flowers in Bouquets
const uniqueFlowers = (list1, list2) => {
  return [list1, list2].flatMap(x => x).filter((item, index, lists) => {
    return lists.indexOf(item) === index;
  });
};

testCode("25) FLowers in Bouquets : ",
  uniqueFlowers(["rose", "lily"], ["lily", "tulip"]),
  ["rose", "lily", "tulip"],
  ["rose", "lily"], ["lily", "tulip"]
);

// 26. Morning Exercise Count
const totalRepetitions = (array1, array2, array3) => {
  return [array1, array2, array3].flatMap(x => x).reduce(
    (previous, current) => {
      return previous + current;
    });
};

testCode("26) Morning Exercise Count : ",
  totalRepetitions([10, 20], [5], [15, 10]),
  60,
  [10, 20], [5], [15, 10]
);

// 27. Train Station Announcements
const uniqueStation = (list1, list2, list3) => {
  return [list1, list2, list3].flatMap(x => x).filter((item, index, lists) => {
    return lists.indexOf(item) === index;
  });
};

testCode("27) Train Station Announcements : ",
  uniqueStation(["A", "B"], ["B", "C"], ["A"]),
  ["A", "B", "C"],
  ["A", "B"], ["B", "C"], ["A"]
);

// 28. Book Club Pages Read
const bookCLub = (array1, array2, array3) => {
  return [array1, array2, array3].flatMap(x => x).reduce(
    (previous, current) => {
      return previous + current;
    });
};

testCode("28) Book Club Pages Read : ",
  bookCLub([12, 10], [5], [8, 7]),
  42,
  [12, 10], [5], [8, 7]
);

// 29. Rainfall Data Check
const rainfallCheck = (data1, data2, data3) => {
  return [data1, data2, data3].flatMap(x => x).every((data) => {
    return data >= 0;
  });
};

testCode("29) Rainfall Data Check : ",
  rainfallCheck([3, -4], [5, 2], [1]),
  false,
  [3, -4], [5, 2], [1]
);

// ### **30. Fruit Stand Weight Totals**

// Weights:

// ```
// [4, 3]
// [2]
// [3, 1]
// ```

// Compute total weight.
const totalWeight = (log1, log2, log3) => {
  return [log1, log2, log3].flatMap(x => x).reduce((previous, current) => {
    return previous + current;
  });
};

testCode("30) Fruit Stand Weight Totals : ",
  totalWeight([4, 3], [2], [3, 1]),
  13,
  [4, 3], [2], [3, 1]
);