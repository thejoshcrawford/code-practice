//  Implement the enqueue and dequeue methods

class QueueTwoStacks {
  constructor() {
    this.stackIn = []
    this.stackOut = []
  }
  
  enqueue(item) {
    this.stackIn.push(item)
  }

  dequeue() {
    if (this.stackOut.length === 0 && this.stackIn.length === 0) {
      throw "error"
    }
    // console.log(this.stackIn)
    // console.log(this.stackOut)
    if (this.stackOut.length > 0) {
      return this.stackOut.pop()
    }
    
    while (this.stackIn.length) {
      this.stackOut.push(this.stackIn.pop())
    }
    
    return this.stackOut.pop()
  }
}


















// Tests
const q = new QueueTwoStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

let desc = 'dequeue #1';
let actual = q.dequeue();
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'dequeue #2';
actual = q.dequeue();
expected = 2;
assertEquals(actual, expected, desc);

q.enqueue(4);

desc = 'dequeue #3';
actual = q.dequeue();
expected = 3;
assertEquals(actual, expected, desc);

desc = 'dequeue #4';
actual = q.dequeue();
expected = 4;
assertEquals(actual, expected, desc);

desc = 'dequeue from empty queue';
const emptyDequeue = () => q.dequeue();
assertThrowsError(emptyDequeue, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}