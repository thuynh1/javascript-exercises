const repeatString = function(str, amount) {
    if (str == "") return str;
    if (amount < 0) return "ERROR";

    let result = "";
    for (let i = 0; i < amount; i++) {
        result += str;
    }
    return result;
}

module.exports = repeatString
