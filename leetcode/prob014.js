b/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    var prefix = '';
    
    if (strs.length === 0) return prefix;
    
    //get length of the shortest string
    var minLength = Number.MAX_VALUE;
    for (let i = 0; i < strs.length; i++) {
        minLength = minLength > strs[i].length ? strs[i].length : minLength;
    }
    
    // compare each letter until they aren't equal
    for (let letterPos = 0; letterPos < minLength; letterPos++) {
        for (let wordPos = 0; wordPos < strs.length; wordPos++) {
            
            // console.log(strs[wordPos] + ' ' + 
            //             letterPos + ' ' + 
            //             strs[0] + ' ' + 
            //             strs[wordPos].charAt(letterPos) + ' ' + 
            //             strs[0].charAt(letterPos) + ' ' + 
            //             (strs[wordPos].charAt(letterPos) !== strs[0].charAt(letterPos)))
            
            if (strs[wordPos].charAt(letterPos) !== strs[0].charAt(letterPos)) {
                return prefix;
            };
        }
        
        prefix += strs[0].charAt(letterPos);
    }
    
    return prefix;
};