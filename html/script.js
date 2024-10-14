let country = "Tchad";
let continent = "africa";
let population = 19;
console.log(country);
console.log(continent);
console.log(population);
let islsland = false;
let language;
console.log(typeof islsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
language = "tchadienne";
country = "tchad";
continent = "africa";
console.log(population / 2);
population++;
console.log(population);
console.log(population < 6);
console.log(population < 33);
console.log(
  country +
    "is in" +
    continent +
    ",and its" +
    population +
    "million people speak" +
    language
);
if (population < 33) {
  console.log(` la population du ${country} est inferieur a la moyenne`);
} else {
  console.log(`la population du ${country} est superieur a la moyenne`);
}

console.log(
  `${country} is in ${continent} ,and its ${population} million people speak ${language}`
);
// const numNeighbours = Number(prompt("combien de pays frontaliers a mon pays?"));

// if (numNeighbours === 1) {
//   console.log("un seul pays frontalier");
// } else if (numNeighbours > 1) {
//   console.log("il ya plus d'un pays frontalier");
// } else {
//   console.log("il n'y a pas de pays frontalier");
// }

if (language === "english" && population < 50 && !islsland) {
  console.log("tu devrais vivre dans ce pays");
} else {
  console.log("tu ne peux pas vivre dans ce pays");
}

const day = "janvier";
switch (day) {
  case "janvier":
    console.log("c'est un mois");
    break;
  case "monday":
    console.log("preparer un cours");
    break;
  case "tuesday":
    console.log("preparer une video");
    break;
  case "wednesday":
  case "thursday":
    console.log("Ecrire du code");
    break;
  case "friday":
    console.log("enregistrer une video");
    break;
  case "saturday":
  case "sunday":
    console.log("profiter du week-end");
    break;
  default:
    console.log("pas un jour valide");
}

switch (language) {
  case "chinese":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th modt spoken language");
    break;
  default:
    console.log("Great language too : D");
}

if (population > 33) {
  console.log("la population est au dessus");
} else {
  console.log("la population est en dessous");
}
console.log(
  `la population est ${population > 33 ? "au dessus" : "en dessous"}`
);
let facture = 275;
let tip = facture > 50 || facture < 300 ? facture * 0.15 : facture * 0.2;
console.log(
  `la facture est de ${facture} le pourboire est de ${tip}, et le totale es de ${
    facture + tip
  }`
);
