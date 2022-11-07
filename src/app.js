/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "my", "our", "your"];
  let adj = ["big", "lust", "kind", "amazing", "wholesome", "furious"];
  let noun = ["journey", "tips", "home", "space", "room", "diary"];
  let extensiones = [".com", ".net", ".es", ".io", ".dev"];

  for (let a of pronoun) {
    for (let b of adj) {
      for (let c of noun) {
        for (let d of extensiones) {
          console.log(`${a}${b}${c}${d}`);
        }
      }
    }
  }

  console.log("Hello Rigo from the console!");
};
