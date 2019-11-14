var answer2 = prompt("De quel nombre veux-tu calculer la factorielle ?");

let array = [];

function facto(arr) {
  for (let j = arr; j > 0; j--){
      array.push(j);
  }
  return multiply();
}

function multiply() {
  var sum = 1;
  for (var i = 0; i < array.length; i++) {
      sum = sum * array[i];
  }
  return sum;
}


console.log(facto(answer2))