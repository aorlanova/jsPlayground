/* solution to: https://leetcode.com/problems/longest-substring-without-repeating-characters/ 
 program accepts a string object as an argument and returns a string
of the longest possible substring that has no repeating characters
 and the length of that string.
*/

let strOne = "abaowl";
let strTwo = "aaauwneldhwoeeee";
let total = 0;
let store = [];
let highestTotal = 0;
let longestStr = [];

// method finds the longest possible substring with no repeating characters. 
function findChar(x) {

  for (i = 0; i < x.length; i++) {

    for (b = i; b < x.length; b++) {

      //checks if array storing non-repeating elements includes current character.
      if (!store.includes(x[b])) {

	//adds non-repeating character to storage array and updates length.
        store.push(x[b]);
	total = store.length;

      } else {

	// a repeating array was found,check if the new total is higher than previous.
	if (total > highestTotal) {
	
	  // new total becomes highest total.
          highestTotal = total;
	  // longestStr is updated to become the storage array.
	  longestStr = store.toString();

	}
	
	// store is cleared. Break out of the inner loop.
	store = [];
	break;

      }

    }

  }

console.log(highestTotal);
console.log(longestStr);

}

findChar(strOne);  //returns 5 b,a,o,w,l
findChar(strTwo); //returns 8 a,u,w,n,e,l,d,h
