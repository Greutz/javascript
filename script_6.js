let arn1 = "CCGUCGUUGCGCUACAGC"
let arn2 = "CCUCGCCGGUACUUCUCG"

arnConvert = []
arnConvert2 = []
serine = ["UCU","UCC","UCA","UCG","AGU","AGC"]
proline = ["CCU", "CCC", "CCA", "CCG"]
leucine = ["UUA", "UUG"]
phenylalanine = ["UUU", "UUC"]
arginine = ["CGU","CGC","CGA","CGG","AGA","AGG"]
tyrosine = ["UAU", "UAC"]

let n = 0
do {
  arnConvert.push(arn1.substr(n, 3))
  arnConvert2.push(arn2.substr(n, 3))
  n += 3;
} while(arnConvert.length < (arn1.length / 3))


switch(true) {
  case serine.some(v => arnConvert.includes(v)) || serine.some(v => arnConvert2.includes(v)):
      serine.forEach(function(arn){
        if(arnConvert.indexOf(arn) >= 0) {
            arnConvert.splice(arnConvert.indexOf(arn), 1, "Sérine");
        };
        if(arnConvert2.indexOf(arn) >= 0) {
          arnConvert2.splice(arnConvert2.indexOf(arn), 1, "Sérine");
      };
      });
  case proline.some(v => arnConvert.includes(v)) || proline.some(v => arnConvert2.includes(v)):
      proline.forEach(function(arn){
        if(arnConvert.indexOf(arn) >= 0) {
            arnConvert.splice(arnConvert.indexOf(arn), 1, "Proline");
        };
        if(arnConvert2.indexOf(arn) >= 0) {
          arnConvert2.splice(arnConvert2.indexOf(arn), 1, "Proline");
      };
      });
  case leucine.some(v => arnConvert.includes(v)) || leucine.some(v => arnConvert2.includes(v)):
      leucine.forEach(function(arn){
        if(arnConvert.indexOf(arn) >= 0) {
            arnConvert.splice(arnConvert.indexOf(arn), 1, "Leucine");
        };
        if(arnConvert2.indexOf(arn) >= 0) {
          arnConvert2.splice(arnConvert2.indexOf(arn), 1, "Leucine");
      };
      });
  case phenylalanine.some(v => arnConvert.includes(v)) || phenylalanine.some(v => arnConvert2.includes(v)):
      phenylalanine.forEach(function(arn){
        if(arnConvert.indexOf(arn) >= 0) {
            arnConvert.splice(arnConvert.indexOf(arn), 1, "Phénylalaline");
        };
        if(arnConvert2.indexOf(arn) >= 0) {
          arnConvert2.splice(arnConvert2.indexOf(arn), 1, "Phénylalaline");
      };
      });
  case arginine.some(v => arnConvert.includes(v)) || arginine.some(v => arnConvert2.includes(v)):
      arginine.forEach(function(arn){
        if(arnConvert.indexOf(arn) >= 0) {
            arnConvert.splice(arnConvert.indexOf(arn), 1, "Arginine");
        };
        if(arnConvert2.indexOf(arn) >= 0) {
          arnConvert2.splice(arnConvert2.indexOf(arn), 1, "Arginine");
      };
      });
  case tyrosine.some(v => arnConvert.includes(v)) || tyrosine.some(v => arnConvert2.includes(v)):
      tyrosine.forEach(function(arn){
        if(arnConvert.indexOf(arn) >= 0) {
            arnConvert.splice(arnConvert.indexOf(arn), 1, "Tyrosine");
        };
        if(arnConvert2.indexOf(arn) >= 0) {
          arnConvert2.splice(arnConvert2.indexOf(arn), 1, "Tyrosine");
      };
      });
      break;
}

console.log(arn1)
console.log(arnConvert)
console.log(arnConvert.join("-"))

console.log(arn2)
console.log(arnConvert2)
console.log(arnConvert2.join("-"))