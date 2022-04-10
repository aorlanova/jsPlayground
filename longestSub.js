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

function findChar(x) {

  for (i = 0; i < x.length; i++) {

    for (b = i; b < x.length; b++) {

      if (!store.includes(x[b])) {

        store.push(x[b]);
	total = store.length;

      } else {

	if (total > highestTotal) {

          highestTotal = total;
	  longestStr = store.toString();

	}

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
