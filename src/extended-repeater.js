function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = "+",
    addition = "",
    additionRepeatTimes = 1,
    additionSeparator = "|",
  } = options;

  const additionString = new Array(additionRepeatTimes)
    .fill(String(addition))
    .join(additionSeparator);

  const result = new Array(repeatTimes)
    .fill(String(str) + additionString)
    .join(separator);

  return result;
}

module.exports = {
  repeater,
};
