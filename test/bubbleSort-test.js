const chai = require('chai');
const { assert, expect } = chai;
const bubbleSort = require('../lib/bubbleSort.js');

describe('bubble sort', () => {

  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  });

  it('should sort numbers in an array', () => {
    let array = [5, 4, 3, 2, 1]
    assert.deepEqual(array, [5, 4, 3, 2, 1]);
    assert.deepEqual(bubbleSort(array), [1, 2, 3, 4, 5]);
  });

   it('should sort negative numbers in an array', () => {
    let array = [-1, -2, -3, -4, -5]
    assert.deepEqual(array, [-1, -2, -3, -4, -5]);
    assert.deepEqual(bubbleSort(array), [-5, -4, -3, -2, -1]);
  });

   it('should sort letters in an array', () => {
    let array = ['e', 'd', 'c', 'b', 'a']
    assert.deepEqual(array, ['e', 'd', 'c', 'b', 'a']);
    assert.deepEqual(bubbleSort(array), ['a', 'b', 'c', 'd', 'e']);
  });

   it('should sort a large, random array', () => {
     let array = []
     let min = -200;
     let max = 200;
     

     for(let i = 0; i < Math.abs(min) + max; i++){
       let number = Math.floor(Math.random() * (max - min) + min)
       array.push(number);
     }
     const sortedArray = bubbleSort(array);
     assert.isAtLeast(array[1], array[0])
   })

})