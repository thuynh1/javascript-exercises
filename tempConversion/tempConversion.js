const ftoc = function(temperature) {
  let result = (temperature - 32) * 5 / 9;
  return (result % 1 == 0) ? Number(result.toFixed(0)) : Number(result.toFixed(1));
}

const ctof = function(temperature) {
  let result = temperature * 9 / 5 + 32;
  return (result % 1 == 0) ? Number(result.toFixed(0)) : Number(result.toFixed(1));
}

module.exports = {
  ftoc,
  ctof
}
