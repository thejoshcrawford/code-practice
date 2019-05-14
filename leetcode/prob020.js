/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for(let letter of s) {
        if (letter === "(" || letter === '{' || letter === '[' ) {
            stack.push(letter);
        }  else {
            // console.log(stack);
            if (stack.length <= 0) return false;
            let popped = stack.pop();
            if (popped === '(' && letter != ')') {
                return false
            }
            if (popped === '{' && letter != '}') {
                return false
            }
            if (popped === '[' && letter != ']') {
                return false
            }
        } 
    }
    
    if (stack.length != 0) return false;
    
    return true;
};