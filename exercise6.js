// checkMarkSix([1, 3, 5, 7, 9, 11], [1, 3]); // returns: true
// checkMarkSix([1, 3, 5, 7, 9, 11], [2, 3]); // returns: false
// checkMarkSix([2, 4, 10, 15, 14, 19], [2, 19]); // returns: true


function checkMarkSix(result, pick) {
    let point = 0
    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < pick.length; j++) {
            if (pick[j] === result[i]) {
                point += 1;

            }

        }
    }
    if (point >= 2) {

        console.log("u win!!!");
        return true;

    } else {
        console.log("better luck next time!")
        return false;
    }
    
}



checkMarkSix([1, 3, 5, 7, 9, 11], [1, 4]);