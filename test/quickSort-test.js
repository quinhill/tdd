const chai = require('chai');
const { assert, expect } = chai;
const quickSort = require('../lib/quickSort.js');

describe('quick sort', () => {

  it('should be a function', () => {
    assert.isFunction(quickSort);
  });

  it('should sort numbers in an array', () => {
    let array = [5, 4, 3, 2, 1]
    assert.deepEqual(array, [5, 4, 3, 2, 1]);
    assert.deepEqual(quickSort(array), [1, 2, 3, 4, 5]);
  });

   it('should sort negative numbers in an array', () => {
    let array = [-1, -2, -3, -4, -5]
    assert.deepEqual(array, [-1, -2, -3, -4, -5]);
    assert.deepEqual(quickSort(array), [-5, -4, -3, -2, -1]);
  });

   it('should sort letters in an array', () => {
    let array = ['e', 'd', 'c', 'b', 'a']
    assert.deepEqual(array, ['e', 'd', 'c', 'b', 'a']);
    assert.deepEqual(quickSort(array), ['a', 'b', 'c', 'd', 'e']);
  });

   it('should sort a large array', () => {
     let array = []
     let min = -200;
     let max = 200;
     

     for(let i = 0; i < Math.abs(min) + max; i++){
       let number = Math.floor(Math.random() * (max - min) + min)
       array.push(number);
     }
     const sortedArray = quickSort(array);
     assert.isAtLeast(array[1], array[0])
   })

})