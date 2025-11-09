// flattens 3 arrays into 1
const flattenArrays = (array1, array2 = [], array3 = []) => {
  return [array1, array2, array3].flat();
};

// returns distinct records
const distinct = (records) => {
  return records.filter((student, index, records) => {
    return records.indexOf(student) === index;
  });
};

// returns sum of elements
const sumOf = (logs) => {
  return logs.reduce((previous, current) => {
    return previous + current;
  }, 0);
};

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

//displays the text,input,result
const testCode = (text, result, expected, array1, array2, array3) => {
  console.log(`
    ${text}
    ${"-".repeat(text.length)}
    Input : ${flattenArrays(array1, array2, array3)}
    Output : ${result}
    PASSED : ${areDeepEqual(result, expected) ? "✅" : "❌"}
`);
};

// 1. Festival Ribbon Count
const countRibbons = (ribbons) => {
  return ribbons.reduce((count, ribbon) => {
    return ribbon === "blue" ? count + 1 : count;
  }, 0);
};

testCode("1) Festival Ribbo Count : Blue",
  countRibbons(["red", "blue", "red", "green", "red", "blue"]),
  2,
  ["red", "blue", "red", "green", "red", "blue"], [], []
);

// 2. Stargazing Log
const stargazingLog = (log1, log2, log3) => {
  return flattenArrays(log1, log2, log3);
};

testCode("2) Stargazing log : ",
  stargazingLog(["Orion", "Leo"], ["Orion", "Gemini"], ["Taurus"]),
  ["Orion", "Leo", "Orion", "Gemini", "Taurus"],
  ["Orion", "Leo"], ["Orion", "Gemini"], ["Taurus"]
);

// 3. Birdwatching Duplicate Removal
const birdSpecies = (birds) => {
  return distinct(birds);
};

testCode("3) Bird species : ",
  birdSpecies(["sparrow", "crow", "sparrow", "eagle", "crow"]),
  ["sparrow", "crow", "eagle"],
  ["sparrow", "crow", "sparrow", "eagle", "crow"]
);

// 4. Classroom Attendance Check
const sessionRecord = (record1, record2, record3) => {
  const records = flattenArrays(record1, record2, record3);
  return distinct(records);
};

testCode("4) Students attendance record : ",
  sessionRecord(["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]),
  ["Asha", "Ravi", "Neel", "Meera"],
  ["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]
);

// 5. Candy Jar Stocking
const refilledCandies = (log1, log2, log3) => {
  const logs = flattenArrays(log1, log2, log3);
  return sumOf(logs);
};

testCode("5) Candy Jar Stocking : ",
  refilledCandies([5, 3], [2], [4, 1]),
  15,
  [5, 3], [2], [4, 1]
);

// 6. Music Rehearsal Notes
const findNote = (musicNote1, musicNote2, musicNote3) => {
  const musicNotes = flattenArrays(musicNote1, musicNote2, musicNote3);
  return musicNotes.some((note) => {
    return note === "do";
  });
};

testCode("6) Music Rehearsal Notes : do",
  findNote(["mi", "fa", "so"], ["do", "mi"], ["fa"]),
  true,
  ["mi", "fa", "so"], ["do", "mi"], ["fa"]
);

// 7. Weather Sensor Validation
const sensorValidation = (record1, record2, record3) => {
  const records = flattenArrays(record1, record2, record3);
  return records.every((record) => {
    return record < 32;
  });
};

testCode("7) Weather Sensor Validation : < 32",
  sensorValidation([22, 23], [25, 24, 22], [29]),
  true,
  [22, 23], [25, 24, 22], [29]
);

// 8. Fitness Tracker Miles
const runsLog = (log1, log2, log3) => {
  const logs = flattenArrays(log1, log2, log3);
  return sumOf(logs);
};

testCode("8) Fitness Tracker Miles : ",
  runsLog([2, 3, 2], [4], [1, 1]),
  13,
  [2, 3, 2], [4], [1, 1]
);

// 9) Art Workshop Color Variety
const colorsUsed = (session1, session2, session3) => {
  const colors = flattenArrays(session1, session2, session3);
  return distinct(colors);
};

testCode("9) Art Workshop Color Variety : ",
  colorsUsed(["blue", "yellow"], ["yellow", "green"], ["blue"]),
  ["blue", "yellow", "green"],
  ["blue", "yellow"], ["yellow", "green"], ["blue"]
);

// 10) Library Return Counter
const countBook = (books) => {
  return books.reduce((book, books, count = 0) => {
    return book === "Dune" ? count + 1 : count;
  });
};

testCode("10) Library Return Counter : ",
  countBook(["Dune", "Dune", "Foundation", "Dune"]),
  3,
  ["Dune", "Dune", "Foundation", "Dune"]
);