const Sorting = {
  swap: function(array, index1, index2) {
      [array[index1], array[index2]] = [array[index2], array[index1]];
  },

  // (обміну елементів)
  bubbleSort: function(arr, order) {
      const n = arr.length;
      let comparisons = 0;
      let exchanges = 0;
      for (let i = 0; i < n - 1; i++) {
          for (let j = 0; j < n - i - 1; j++) {
              comparisons++;
              if ((order === 'ascending' && arr[j] > arr[j + 1]) || (order === 'descending' && arr[j] < arr[j + 1])) {
                  this.swap(arr, j, j + 1);
                  exchanges++;
              }
          }
      }
      console.log(`Bubble Sort (${order}):`, arr, "Comparisons:", comparisons, "Exchanges:", exchanges);
  },

  // (мінімальних елементів)
  selectionSort: function(arr, order) {
      const n = arr.length;
      let comparisons = 0;
      let exchanges = 0;
      for (let i = 0; i < n - 1; i++) {
          let minIndex = i;
          for (let j = i + 1; j < n; j++) {
              comparisons++;
              if ((order === 'ascending' && arr[j] < arr[minIndex]) || (order === 'descending' && arr[j] > arr[minIndex])) {
                  minIndex = j;
              }
          }
          if (minIndex !== i) {
              this.swap(arr, i, minIndex);
              exchanges++;
          }
      }
      console.log(`Selection Sort (${order}):`, arr, "Comparisons:", comparisons, "Exchanges:", exchanges);
  },

  // (вставки)
  insertionSort: function(arr, order) {
      const n = arr.length;
      let comparisons = 0;
      let exchanges = 0;
      for (let i = 1; i < n; i++) {
          let current = arr[i];
          let j = i - 1;
          while (j >= 0 && ((order === 'ascending' && arr[j] > current) || (order === 'descending' && arr[j] < current))) {
              comparisons++;
              arr[j + 1] = arr[j];
              j--;
              exchanges++;
          }
          arr[j + 1] = current;
      }
      console.log(`Insertion Sort (${order}):`, arr, "Comparisons:", comparisons, "Exchanges:", exchanges);
  },

  shellSort: function(arr, order) {
      const n = arr.length;
      let comparisons = 0;
      let exchanges = 0;
      for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
          for (let i = gap; i < n; i++) {
              let temp = arr[i];
              let j = i;
              while (j >= gap && ((order === 'ascending' && arr[j - gap] > temp) || (order === 'descending' && arr[j - gap] < temp))) {
                  comparisons++;
                  arr[j] = arr[j - gap];
                  j -= gap;
                  exchanges++;
              }
              arr[j] = temp;
          }
      }
      console.log(`Shell Sort (${order}):`, arr, "Comparisons:", comparisons, "Exchanges:", exchanges);
  },

  quickSort: function(arr, order, low = 0, high = arr.length - 1) {
      if (low < high) {
          const partitionIndex = this.partition(arr, order, low, high);
          this.quickSort(arr, order, low, partitionIndex - 1);
          this.quickSort(arr, order, partitionIndex + 1, high);
      }
  },

  partition: function(arr, order, low, high) {
      const pivot = arr[high];
      let i = low - 1;
      for (let j = low; j < high; j++) {
          if ((order === 'ascending' && arr[j] < pivot) || (order === 'descending' && arr[j] > pivot)) {
              i++;
              this.swap(arr, i, j);
          }
      }
      this.swap(arr, i + 1, high);
      return i + 1;
  }
};

export default Sorting;