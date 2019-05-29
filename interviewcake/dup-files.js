// partial untested solution

function myFunction(arg) {
  const fs = require('fs');
  const options = {withFileTypes: true};
  
  let dirList = [arg];
  let hashList = {};
  
  while(dirList.length > 0) {
    const dir = dirList.pop();
    
    fs.readdir(dir, (err,files) => {
      files.forEach(file => {
        // console.log(file);
        fs.stat(file, (err, stats) => {
          if (stats.isFile()) {
            const hash = getHash(file);
            if (!hashList.hash) {
              hashList.hash = [file];
            } 
            hashList.hash.push(file)
          } else if (start.isDirectory()) {
            dirList.push(file);
          }
        });
      });
    });
  }
  
  let dupList = [];
  for(let hash in hashList) {
    if (hash.length < 2) continue;
    
    if (firstIsOriginal(hash[0], hash[1])) {
      dupList.push([hash[0], hash[1]]);
    } else {
      dupList.push([hash[1], hash[0]]);
    }
  }

  return dupList;
}


// run your function through some test cases here
// remember: debugging is half the battle!
myFunction('.');
