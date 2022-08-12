let digits = [9];
let plusOne = 0;

if (digits[digits.length-1] == 9) {
  for (let i = 0; i < digits.length; i++) {

   plusOne += ((digits[i]) * (Math.pow(10, digits.length - i - 1)));  

  }

  plusOne++
  digits = Array.from(String(plusOne), Number);
  console.log(digits);

 } else {

   let addLast = (digits[digits.length-1]) + 1;
   digits.splice((digits.length-1), 1, addLast);

 }

console.log(digits);