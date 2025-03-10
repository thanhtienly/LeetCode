/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  var minStep = 0;
  for (let i = 0; i < seats.length; i++) {
    minStep += Math.abs(seats[i] - students[i]);
  }
  return minStep;
};
