
function countCats(matrix) {
   let count = 0;
   for (let row of matrix) {
      for (let element of row) {
         if (element === "^^") {
            count++;
         }
      }
   }
   return count;
}

module.exports = {
   countCats
};
