// merge sort

const mergeSort = (array) => {
    if (array.length <= 1) {
      return array
    }
    const midIndex = Math.floor(array.length/2)
    const leftSide = array.slice(0, midIndex);
    const rightSide = array.slice(midIndex)
    
    return merge(mergeSort(leftSide), mergeSort(rightSide))
    
  }
  
  const merge = (leftSide, rightSide) => {
    const sortedArray = [];
    let i = 0;
    let j = 0;
    
    while (i < leftSide.length && j < rightSide.length) {
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

mergeSort(array)
