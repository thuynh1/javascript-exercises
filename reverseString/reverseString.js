const reverseString = function(string) {
    // Do not use the built in function.
    // It will fail if your input contains UTF-16 characters (e.g, 𝌆)
    // return string.split("").reverse().join("");
    if (string == "") return "";
    
    let result = "";
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
}

module.exports = reverseString