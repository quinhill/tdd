const chai = require('chai');
const { assert, expect } = chai;
const mergeSort = require('../lib/mergeSort.js');

describe('merge sort', () => {

  it('should be a function', () => {
    assert.isFunction(mergeSort);
  });

  it('should sort numbers in an array', () => {
    let array = [5, 4, 3, 2, 1]
    assert.deepEqual(array, [5, 4, 3, 2, 1]);
    assert.deepEqual(mergeSort(array), [1, 2, 3, 4, 5]);
  });

   it('should sort negative numbers in an array', () => {
    let array = [-1, -2, -3, -4, -5]
    assert.deepEqual(array, [-1, -2, -3, -4, -5]);
    assert.deepEqual(mergeSort(array), [-5, -4, -3, -2, -1]);
  });

   it('should sort letters in an array', () => {
    let array = ['e', 'd', 'c', 'b', 'a']
    assert.deepEqual(array, ['e', 'd', 'c', 'b', 'a']);
    assert.deepEqual(mergeSort(array), ['a', 'b', 'c', 'd', 'e']);
  });

   it('should sort a large, random array', () => {
     let array = []
     let min = -200;
     let max = 200;
     

     for(let i = 0; i < 1000; i++){
       let number = Math.floor(Math.random() * (max - min) + min)
       array.push(number);
     }
     const sortedArray = mergeSort(array);
     const actualSort = array.sort((a, b) => a - b)
     assert.deepEqual(sortedArray, actualSort);
   })

})