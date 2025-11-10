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

// 90. Identify every unique tool used in a repair workshop.
const distinctTools = (record1, record2, record3) => {
  return [record1, record2, record3].flatMap(arr => arr).filter(
    (record, index, records) => {
      return records.indexOf(record) === index;
    });
}

testCode("90) Identify every unique tool used in a repair workshop : ",
  distinctTools(
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
const countOfWhite = (record) => {
  return record.reduce((count, current) => {
    return current === "white" ? count + 1 : count;
  }, 0);
};

testCode("91) Shirts in a laundry batch listed as “white”.",
  countOfWhite(["white", "blue", "white", "red", "white"]),
  3,
  ["white", "blue", "white", "red", "white"]
);

// 92. Combine all notes written during a meeting into one list.
const combineNotes = (notes1, notes2, notes3) => {
  return [notes1, notes2, notes3].flatMap(x => x);
};

testCode("92) Combine all notes into one list : ",
  combineNotes(["note A1", "note A2"], ["note B1"], ["note C1", "note C2"]),
  ["note A1", "note A2", "note B1", "note C1", "note C2"],
  ["note A1", "note A2"], ["note B1"], ["note C1", "note C2"]
);

// 93. Check if any item in a shipment is marked “fragile”.
const isFragileItem = (items) => {
  return items.some((item) => {
    return item === "fragile";
  });
};

testCode("93) Check if any item is marked “fragile : ",
  isFragileItem(["box 1", "handle with care", "fragile", "heavy"]),
  true,
  ["box 1", "handle with care", "fragile", "heavy"]
);

// 94. Verify that all letters written by participants are lowercase.
const isLowerCase = (text) => {
  return text.every((word) => {
    return word === word.toLowerCase();
  });
};

testCode("94) Verify that all letters are lowercase : ",
  isLowerCase(["this", "isA", "test"]),
  false,
  ["this", "isA", "test"]
);

// 95. Reverse a list of moves recorded during a chess game.
const reverse = (moves) => {
  return moves.reduce((reversed, current) => {
    reversed.unshift(current);
    return reversed;
  }, []);
};

testCode("95) Reverse a list of moves : ",
  reverse(["e4", "e5", "Nf3", "Nc6"]),
  ["Nc6", "Nf3", "e5", "e4"],
  ["e4", "e5", "Nf3", "Nc6"]
);

//96. Build a frequency list for musical notes practiced in a session.
const musicNotes = (notes) => {
  const uniqueNotes = notes.filter((note, index) => {
    return notes.indexOf(note) === index;
  });
  return uniqueNotes.map(uniqueNote => {
    const count = notes.reduce((count, currentNote) => {
      return currentNote === uniqueNote ? count + 1 : count;
    }, 0);
    return [uniqueNote, count];
  });
};
testCode("96) Build a frequency list for musical notes practiced in a session : ",
  musicNotes(["C4", "G4", "A4", "G4", "C4", "C4"]),
  [["C4", 3], ["G4", 2], ["A4", 1]],
  ["C4", "G4", "A4", "G4", "C4", "C4"]
);

// 97. Count the number of times “error” appears in a log of messages.
const countError = (logMessage) => {
  return logMessage.reduce((count, msg) => {
    return msg.toLowerCase().includes("error") ? count + 1 : count;
  }, 0);
};

testCode("97) Count the number of times “error” appears in a log of messages : ",
  countError(
    ["INFO: User logged in.",
      "WARNING: Disk space low.",
      "ERROR: Failed to connect to database.",
      "DEBUG: Processing request.",
      "ERROR: Invalid input received.",
      "INFO: Data saved successfully.",
      "ERROR: Timeout during API call."
    ]),
  3,
  ["INFO: User logged in.",
    "WARNING: Disk space low.",
    "ERROR: Failed to connect to database.",
    "DEBUG: Processing request.",
    "ERROR: Invalid input received.",
    "INFO: Data saved successfully.",
    "ERROR: Timeout during API call."
  ]
);

// 98. Gather all ingredients used in three versions of the same dish.
const ingredients = (list1, list2, list3) => {
  return [list1, list2, list3].flatMap(x => x).filter((item, index, dishes) => {
    return dishes.indexOf(item) === index;
  });
};

testCode("98) Gather all ingredients used in three versions of the same dish : ",
  ingredients(["flour", "sugar"], ["flour", "milk"], ["eggs", "sugar"]),
  ["flour", "sugar", "milk", "eggs"],
  ["flour", "sugar"], ["flour", "milk"], ["eggs", "sugar"]
);

// 99. Check if any student skipped all activity sessions.
const sessionAttendance = (allStudents, sessionAttendees) => {
  const attendance = sessionAttendees.flatMap(x => x);
  return allStudents.some(id => {
    return !(attendance.includes(id));
  })
};

testCode("99) Check if any student skipped all activity sessions : ",
  sessionAttendance([101, 102, 103], [[101, 102], [101], []]),
  true,
  [101, 102, 103], [[101, 102], [101], []]
);

// 100. Create a list of distinct songs hummed by children on a bus ride.
const distinctRhymes = (rhymes) => {
  return rhymes.filter((rhyme, index) => {
    return rhymes.indexOf(rhyme) === index;
  });
};

testCode("100) List of distinct songs hummed by children on a bus ride : ",
  distinctRhymes([
    "wheels on the bus",
    "wheels on the bus",
    "row row row",
    "jingle bells",
    "jingle bells"
  ]),
  ["wheels on the bus", "row row row", "jingle bells"],
  [
    "wheels on the bus",
    "wheels on the bus",
    "row row row",
    "jingle bells",
    "jingle bells"
  ]
);

// EXTRA : All the words that start with 'a' 
const startsWithA = (sentences) => {
  return sentences.flatMap(sentence => sentence.split(" ").filter((word) => {
    return word[0] === "a" || word[0] === "A";
  }));
};

testCode("EXTRA : All the words that start with 'a' : ",
  startsWithA(['just a car', 'also another car', 'arbitrary car', 'An ice']),
  ["a", "also", "another", "arbitrary", "An"],
  ['just a car', 'also another car', 'arbitrary car', 'An ice']
);