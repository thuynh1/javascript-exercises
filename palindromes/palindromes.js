const palindromes = function(str) {
    const len = Math.floor(str.length / 2);
    const regex = /[^a-z]/g;    // Regex to select non-alpha characters (a-z)
    str = str.toLowerCase().replace(regex, "");

    for (let i = 0; i < len; i += 1) {
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }
    }
    return true;
}

module.exports = palindromes
