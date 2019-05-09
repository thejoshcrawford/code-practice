/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // for(var i = 0; i<nums.length - 1; i++) {
    //     for (var j = 1; j<nums.length; j++) {
    //         if (i === j) continue;
    //         if (nums[i] + nums[j] === target) {
    //             return [i,j];
    //         }
    //     }
    // }
    const map = [];
    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    //console.log(map);
    for (var j = 0; j<nums.length; j++) {
        var possibleMatch = target - nums[j];
        
        if (map[possibleMatch] && map[possibleMatch] != j) return [j, map[possibleMatch]];
        if (typeof [possibleMatch] === 'undefined') continue;
        if (map[possibleMatch] === j) continue;
        //return [possibleMatch, j]
    }
};