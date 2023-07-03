let userInput = ["Brown", "Green", "Violet"];

let bandColorEncoded = {
  Black: 0,
  Brown: 1,
  Red: 2,
  Orange: 3,
  Yellow: 4,
  Green: 5,
  Blue: 6,
  Violet: 7,
  Grey: 8,
  White: 9
};

// Assign null to non-existing colors
for (let color in bandColorEncoded) {
  if (!bandColorEncoded.hasOwnProperty(color)) continue;
  if (bandColorEncoded[color] === undefined) {
    bandColorEncoded[color] = null;
  }
}

function getColorCode(userInput) {
  let colorCode = 0;
  for (let i = 0; i < Math.min(userInput.length, 2); i++) {
    const color = userInput[i];
    if (bandColorEncoded[color]) {
      colorCode += bandColorEncoded[color];
    }
  }
  return colorCode;
}

const result = getColorCode(userInput);
console.log(result); // Output: 15