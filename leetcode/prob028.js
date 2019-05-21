/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle === '') return 0;
    
//     let needleHead = 0;
    
//     for(let i = 0; i < haystack.length; i++) {
//         // console.log('n:' + needleHead + ' ' + needle[needleHead] + ' h:' + i + ' ' + haystack[i])
//         if (needle[needleHead] === haystack[i]) {
//             needleHead++;
//             if (needleHead === needle.length) {
//                 return i - needleHead + 1;
//             }
//         } else if (needleHead > 0) {
//             // console.log("reset i: ")
//             i = i - needleHead;
//             needleHead = 0;
//         }
//     }
    
//     return -1;
    
    // better
    let sets = {};
    for(let i = 0; i < haystack.length - needle.length + 1; i++) {
        // console.log(sets[haystack.slice(i, i+needle.length)])
        if (sets[haystack.slice(i, i+needle.length)] == undefined) {
            sets[haystack.slice(i, i+needle.length)] = i;
        }
    }
    
    console.log(sets);
    return sets[needle] >= 0 ? sets[needle] : -1;
};