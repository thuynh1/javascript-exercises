const sumAll = function(limit1, limit2) {
    if (!Number.isInteger(limit1) ||
        !Number.isInteger(limit2) ||
        limit1 < 0 || limit2 < 0) return "ERROR";

    let start;
    let end;
    let result = 0;

    [start, end] = (limit1 < limit2) ? [limit1, limit2] : [limit2, limit1];

    for (let value = start; value <= end; value += 1) {
        result += value;
    }
    return result;
}

module.exports = sumAll
