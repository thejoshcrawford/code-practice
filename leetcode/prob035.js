/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    //O(n)
//     for(let i = 0; i < nums.length; i++) {
//         if (nums[i] >= target) {
//             return i;
//         }
//     }
    
//     return nums.length; 
    
    //O(log n) 
    function searchHalf(nums, target, start, end) {
        // console.log(nums + ' ' + target + ' ' + start + ' ' + end);
        if (target <= nums[start]) return start;
        if (target == nums[end]) return end;
        if (target > nums[end]) return end+1;
        
        let middle = Math.floor((end + start) / 2);
        if (target <= nums[middle]) {
            return searchHalf(nums, target, start, middle);
        } else {
            return searchHalf(nums, target, middle+1, end);
        }
        
    }
    
    return searchHalf(nums, target, 0, nums.length -1);
    
};