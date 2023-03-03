function updateTime() {
  let berlinElement = document.querySelector("#berlin");
  if (berlinElement) {
    let berlinDateElement = berlinElement.querySelector("#berlin .date");
    let berlinTimeElement = berlinElement.querySelector("#berlin .time");
    let berlinTime = moment().tz("Europe/Berlin");

    berlinDateElement.innerHTML = berlinTime.format("dddd, DD/MM/YYYY");
    berlinTimeElement.innerHTML = berlinTime.format("H:mm:ss");
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

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.split(`/`)[1];
  let cityTime = moment().tz(cityTimeZone);
  let cityElement = document.querySelector("#cities");
  cityElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>

            <div class="date">${cityTime.format("dddd, DD/MM/YYYY")}</div>
          </div>

          <div class="time">${cityTime.format("H:mm:ss")}</div>
        </div>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
