let testSubject = "[{}]{[}]";
let openStoreCurly = [];
let openStoreRound = [];
let openStoreSquare = [];
let closeStoreCurly = [];
let closeStoreRound = [];
let closeStoreSquare = [];

function validParenth(parenth) {

  for (let i = 0; i < parenth.length; i++) {

    if (parenth[0] == "]" || parenth[0] == "}" || parenth[0] == ")") {

      console.log("Invalid Parenth");
      break;

    } else {

      if (parenth[i] == "{") {

	openStoreCurly.push(i);

      } else if (


  }

}


validParenth(testSubject);
