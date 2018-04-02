// quick sort

const quickSort = (array) => {
  // declaring the quicksort function
  if (array.length <= 1) {
    return array
  }
  // base case
  let pivot = array.pop()
  // takes last element of array and declares it as the variable 'pivot'
  const lessThanArray = [];
  // instantiates an array for the variable 'lessThanArray'
  const greaterThanArray = [];
  // instantiates an array for the variable 'greaterThanArray'

  
  for (let i = 0; i < array.length; i++) {
    // iterates over each index of the array
    if (array[i] < pivot) {
      // compares it to pivot
      lessThanArray.push(array[i])
      // if less than, the current index is pushed into 'lessThanArray'
    } else {
      greaterThanArray.push(array[i])
      // if greater than or equal to, is pushed into 'greaterThanArray'
    }
  }
  return [...quickSort(lessThanArray), pivot, ...quickSort(greaterThanArray)]
  // sends the 'lessThanArray' and 'greaterThanArray' back through the 'quickSort' function
  // returns the final array.
}

module.exports = quickSort;