const display = (text, result, ...array) => {
  console.log(`
    ${text}
    ${"-".repeat(text.length)}
    Input : ${array}
    Output : ${result}
    `);
};

// 1. Festival Ribbon Count
const countRibbons = (ribbons) => {
  return ribbons.reduce((count, ribbon) => {
    return ribbon === "blue" ? count + 1 : count;
  }, 0);
}
display("1) Festival Ribbo Count : Blue",
  countRibbons(["red", "blue", "red", "green", "red", "blue"]),
  ["red", "blue", "red", "green", "red", "blue"]
);

// 2. Stargazing Log
const stargazingLog = (log1, log2, log3) => {
  const logs = [log1, log2, log3];
  return logs.flatMap(log => log);
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
  const records = [record1, record2, record3];
  return records.flatMap(record => record).filter((student, index, records) => {
    return records.indexOf(student) === index;
  });
};
display("4) Students attendance record : ",
  sessionRecord(["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]),
  ["Asha", "Ravi", "Neel"], ["Ravi"], ["Asha", "Meera"]
);

// 5. Candy Jar Stocking
// A store logs candy refills like this:
// [5, 3]
// [2]
// [4, 1]
// Find the total number of candies added.
const refilledCandies = (log1, log2, log3) => {
  const logs = [log1, log2, log3];
  return logs.flatMap(log => log).reduce((prev, curr, index, logs) => {
    return prev + curr;
  }, 0);
};
display("5) Candy Jar Stocking : ",
  refilledCandies([5, 3], [2], [4, 1]),
  [5, 3], [2], [4, 1]
);