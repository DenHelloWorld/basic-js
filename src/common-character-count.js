
function getCommonCharacterCount(s1, s2) {
   let count = 0;
   const charCount1 = getCharCount(s1);
   const charCount2 = getCharCount(s2);

   for (const char in charCount1) {
      if (char in charCount2) {
         count += Math.min(charCount1[char], charCount2[char]);
      }
   }

   return count;
}

function getCharCount(str) {
   const charCount = {};

   for (const char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
   }

   return charCount;
}

module.exports = {
   getCommonCharacterCount,
};
