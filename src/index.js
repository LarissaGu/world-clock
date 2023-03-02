function updateTime() {
  let berlinElement = document.querySelector("#berlin");
  let berlinDateElement = berlinElement.querySelector("#berlin .date");
  let berlinTimeElement = berlinElement.querySelector("#berlin .time");
  let berlinTime = moment().tz("Europe/Berlin");

  berlinDateElement.innerHTML = berlinTime.format("dddd, DD/MM/YYYY");
  berlinTimeElement.innerHTML = berlinTime.format("H:mm:ss");

  let istanbulElement = document.querySelector("#istanbul");
  let istanbulDateElement = istanbulElement.querySelector("#istanbul .date");
  let istanbulTimeElement = istanbulElement.querySelector("#istanbul .time");
  let istanbulTime = moment().tz("Asia/Istanbul");

  istanbulDateElement.innerHTML = istanbulTime.format("dddd, DD/MM/YYYY");
  istanbulTimeElement.innerHTML = istanbulTime.format("H:mm:ss");
}

updateTime();
setInterval(updateTime, 1000);
