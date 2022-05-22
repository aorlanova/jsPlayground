
let list1 = [1,2,4] 
let list2 = [1,3,3,4]
let list3 = [5,5,5,5,5];
let fullArr = [];
let longestList = [];
let shortestList = [];

function mergeTwo(l1,l2) {

  if (l1.length >= l2.length) {

    longestList = l1;
    shortestList = l2;

  } else {

    longestList = l2;
    shortestList = l1;

  }


    for (let i = 0;i < longestList.length;i++) {


    }

    console.log(shortestList);

}

mergeTwo(list1, list2);
mergeTwo(list1, list3);