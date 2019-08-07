/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


var findKthLargest = function (nums, k) {
  //Sort array by desc order, then find number at index k
  return nums.sort( (a,b) => b - a)[k - 1]

}




// Heap solution

// var findKthLargest = function (nums, k) {

//   let h = new MaxHeap();
//   for( let i = 0; i < nums.length; i ++){
//     h.insert(nums[i]);
//   }

//   for( let j = k - 1; j > 0; j --){
//     h.deleteMax();
//   }

//   return h.array[1];

// };

// class MaxHeap {
//   constructor(val) {
//     this.array = [];
//   }

//   getParent(idx) {
//     if (idx <= 0) return null;
//     return Math.floor(idx / 2);
//   }

//   getLeftChild(idx) {
//     return idx / 2;
//   }

//   getRightChild(idx) {
//     return idx / 2 + 1;
//   }

//   siftUp(idx) {
//     let parent = getParent(idx);
//     while (this.array[parent] < this.array[idx] && parent > 0) {
//       [this.array[parent], this.array[idx]] = [this.array[idx], this.array[parent]]
//       idx = parent;
//       parent = getParent(parent);
//     }
//   }

//   siftDown(idx) {

//     if (getLeftChild > this.array.length) return;

//     let leftIdx = this.getLeftChild(idx);
//     let rightIdx = this.getRightChild(idx);
//     let leftVal = this.array[leftIdx];
//     let rightVal = this.array[rightIdx];
//     let current = this.array[idx];
//     let swap = rightVal === undefined || leftVal > rightVal ? leftIdx : rightIdx;

//     while (swap < this.array.length && this.array[idx] < this.array[swap]) {
//       [this.array[idx], this.array[swap]] = [this.array[swap], this.array[idx]];
//       idx = swap;
//       leftIdx = this.getLeftChild(idx);
//       rightIdx = this.getRightChild(idx);
//       leftVal = this.array[leftIdx];
//       rightVal = this.array[rightIdx];
//       swap = rightVal === undefined || leftVal > rightVal ? leftIdx : rightIdx;
//     }
//   }

//   insert(val) {
//     this.array.push(val);
//     this.siftUp(this.array.length - 1);

//   }

//   deleteMax() {
//     if (this.array.length === 1) return null;
//     let max = this.array[1];
//     let last = this.array.pop();
//     if (this.array.length !== 1) this.array[1] = last;
//     this.siftDown(1);
//     return max;
//   }
  

// }
