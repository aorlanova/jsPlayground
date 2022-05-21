let list1 = [1,2,4] 
let list2 = [1,3,4]

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

  for (let i = 0; i < longestList.length; i++) {

    if (i < shortestList.length) {

      if (l1[i] <= l2[i]) {

	fullArr.push(l1[i]);
	fullArr.push(l2[i]);

      } else {

	fullArr.push(l2[i]);
	fullArr.push(l1[i]);

      }

    } else {

      fullArr.push(longestList[i]);

    }     
  
  }

console.log(fullArr);

}

mergeTwo(list1, list2);
