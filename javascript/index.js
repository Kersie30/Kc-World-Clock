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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
<div class="city">
<div>
 <h2>${cityTimeZone}</h2>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
</div>
<div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
</div>
`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
