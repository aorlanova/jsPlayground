/* Solution to:https://leetcode.com/problems/trapping-rain-water/
Given n non-negative integers representing an elevation map where the 
width of each bar is 1, compute how much water it can trap after raining.*/

let testHeight = [4,2,0,3,2,5];
let height = [4,0,0,1,9,2,3];
let test2 = [0,1,0,2,1,0,1,3,2,1,2,1];
let rainWater = 0;
let lowestBlock = 0;
let totalBlockBefore = 0;
let totalBlockAfter = 0;

function trappedWater (x) {

  //computes area of elevation map before rainfall.
  for (i = 0; i < x.length; i++) {

    totalBlockBefore += (x[i]);

  }

  console.log(totalBlockBefore);

  // itterates over leftmost bound.
  for (j = 0; j < x.length; j++) {

    //itterates over rightmost bound.
    for (k = j + 2; k < x.length; k++) {

      //stores lowest of the rightmost and leftmost bound.
      if (x[k] < x[j]) {

	lowestBlock = x[k];

      } else {

	lowestBlock = x[j];

      }

      //itterates over every index in-between leftmost and rightmost bound.
      for (l = j+1; l < k; l++) {

	//if either bound is lower than the intermediete area, this area is "filled" with rainwater.
	if (x[l] < lowestBlock) {

	  x[l] = (lowestBlock);

	}
      }
    }
  }

  // computes total area of non-blank space after rainfall.
  for (m = 0; m < x.length; m++) {

    totalBlockAfter += (x[m]);

  }

  rainWater = (totalBlockAfter - totalBlockBefore);
  console.log(totalBlockAfter);
  console.log("Your total rainwater collected is: " +rainWater);

  totalBlockAfter = 0;
  totalBlockBefore = 0;

}


trappedWater(testHeight);
trappedWater(test2);
