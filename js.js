let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = document.querySelector(".date");
let LosAngelesTimeElement = losAngelesElement.querySelector(".time");
let LosAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "h:mm:ss [<small>]A[</small>]"
);

let parisElement = document.querySelector("#paris");
let parisDateElement = document.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = paris.format("MMMM Do YYYY");
parisTimeElement.innerHTML = paris.format("h:mm:ss [<small>]A[</small>]");
