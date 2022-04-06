
let mysteryMap = new Map([
[1, 69],
[6, 100], 
[7,500],
[2,60],
[3,80]
]);

let tries = 0;
let myst = null;

function generate(min, max) {

  for (let i = null; !mysteryMap.has(i); tries++){

    i = Math.floor((Math.random()*(max+1)))+(min);
    
    if (mysteryMap.has(i)) {

      myst = i;

    }

  }

  console.log("the mystery number generated was: " + myst + " and its value is: " + mysteryMap.get(myst));
  console.log("it only took this many tries to get it: " + tries);


}

generate(0,100);
