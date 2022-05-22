let dupe = [1,2,2,3,4,5,6,6,1];
let moop = []

function removeDupes(l1) {

  for (let i = 0; i < l1.length; i++) {
      
      if (!moop.includes(l1[i])) {

	moop.push(l1[i]);	

      }
    }
  

console.log(moop)
moop = [];
}


removeDupes(dupe);
