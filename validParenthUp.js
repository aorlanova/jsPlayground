let testSubject2 = "[[[]]]{{}}";
let openStore = [];
let closeStore = [];
let totalOpen = 0;
let totalClose = 0;
let validPairs = 0;

function validParenth(parenth) {

  for (let i = 0; i < parenth.length; i++) {

    if (parenth[0] == "]" || parenth[0] == "}" || parenth[0] == ")") {

      console.log("Invalid Parenth");
      break;

    } else if (parenth[i] == "]" || parenth[i] == "}" || parenth[i] == ")") {

      closeStore.push(i);
       
  } else {

    openStore.push(i);

  }
}

console.log(openStore);
console.log(closeStore);

    if (openStore.length == closeStore.length) {

      for (l = 0; l < closeStore.length; l++) {

        if (closeStore[l] == l && closeStore[l] != 0)  {

          totalClose++

        } else if (openStore[l] == l || (totalOpen != totalClose || totalOpen == 0)) {

          totalOpen++

        } 
        
        else if (totalOpen == totalClose && totalOpen != 0) {
          
          for (let j = 0; j < totalClose; j++) {

            if (parenth[j] == "(" && parenth[totalClose-1] == ")") {

              validPairs++
              

            } else if (parenth[j] == "{" && parenth[totalClose-1] == "}") {

              validPairs++
              

          } else if (parenth[j] == "[" && parenth[totalClose-1] == "]") {

            validPairs++
            

        }

      }

      totalClose = 0;
      totalOpen = 0;
      openStore = [];
      closeStore = [];

      } 

    }

    console.log(validPairs);

      if (validPairs == (parenth.length/2)) {
        
        console.log("EXTREME VALIDITY");
      
    } else {

        console.log("invalid Parenth");

      }

    } else {
      console.log("invalid parenth");
    }
}

validParenth(testSubject2);

