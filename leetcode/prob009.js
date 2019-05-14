/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // solution 1
    // if (x<0) return false;
    // if (x<10) return true;
    // let mP = x.toString();
    // for (let i = 0; i < mP.length/2; i++) {
    //     console.log( mP.charAt(i) + " " + mP.charAt(mP.length - i - 1));
    //     if (mP.charAt(i) !== mP.charAt(mP.length - i - 1)) return false;
    // }
    // return true;
    
    // solution 2
    let rev = x.toString().split('').reverse().join('');
    return x == rev;
};
