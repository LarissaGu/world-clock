function updateTime() {
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector("#berlin .date");
    let berlinTimeElement = berlinElement.querySelector("#berlin .time");
    let berlinTime = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = berlinTime.format("dddd, DD/MM/YYYY");
    berlinTimeElement.innerHTML = berlinTime.format("H:mm:ss");
  }

  let sofiaElement = document.querySelector("#sofia");
  if (sofiaElement) {
    let sofiaDateElement = sofiaElement.querySelector("#sofia .date");
    let sofiaTimeElement = sofiaElement.querySelector("#sofia .time");
    let sofiaTime = moment().tz("Europe/Sofia");

    sofiaDateElement.innerHTML = sofiaTime.format("dddd, DD/MM/YYYY");
    sofiaTimeElement.innerHTML = sofiaTime.format("H:mm:ss");
  }

  let istanbulElement = document.querySelector("#istanbul");
  if (istanbulElement) {
    let istanbulDateElement = istanbulElement.querySelector("#istanbul .date");
    let istanbulTimeElement = istanbulElement.querySelector("#istanbul .time");
    let istanbulTime = moment().tz("Asia/Istanbul");

    istanbulDateElement.innerHTML = istanbulTime.format("dddd, DD/MM/YYYY");
    istanbulTimeElement.innerHTML = istanbulTime.format("H:mm:ss");
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split(`/`)[1];
  let citiesElement = document.querySelector("#cities");
  let cityElement = citiesElement.appendChild(document.createElement("div"));

  cityElement.innerHTML = showSeconds(cityName, cityTimeZone);

  setInterval(() => {
    cityElement.innerHTML = showSeconds(cityName, cityTimeZone);
  }, 1000);

  document.querySelector("#start").style.display = "inline";
}

function showSeconds(cityName, cityTimeZone) {
  let cityTime = moment().tz(cityTimeZone);
  return `<div class="city">
          <div>
            <h2>${cityName}</h2>

            <div class="date">${cityTime.format("dddd, DD/MM/YYYY")}</div>
          </div>

          <div class="time">${cityTime.format("HH:mm:ss")}</div>
        </div>
`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
