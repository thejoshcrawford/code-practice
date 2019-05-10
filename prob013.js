/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let value = 0;
    
    let index = s.indexOf('IV');
    if (index > -1) {
        value += 4;
        s = s.replace('IV', '');    
    }
    
    index = s.indexOf('IX');
    if (index > -1) {
        value += 9;
        s = s.replace('IX', ''); 
    }
    
    index = s.indexOf('XL');
    if (index > -1) {
        value += 40;
        s = s.replace('XL', '');    
    }
    
    index = s.indexOf('XC');
    if (index > -1) {
        value += 90;
        s = s.replace('XC', '');    
    }
    
    index = s.indexOf('CD');
    if (index > -1) {
        value += 400;
        s = s.replace('CD', '');    
    }
    
    index = s.indexOf('CM');
    if (index > -1) {
        value += 900;
        s = s.replace('CM', '');    
    }
    
    function getOneNumeralValue(fullNumeral, charNumeral, numeralValue) {
        var accumulator = 0;
        
        for(let i = 0; i < fullNumeral.length; i++) {
            if (fullNumeral.charAt(i) === charNumeral) {
                console.log(fullNumeral + ' ' + charNumeral + ' ' + numeralValue + ' ' + accumulator)
                accumulator += numeralValue;
            }
        } 
        
        return accumulator;
    }
    
    
    value += getOneNumeralValue(s, 'I', 1);
    value += getOneNumeralValue(s, 'V', 5);
    value += getOneNumeralValue(s, 'X', 10);
    value += getOneNumeralValue(s, 'L', 50);
    value += getOneNumeralValue(s, 'C', 100);
    value += getOneNumeralValue(s, 'D', 500);
    value += getOneNumeralValue(s, 'M', 1000);
    
    return value;
};