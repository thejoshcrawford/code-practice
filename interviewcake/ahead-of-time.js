// Implement methods to track the max, min, mean, and mode

class TempTracker {
  
  constructor() {
    this.temps = []
    this.max = 0
    this.min = 999
    this.total = 0
    this.mean = null
    this.mode = 0
    this.tempCount = {}
  }
  
  insert(temperature) {
    this.temps.push(temperature)
    
    if (temperature > this.max){
      this.max = temperature
    }
    if (temperature < this.min){
      this.min = temperature
    }
    
    this.total += temperature
    this.mean = this.total/this.temps.length
    
    this.tempCount[temperature] = 
      this.tempCount[temperature] ? this.tempCount[temperature] + 1 : 1
      
      // console.log('map[this.temps[i]]', map[this.temps[i]])
      // console.log('map[this.mode]', map[this.mode])
      // console.log('this.mode', this.mode)
    if (this.tempCount[temperature] > this.tempCount[this.mode] || !this.tempCount[this.mode]) {
      // console.log('insie')
      this.mode = temperature
    }
    
  }

  getMax() {
    return this.temps[this.temps.length - 1];
  }

  getMin() {
    return this.temps[0];
  }

  getMean() {
    return this.mean;
  }

  getMode() {
    return this.mode;
  }
}

















// Tests

const t = new TempTracker();

// Step 1
t.insert(50);
assertEquals(t.getMax(), 50, 'step 1 - max');
assertEquals(t.getMin(), 50, 'step 1 - min');
assertEquals(t.getMean(), 50, 'step 1 - mean');
assertEquals(t.getMode(), 50, 'step 1 - mode');

// Step 2
t.insert(80);
assertEquals(t.getMax(), 80, 'step 2 - max');
assertEquals(t.getMin(), 50, 'step 2 - min');
assertEquals(t.getMean(), 65, 'step 2 - mean');
assertEquals(t.getMode() === 50 || t.getMode() === 80, true, 'step 2 - mode');

// Step 3
t.insert(80);
assertEquals(t.getMax(), 80, 'step 3 - max');
assertEquals(t.getMin(), 50, 'step 3 - min');
assertEquals(t.getMean(), 70, 'step 3 - mean');
assertEquals(t.getMode(), 80, 'step 3 - mode');

// Step 4
t.insert(30);
assertEquals(t.getMax(), 80, 'step 4 - max');
assertEquals(t.getMin(), 30, 'step 4 - min');
assertEquals(t.getMean(), 60, 'step 4 - mean');
assertEquals(t.getMode(), 80, 'step 4 - mode');

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}