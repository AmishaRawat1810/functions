const flattenArrays = (arr1, arr2 = [], arr3 = []) => {
  const arrays = [arr1, arr2, arr3];
  return arrays.flatMap(array => array);
};

const display = (text, result, array1, array2, array3) => {
  console.log(`
    ${text}
    ${"-".repeat(text.length)}
    Input : ${flattenArrays(array1, array2, array3)}
    Output : ${result}
    `);
};

// 1. Festival Ribbon Count
const countRibbons = (ribbons) => {
  return ribbons.reduce((count, ribbon) => {
    return ribbon === "blue" ? count + 1 : count;
  }, 0);
};

display("1) Festival Ribbo Count : Blue",
  countRibbons(["red", "blue", "red", "green", "red", "blue"]),
  ["red", "blue", "red", "green", "red", "blue"]
);

// 2. Stargazing Log
const stargazingLog = (log1, log2, log3) => {
  return flattenArrays(log1, log2, log3);
};

display("2) Stargazing log : ",
  stargazingLog(["Orion", "Leo"], ["Orion", "Gemini"], ["Taurus"]),
  ["Orion", "Leo"], ["Orion", "Gemini"], ["Taurus"]
);

// 3. Birdwatching Duplicate Removal
const birdSpecies = (birds) => {
  return birds.filter((bird, index, birds) => {
    return birds.indexOf(bird) === index;
  });
};

display("3) Bird species : ",
  birdSpecies(["sparrow", "crow", "sparrow", "eagle", "crow"]),
  ["sparrow", "crow", "sparrow", "eagle", "crow"]
);

// 4. Classroom Attendance Check
const sessionRecord = (record1, record2, record3) => {
  const records = flattenArrays(record1, record2, record3);
  return records.filter((student, index, records) => {
    return records.indexOf(student) === index;
  });
};

display("4) Students attendance record : ",
  sessionRecord(["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]),
  ["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]
);

// 5. Candy Jar Stocking
const refilledCandies = (log1, log2, log3) => {
  const logs = flattenArrays(log1, log2, log3);
  return logs.reduce((prev, curr, index, logs) => {
    return prev + curr;
  }, 0);
};

display("5) Candy Jar Stocking : ",
  refilledCandies([5, 3], [2], [4, 1]),
  [5, 3], [2], [4, 1]
);

// 6. Music Rehearsal Notes
const findNote = (musicNote1, musicNote2, musicNote3) => {
  const musicNotes = flattenArrays(musicNote1, musicNote2, musicNote3);
  return musicNotes.some((note) => {
    return note === "do";
  });
};

display("6) Music Rehearsal Notes : do",
  findNote(["mi", "fa", "so"], ["do", "mi"], ["fa"]),
  ["mi", "fa", "so"], ["do", "mi"], ["fa"]
);

// 7. Weather Sensor Validation
const sensorValidation = (record1, record2, record3) => {
  const records = flattenArrays(record1, record2, record3);
  return records.every((record) => {
    return record < 32;
  });
};

display("7) Weather Sensor Validation : < 32",
  sensorValidation([22, 23], [25, 24, 22], [29]),
  [22, 23], [25, 24, 22], [29]
);

// 8. Fitness Tracker Miles
const runsLog = (log1, log2, log3) => {
  const logs = flattenArrays(log1, log2, log3);
  return logs.reduce((previous, current) => {
    return previous + current;
  }, 0);
};

display("8) Fitness Tracker Miles : ",
  runsLog([2, 3, 2], [4], [1, 1]),
  [2, 3, 2], [4], [1, 1]
);

// 9) Art Workshop Color Variety
const colorsUsed = (session1, session2, session3) => {
  const colors = flattenArrays(session1, session2, session3);
  return colors.filter((color, index, colors) => {
    return colors.indexOf(color) === index;
  });
};

display("9) Art Workshop Color Variety : ",
  colorsUsed(["blue", "yellow"], ["yellow", "green"], ["blue"]),
  ["blue", "yellow"], ["yellow", "green"], ["blue"]
);


// 10) Library Return Counter
// Books returned:
// ["Dune", "Dune", "Foundation", "Dune"]
// Count how many times “Dune” was returned
const countBook = (books) => {
  return books.reduce((book, books, count = 0) => {
    return book === "Dune" ? count + 1 : count;
  });
};
display("10) Library Return Counter : ",
  countBook(["Dune", "Dune", "Foundation", "Dune"]),
  ["Dune", "Dune", "Foundation", "Dune"]
)