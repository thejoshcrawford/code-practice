function findRectangularOverlap(rect1, rect2) {

  // Calculate the overlap between the two rectangles
  rect1['rightX'] = rect1.leftX + rect1.width
  rect1['topY'] = rect1.bottomY + rect1.height
  
  rect2['rightX'] = rect2.leftX + rect2.width
  rect2['topY'] = rect2.bottomY + rect2.height
  
  overlap = { leftX: null, bottomY: null, width: null, height: null };
  
  // x axis
  // is there overlap
  if (!(rect1['rightX'] > rect2['leftX'] && rect2['rightX'] > rect1['leftX'])){
    return { leftX: null, bottomY: null, width: null, height: null }
  }
  
  // two center points
  let centerPoints = [rect1['leftX'], rect1['rightX'], rect2['leftX'], rect2['rightX']]
    .sort()
    .slice(1,3)
  overlap['leftX'] = centerPoints[0]
  overlap['width'] = centerPoints[1] - centerPoints[0]
   
  if (!(rect1['topY'] > rect2['bottomY'] && rect2['topY'] > rect1['bottomY'])){
    return { leftX: null, bottomY: null, width: null, height: null }
  }
  
  centerPoints = [rect1['bottomY'], rect1['topY'], rect2['bottomY'], rect2['topY']]
    .sort().slice(1,3)
  overlap['bottomY'] = centerPoints[0]
  overlap['height'] = centerPoints[1] - centerPoints[0]

  return overlap
}


















// Tests

let desc = 'overlap along both axes';
let rect1 = { leftX: 1, bottomY: 1, width: 6, height: 3 };
let rect2 = { leftX: 5, bottomY: 2, width: 3, height: 6 };
let actual = findRectangularOverlap(rect1, rect2);
let expected = { leftX: 5, bottomY: 2, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = 'one rectangle inside another';
rect1 = { leftX: 1, bottomY: 1, width: 6, height: 6 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 3, bottomY: 3, width: 2, height: 2 };
assertObjectEquals(actual, expected, desc);

desc = 'both rectangles the same';
rect1 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
rect2 = { leftX: 2, bottomY: 2, width: 4, height: 4 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: 2, bottomY: 2, width: 4, height: 4 };
assertObjectEquals(actual, expected, desc);

desc = 'touch on horizontal edge';
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 2, bottomY: 6, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'touch on vertical edge';
rect1 = { leftX: 1, bottomY: 2, width: 3, height: 4 };
rect2 = { leftX: 4, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'touch at a corner';
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 3, bottomY: 3, width: 2, height: 2 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

desc = 'no overlap';
rect1 = { leftX: 1, bottomY: 1, width: 2, height: 2 };
rect2 = { leftX: 4, bottomY: 6, width: 3, height: 6 };
actual = findRectangularOverlap(rect1, rect2);
expected = { leftX: null, bottomY: null, width: null, height: null };
assertObjectEquals(actual, expected, desc);

function assertObjectEquals(a, b, desc) {
  const objectA = JSON.stringify(a, Object.keys(a).sort());
  const objectB = JSON.stringify(b, Object.keys(b).sort());
  if (objectA !== objectB) {
    console.log(`${desc} ... FAIL: ${objectA} != ${objectB}`)
  } else {
    console.log(`${desc} ... PASS`);
  }
}