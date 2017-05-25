//Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
function repeatStringNumTimes(str, num) {
    let newstr = '';    
    while(num > 0) {
        newstr += str;
        num--;
    }
    return newstr;
}

console.log(repeatStringNumTimes("abc", 3));
