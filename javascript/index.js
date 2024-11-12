function updateLosAngelesTime() {
  //losAngeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngeles = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngeles.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngeles.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}
setInterval(updateLosAngelesTime, 1000);

function updateParisTime() {
  //losAngeles
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let paris = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = paris.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = paris.format("h:mm:ss[<small>]A[</small>]");
}
setInterval(updateParisTime, 1000);
