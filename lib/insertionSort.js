// insertion sort

const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++){
    
    let arrayIndex = array[i];
    let j = i - 1;
    
    while (j >= 0 && array[j] > arrayIndex) {
      array[j + 1] = array[j]
      j--;
    }
    array[j + 1] = arrayIndex
  } 
  return array;
}

module.exports = insertionSort;