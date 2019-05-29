/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    
    let countAndSay = '1';
    
    for(let i = 0; i < n; i++) {
        
        if (i === 0) continue; // skip the first one, the only odd #
        
        let newCountAndSay = '';
        while (countAndSay.length > 0) {
            // grab all the similar numbers
            const letter = countAndSay[0];
            let count = 0;
            while(countAndSay[0] === letter) {
                count++;
                countAndSay = countAndSay.slice(1);
            }
            
            // build 
            newCountAndSay += count + letter;
        }
        
        countAndSay = newCountAndSay;
    
    }
    return countAndSay;
    
};