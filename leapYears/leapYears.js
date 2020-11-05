const leapYears = function(year) {
    // Simplified version
    return (year % 100 == 0) ? (year % 400 == 0) : (year % 4 == 0);

    // Tenary expression above in if/else statements
    // if (year % 100 == 0) {
    //     if (year % 400 == 0) return true;
    // } else {
    //     if (year % 4 == 0) return true;
    // }
    // return false;
}

module.exports = leapYears
