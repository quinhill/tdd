// merge sort

const mergeSort = (array) => {
  // declares the mergeSort array and take in the parameter of 'array'
    if (array.length <= 1) {
      return array
    }
    // declare the base-case in an if statement, states that if the length of the array <= 1 break the cycle.
    const midIndex = Math.floor(array.length/2)
    // declare the varliable 'midIndex', mainly to shorten the code when we slice for the right/left -side arrays
    const leftSide = array.slice(0, midIndex);
    // declares the array from index0 to midIndex as 'leftSide'
    const rightSide = array.slice(midIndex)
    // declares the array from midIndex to the end of the array as 'rightSide'
    
    return merge(mergeSort(leftSide), mergeSort(rightSide))
    // return is recursive to break the array down until they are single item arrays and then calls
  }
  
  const merge = (leftSide, rightSide) => {
    // declares the merge array and takes in the parameters of leftSide and rightSide
    const sortedArray = [];
    // instantiates a new array
    let i = 0;
    // declare the variable 'i' and assigns it the value of 0
    let j = 0;
    // declare the variable 'j' and assigns it the value of 0

    while (i < leftSide.length && j < rightSide.length) {
      // loop runs while the variable 'i' 
      if ( leftSide[i] > rightSide[j]) {
        sortedArray.push(rightSide[j])
        j++
      } else {
        sortedArray.push(leftSide[i])
        i++
      }
    }
    return [...sortedArray, ...leftSide.splice(i), ...rightSide.splice(j)]
  
}

module.exports = mergeSort;
