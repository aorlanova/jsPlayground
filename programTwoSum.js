const numArr = [3,1,3,5,8,4,0];


let mom = function indice(target, listNum) {

  for (i = 0; i <= (listNum.length - 1); i++) {

    for (w = 0; w <= (listNum.length - 1); w++) {

      if ((listNum[i] + listNum[w]) == target){

      return ([[listNum[i]],[listNum[w]]]);

      }

    } 

  }



}

console.log(mom(4,numArr));
