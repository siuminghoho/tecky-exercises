// Instructions
// Take a nested list and return a single flattened list with all values except nil/null.

// The challenge is to write a function that accepts an arbitrarily-deep nested list-like structure and returns a flattened structure without any nil/null values.

// For Example

// input: [1,[2,3,null,4],[null],5]

// output: [1,2,3,4,5]

// Source
// Interview QuestionThe link opens in a new window or tab



function flattenedArray(input) {
    let output = []

    for (let index in input) {
        if (Array.isArray(input[index])) {
            output.push(...input[index])}
            else {
                output.push(input[index])

            }
        }
        // }
        // if(Input[index]==Array){
        //     console.log("this is an array")}
        // else    {{console.log("This is a string")}
        //     return;
        // }

    console.log(output)
    }

    



flattenedArray([1, [2, 3], 4, 5])











