let list1 = [1,2,4] 
let list2 = [1,3,3,4]
let list3 = [5,5,5,5,5];
let bound = 0;
let meter = 0;

function mergeTwo(l1,l2) {

  let longestList = [];
  let shortestList = [];
  let fullArr = [];

  if (l1.length >= l2.length) {

    longestList = l1;
    shortestList = l2;

  } else {

    longestList = l2;
    shortestList = l1;

  }

  for (let i = 0;; i++) {

    if (i < shortestList.length) {

      if (l1[i] == l2[i]) {

	      fullArr.push(l1[i]);
      	fullArr.push(l2[i]);


      } else if (l1[i] > l2[i])  {

	      fullArr.push(l2[i]);
	
      } else if (l2[i]> l1[i]){
	      fullArr.push(l1[i]);
      }

    } else if (l1[i-(shortestList.length-1)] <= fullArr[i-(shortestList.length-1)]) {

      fullArr.splice((i-(shortestList.length-1)), 0, l1[i-(shortestList.length-1)]);

    } else if(l2[i-(shortestList.length-1)] <= fullArr[i-(shortestList.length-1)]) {

      fullArr.splice((i-(shortestList.length-1)), 0, l2[i-(shortestList.length-1)]);   
  
  } else if(l2[i-(shortestList.length-1)] >= fullArr[fullArr.length - 1]) {

    fullArr.splice((fullArr.length - 1), 0, l2[i-(shortestList.length-1)]);   

} else if(l1[i-(shortestList.length-1)] >= fullArr[fullArr.length - 1]) {

  fullArr.splice((fullArr.length - 1), 0, l1[i-(shortestList.length-1)]);   

}else {

    break;

  }
}

console.log(fullArr);

}

mergeTwo(list1, list2);
mergeTwo(list1, list3);
