function reverseWords(message) {
  var front = 0;
  
  reverseWord(front, message.length);
  
  for(let i = 0; i<message.length; i++){
    if (message[i] === ' ') {
      reverseWord(front, i);
      front = i+1;
    }
    if(i === message.length-1) {
      reverseWord(front, i+1);      
    }
  }

  
  // Decode the message by reversing the words
  function reverseWord(front, rear) {

    var length = rear - front;

    if (length < 2) {
      return;
    }
  
    for(let i = 0; i<length/2; i++) {
      let temp = message[front + i];
      //console.log(temp); 
      message[front + i] = message[front+length-1-i];
      message[front+length-1-i] = temp;
    }
  }
  


}

