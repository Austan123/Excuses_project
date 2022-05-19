/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#the-excuse").innerHTML = generateExcuse();
  });
  console.log("Hello World");
};

let generateExcuse = () => {
  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "puppy", "pikachu", "dragon"];
  let action = ["took my", "threw my", "electrocuted my", "burnt my"];
  let possession = ["charmander", "money", "books", "house", "bike"];
  let where = ["in the park", "in kanto region", "the casino", "wonderland"];

  let proIndex = Math.floor(Math.random(2) * pronoun.length);
  let subIndex = Math.floor(Math.random(5) * subject.length);
  let actIndex = Math.floor(Math.random(4) * action.length);
  let posIndex = Math.floor(Math.random(5) * possession.length);
  let whereIndex = Math.floor(Math.random(4) * where.length);

  return (
    pronoun[proIndex] +
    " " +
    subject[subIndex] +
    " " +
    action[actIndex] +
    " " +
    possession[posIndex] +
    " " +
    where[whereIndex]
  );
};
