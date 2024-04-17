import Sorting from './Lib.js';

function generateDenseArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
      array.push(Math.floor(Math.random() * 1000));
  }
  return array;
}

function generateSparseArray(length) {
  const array = [];
  for (let i = 0; i < length; i++) {
      if (i % 5 === 0) {
          array.push(undefined);
      } else {
          array.push(Math.floor(Math.random() * 1000));
      }
  }
  return array;
}

console.log("Sorting Algorithms Demonstration");

const denseArray = generateDenseArray(100);
console.log("Dense Array : ", denseArray);


console.log("Dense Array");
Sorting.bubbleSort(denseArray.slice(), 'ascending');
Sorting.bubbleSort(denseArray.slice(), 'descending');
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");
Sorting.selectionSort(denseArray.slice(), 'ascending');
Sorting.selectionSort(denseArray.slice(), 'descending');
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");
Sorting.insertionSort(denseArray.slice(), 'ascending');
Sorting.insertionSort(denseArray.slice(), 'descending');
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");
Sorting.shellSort(denseArray.slice(), 'ascending');
Sorting.shellSort(denseArray.slice(), 'descending');
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");
Sorting.quickSort(denseArray.slice(), 'ascending');
Sorting.quickSort(denseArray.slice(), 'descending');
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");


const sparseArray = generateSparseArray(100);
console.log("Sparse Array : ", sparseArray);
console.log("Sparse Array");
Sorting.bubbleSort(sparseArray.slice(), 'ascending');
Sorting.bubbleSort(sparseArray.slice(), 'descending');
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");
Sorting.selectionSort(sparseArray.slice(), 'ascending');
Sorting.selectionSort(sparseArray.slice(), 'descending');
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");
Sorting.insertionSort(sparseArray.slice(), 'ascending');
Sorting.insertionSort(sparseArray.slice(), 'descending');
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");
Sorting.shellSort(sparseArray.slice(), 'ascending');
Sorting.shellSort(sparseArray.slice(), 'descending');
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");
Sorting.quickSort(sparseArray.slice(), 'ascending');
Sorting.quickSort(sparseArray.slice(), 'descending');
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");