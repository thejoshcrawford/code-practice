function isValid(code) {

  // Determine if the input code is valid
  let letterStack = []
  // console.log(code)
  
  
  for(const letter of code) {
    if (letter === '(' || letter === '[' || letter === '{')  {
      letterStack.push(letter)
    }
    
    // if (letter === ')' || letter === ']' || letter === '}')  {
    //   letterStack.push(letter)
    // }
    
    // console.log('letter', letter)
    if (letter === ')' || letter === ']' || letter === '}')  {
      if (letterStack.length === 0) {
        return false
      }
      let popped = letterStack.pop()
      // console.log('popped', popped)
      
      if (letter === ')' && popped != '(') {
        return false
      }
      
      if (letter === ']' && popped != '[') {
        return false
      }
      
      if (letter === '}' && popped != '{') {
        return false
      }
    }
    
    
    
    
    
    // console.log(letterStack)
    // console.log(letterStack.length)
  }
  
  if (letterStack.length > 0) {
    return false
  }

  return true;
}


















// Tests

let desc = 'valid short code';
assertEqual(isValid('()'), true, desc);

desc = 'valid longer code';
assertEqual(isValid('([]{[]})[]{{}()}'), true, desc);

desc = 'mismatched opener and closer';
assertEqual(isValid('([][]}'), false, desc);

desc = 'missing closer';
assertEqual(isValid('[[]()'), false, desc);

desc = 'extra closer';
assertEqual(isValid('[[]]())'), false, desc);

desc = 'empty string';
assertEqual(isValid(''), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}