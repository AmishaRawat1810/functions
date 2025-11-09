// flattens 3 arrays into 1
const flattenArrays = (array1, array2 = [], array3 = []) => {
  return [array1, array2, array3].flat();
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

//displays the text,input,result,passed
const testCode = (text, result, expected, array1, array2 = [], array3 = []) => {
  console.log(`
    ${text}
    ${"-".repeat(text.length)}
    Input : ${flattenArrays(array1, array2, array3)}
    Output : ${result}
    PASSED : ${areDeepEqual(result, expected) ? "✅" : "❌"}
`);
};

// returns distinct records
const distinct = (records) => {
  return records.filter((student, index, records) => {
    return records.indexOf(student) === index;
  });
};

// 90. Identify every unique tool used in a repair workshop.
const tools = (record1, record2, record3) => {
  const records = flattenArrays(record1, record2, record3);
  return distinct(records);
}
testCode("90) Identify every unique tool used in a repair workshop : ",
  tools(
    ["hammer", "screwdriver", "hammer", "wrench", "screwdriver"],
    ["pliers", "saw", "drill"],
    ["tape", "tape", "tape"]
  ),
  ["hammer", "screwdriver", "wrench", "pliers", "saw", "drill", "tape"],
  ["hammer", "screwdriver", "hammer", "wrench", "screwdriver"]
  ["pliers", "saw", "drill"],
  ["tape", "tape", "tape"]
);

// 91. Count how many shirts in a laundry batch were listed as “white”.
const laundry = (record) => {
  return record.reduce((count, current) => {
    return current === "white" ? count + 1 : count;
  }, 0);
};

testCode("91) Shirts in a laundry batch listed as “white”.",
  laundry(["white", "blue", "white", "red", "white"]),
  3,
  ["white", "blue", "white", "red", "white"]
);

// 92. Combine all notes written during a meeting into one list.
//     Input : [["note A1", "note A2"], ["note B1"], ["note C1", "note C2"]]	
//     Result : ["note A1", "note A2", "note B1", "note C1", "note C2"]
