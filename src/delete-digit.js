
function deleteDigit(n) {
   const numberStr = n.toString();
   const numbersArray = [];

   for (let i = 0; i < numberStr.length; i++) {
      const newNumberStr = numberStr.slice(0, i) + numberStr.slice(i + 1);
      numbersArray.push(parseInt(newNumberStr));
   }

   return Math.max(...numbersArray);
}

module.exports = {
   deleteDigit
};
