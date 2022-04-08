

let strOne = "abaowl";
let strTwo = "aaauwneldhwoeeee";
let total = 0;
let store = [];
let highestTotal = 0;
let longestStr = [];
let cat = 0;

function findChar(x) {

for (i = 0; i < x.length; i++) {

  for (b = i; b < x.length; b++) {

    if (!store.includes(x[b])) {

        store.push(x[b]);
	total = store.length;


    } else {

	if (total > highestTotal) {

          highestTotal = total;
	  longestStr = function makeString() { 

	    for (c = 0; c < store.length; c++) {

	      console.log(store[c]);

	    }

	  }

	  longestStr()
	  
	}
	
	store = [];
	break;

    } 


  }  

}

console.log(highestTotal);
console.log(longestStr);

}

findChar(strOne);
findChar(strTwo);
