
function sortByHeight(arr) {
   const sorted = arr.filter(x => x !== -1).sort((a, b) => a - b);
   return arr.map(x => x === -1 ? -1 : sorted.shift());
}

module.exports = {
   sortByHeight
};
