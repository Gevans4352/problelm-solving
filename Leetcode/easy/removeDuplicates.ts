//26. Remove Duplicates from Sorted Array
//Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such 
// that each unique element appears only once. The relative order of the elements should be kept the same.

//solution
function removeDuplicates(nums: number[]): number {
    //nums - array of numbers in increasing orde
    //remove the duplicates 
    //unique element appears only once
   // return nums.filter((val, index) => nums.indexOf(val) === index).length;
   let count = 0
   let i = 0
   while(i < nums.length){
   let currentVal = nums[i]
   let duplicateVal = nums[i-1]
   i++
    if(currentVal !== duplicateVal){
        nums[count] = currentVal
        count++
    }
   }
 return count;
};

