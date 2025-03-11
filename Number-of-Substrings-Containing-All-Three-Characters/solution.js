/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  var head = 0;
  var tail = 0;
  var result = 0;
  /* Use charCount to count number of "a", "b", "c" in substr from head to tail */
  var charCount = [0, 0, 0];
  while (tail < s.length) {
    charCount[s[tail].charCodeAt(0) - "a".charCodeAt(0)]++;
    while (charCount[0] && charCount[1] && charCount[2]) {
      /* Valid subStr found, calculate number of valid substr */
      result += s.length - tail;

      /* Move to next value of head */
      charCount[s[head].charCodeAt(0) - "a".charCodeAt(0)]--;
      head++;
    }
    tail++;
  }
  return result;
};
