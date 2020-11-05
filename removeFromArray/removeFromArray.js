const removeFromArray = function(array, ...args) {
    if (args === undefined || args.length == 0) return array;
    // Returns a newly created filtered array
    return array.filter((element) => {
        if (args.indexOf(element) == -1) {
            return element;
        }
    });
}

removeFromArray([1,2,3,4], 3);

module.exports = removeFromArray
