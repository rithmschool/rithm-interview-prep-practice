/**
 * This approach takes 1 single sweep of the array with two pointers.
 *  The highest and secondHighest are initialized to negative Infinity
 *  so that any numbers in the array will be eligible. Then set the
 *  secondHighest first, and if it's greater than the highest, swap.
 */
function twoHighest(nums) {
  // initialize both to the lowest possible values
  let highest = -Infinity;
  let secondHighest = -Infinity;

  for (let num of nums) {
    // set secondHighest first
    if (num > secondHighest) {
      secondHighest = num;
    }
    // see if we need to set highest
    if (secondHighest >= highest) {
      // if so, swap
      let tmp = highest;
      highest = secondHighest;
      secondHighest = tmp;
    }
  }

  return [secondHighest, highest];
}

