"use strict";
function loger() {
  console.log("je suis khadidja");
}
loger();
loger();
loger();
loger();
function sum(a, b) {
  console.log(a * b);
}
sum(4, 8);
sum(9, 7);

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const description = ("finlande", 6, "Helsinki");
console.log("description");
const descfrance = describeCountry("France", 5, "Paris");
const descportugal = describeCountry("Portugal", 6, "Lisbon");
const descGermany = describeCountry("Germany", 12, "Berlin");
console.log(descfrance, descportugal, descGermany);

function PercentageOfWold1(population) {
  return (population / 7900) * 100;
}

const PercentageOfWold2 = function (population) {
  return (population / 7900) * 100;
};

const France = PercentageOfWold1(62);
console.log(France);
const Djibouti = PercentageOfWold1(11);
console.log(Djibouti);
const Canada = PercentageOfWold1(38);
console.log(Canada);

const PercentageOfWold3 = function (population) {
  return (population / 7900) * 100;
};
const Senegal = PercentageOfWold2(19);
console.log(Senegal);
const Italie = PercentageOfWold2(58);
console.log(Italie);
const Gambie = PercentageOfWold2(2);
console.log(Gambie);

const PercentageOfWold4 = (population) => {
  return (population / 7900) * 100;
};
