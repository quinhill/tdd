// quick sort

const quickSort = (array) => {
  if (array.length <= 1) {
    return array
  }
  let pivot = array.pop()
  const lessThanArray = [];
  const greaterThanArray = [];
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      lessThanArray.push(array[i])
    } else {
      greaterThanArray.push(array[i])
    }
  }
  return [...quickSort(lessThanArray), pivot, ...quickSort(greaterThanArray)]
}

quickSort(array)