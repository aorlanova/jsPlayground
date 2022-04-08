
let height = [4,0,0,1,9,2,3];
let highestBlock = 0;
let rainWater = 0;
let lowestBlock = 0;
let totalBlockBefore = 0;
let totalBlockAfter = 0;

function trappedWater (x) {

  for (hi = 0; hi <x.length; hi++) {

    totalBlockBefore += x[hi];

  }

  for (i = 0; i < x.length; i++) {

    for (c = i + 2; c < x.length; c++) {

      lowestBlock = 0;

      if (x[c] < x[i]) {

	lowestBlock = x[c];

      } else {

	lowestBlock = x[i];

      }

      for (b = c-1; b < c; b++) {

	if (x[b] < lowestBlock) {

	  x[b] = (lowestBlock);

	}

      }

  }

  for (n = 0; n < x.length; n++) {

    totalBlockAfter += x[n];

  }

rainWater = (totalBlockAfter - totalBlockBefore);
console.log(rainWater);

}


trappedWater(height);

