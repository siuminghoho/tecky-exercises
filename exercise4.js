function reverseString(str) {
    console.log(str.split('').reverse().join(''));
    

}

reverseString("cool"); 

function reverseString2(str) {
    let reversed = '';
    for (let char of str) {
        reversed = char + reversed;
    }
    console.log(reversed);
}

reverseString2("cool"); // looc