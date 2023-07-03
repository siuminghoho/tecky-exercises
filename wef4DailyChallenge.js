// // Black: 0
// // Brown: 1
// // Red: 2
// // Orange: 3
// // Yellow: 4
// // Green: 5
// // Blue: 6
// // Violet: 7
// // Grey: 8
// // White: 9

// // From the example above: brown-green should return 15 brown-green-violet should return 15 too, ignoring the third color.

// // Notes
// // The provided input will be an array of color names and the output should be a number.

// let userInput = ["Black", "Brown", "White"];

// let bandColorEncoded = {
//     Black: 0,
//     Brown: 1,
//     Red: 2,
//     Orange: 3,
//     Yellow: 4,
//     Green: 5,
//     Blue: 6,
//     Violet: 7,
//     Grey: 8,
//     White: 9
// }





// //input :color name

// //output : number
// //more then two color: ignore

// //console.log(bandColorEncoded instanceof Object)
// //let arr = bandColorEncoded[0]
// // console.log(arr)

// //console.log(bandColorEncoded)

// function getColorCode(userInput, bandColorEncoded) {
//     let answer = [];
//     let returnResult;


//     if (userInput.length <= 2) {
//         for (let i of userInput) {
//             //console.log(i)
//             for (let j in bandColorEncoded) {

//                 if (i == j) {
//                     answer.push(bandColorEncoded[j])
//                     //console.log(answer)
//                 }

//                 //console.log(answer)
//                 //console.log(bandColorEncoded[i] + '-' + bandColorEncoded[j])
//                 // if(userInput[i]==j)
//                 // {
//                 //     console.log(j)
//                 // }
//             }
//         }
//         returnResult = answer.join('');

//         console.log(returnResult);

//         //console.log(answer)
//         // for (let result=0;result<answer.length;result++){
//         //     returnResult = answer.concat()
//         //     console.log(returnResult)

//     }
// }
// //console.log(bandColorEncoded[i])

// //return


// // }


// getColorCode(userInput, bandColorEncoded)
let userInput = ["Black", "White", "White"];

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






function getColorCode(userInput, bandColorEncoded) {
    let answer = [];
    let returnResult;

    // if (userInput.length <= 2) {

    for (let i of userInput) {
        if (userInput.length > 2) {
            userInput.pop()
            //console.log(typeof userInput)
        }
        for (let j in bandColorEncoded) {
            if (i == j) {
                answer.push(bandColorEncoded[j]);
                //console.log(n)
            }
        }
    }
    returnResult = answer.join('');
    console.log(returnResult)
    // Return the result instead of logging it to the console
    return returnResult;
}


let colorCode = getColorCode(userInput, bandColorEncoded);
// console.log(colorCode);


function getColorCode2(userInput, colorCode) {
    if (userInput.length < 2) {
        return "pls input more than 2 color"
    }
    let result = ""
    for (let i = 0; i < 2; i++) {
        result += colorCode[userInput[i]]
    }
    return result
}
console.log(getColorCode2(['Red', 'Blue', 'Green'], bandColorEncoded))