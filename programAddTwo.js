let partOne = [1,2,3]; 
let partTwo = [9,0,0,0,0,1];
let totalOne = 0;
let totalTwo = 0;


function twoSum(x,y) {

  for (let i = 0; i < x.length; i++) {

    totalOne += (x[i] * (Math.pow(10,(x.length-(i+1)))));


  }

  for (let b = 0; b < y.length; b++) {

    totalTwo += (y[b] * (Math.pow(10, (y.length - (b+1)))));

  }


console.log(totalOne + totalTwo);


}

twoSum(partOne, partTwo);