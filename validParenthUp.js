let testSubject = "[{}]{[}]";
let openStore = [];
let closeStore = [];
let totalOpen = 0;
let totalClose = 0;
let validPairs = 0;
let itterations = 0;
let validRuns = 0;

let closeStoreSquare = [];

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

    if (openStore.length == closeStore.length) {

      for (l = 0; l < closeStore.length; l++) {

        if (closeStore[l] == l && closeStore[l] != 0)  {

          totalClose++

        } else if (openStore[l] == l && totalOpen != totalClose) {

          totalOpen++

        } else if (totalOpen == totalClose) {
          itterations ++;
          for (j = 0; j < totalClose; j++) {

            if (parenth[j] == "(" && parenth[l] == ")") {

              validPairs++

            } else if (parenth[j] == "{" && parenth[l] == "}") {

              validPairs++

          } else if (parenth[j] == "[" && parenth[l] == "]") {

            validPairs++

        }

      } 

      if (validPairs == totalOpen) {

        validRuns ++
        totalClose = 0;
        totalOpen = 0;


      }
      
    }else {

        console.log("invalid Parenth");

      }

    }

    } else {

      console.log("invalid parenth");

    }

    if (validRuns == itterations) {

      console.log("EXTREME VALIDITY");

    }

}



validParenth(testSubject);
