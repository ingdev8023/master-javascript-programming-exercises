function countCharacter(str, char) {
    // your code here
    let newStr = str.split("").filter(a=> a===char)
    return newStr.length
    
}

let output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
