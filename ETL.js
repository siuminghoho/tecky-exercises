// 1 point: "A", "E", "I", "O", "U", "L", "N", "R", "S", "T",
// 2 points: "D", "G",
// 3 points: "B", "C", "M", "P",
// 4 points: "F", "H", "V", "W", "Y",
// 5 points: "K",
// 8 points: "J", "X",
// 10 points: "Q", "Z",



let current = {

    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"] ,

    2: ["D", "G"],

    3: ["B", "C", "M", "P"],

    4: ["F", "H", "V", "W", "Y"],

    5: ["K"],

    8: ["J", "X"],

    10: ["Q", "Z"],

}

for(let key in current){
    for(let arrayValue in current[key]){
        console.log(`${current[key][arrayValue].toLowerCase()} is worth ${key} points`)

    }

}




// my version
// let currentArray = Object.values(current);

// for (let i = 0; i < currentArray.length; i++) {
//     currentArray[i]=currentArray[i].map((letter)=>letter.toLowerCase());

//     console.log(currentArray[i])
//     //return currentArray
// }







//current.toLowerCase();

// console.log(currentArray)

// console.log(toLowerCaseArray)