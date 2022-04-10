/*  Solution to: https://leetcode.com/problems/two-sum/
program accepts a target integer argument and an array of integers. 
The program returns an array of two integers in the array that can add 
to get the target. */

const numArr = [3,1,3,5,8,4,0];

let addTo = function indice(target, listNum) {

  for (i = 0; i <= (listNum.length - 1); i++) {

    for (w = 0; w <= (listNum.length - 1); w++) {

      if ((listNum[i] + listNum[w]) == target){

        return ([[listNum[i]],[listNum[w]]]);

      }
    } 
  }
}

console.log(addTo(4,numArr));
