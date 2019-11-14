
do {
  var input = prompt("De quoi veux-tu parler avec l'acné-bot ?")
  switch(true) {
    case (input.includes("Fortnite")):
      console.log("on s'fait une partie soum-soum ?");
      break;
    case (input[input.length -1] == "?"):
      console.log("Ouais Ouais...");
      break;
    case (input == ""):
      console.log("t'es en PLS ?")
      break;
    case (input.toUpperCase() == input):
      console.log("Pwaaaaa, calme-toi, la ...");
      break;
    default:
      console.log("balek");
  }
} while(input.includes("Fortnite") == false);