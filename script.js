// to target first div element
const firstElemet = document.getElementById("divOne").children;
let firstInput = firstElemet[0];

let searchButton = firstElemet[1];

const secondElemet = document.getElementById("divTwo").children;
let twoImg = secondElemet[0];
let twopara = secondElemet[1];

const thiredElemet = document.getElementById("divThree").children;
let thirdh2 = thiredElemet[0];

const thiredElemet2 = document.getElementById("tempStatus").children;
let thirdPara = thiredElemet2[1];

const fourth1para = document.getElementById("humidity");
const fourth2para = document.getElementById("wind_speed");

// let city = firstInput.innerHTML;

searchButton.addEventListener("click", click);
let p = fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=38fe4fd89f98d73a40a8a27d17dbbd85&units=metric"
);
// try practicing more of this part
p.then((resp) => resp.json()).then((data) => {
  console.log(data);
  let temp = data.main.temp;
  thirdPara.innerHTML = temp + "°c";

  let humi = data.main.humidity;
  fourth1para.innerHTML = humi + "%";

  let speed = data.wind.speed;
  fourth2para.innerHTML = speed + "m/s";

  thirdh2.innerHTML = data.name;

  let view = data.weather[0].main;

  checking();
  function checking() {
    if (view === "Haze") {
      twoImg.src = "images/haze.png";
    } else if (view === "Fog") {
      twoImg.src = "images/fog.png";
    } else if (view === "Mist") {
      twoImg.src = "images/fog.png";
    } else if (view === "Clouds") {
      twoImg.src = "images/clouds.png";
    } else if (view === "Drizzle") {
      twoImg.src = "images/drizzle.png";
    } else if (view === "Rain") {
      twoImg.src = "images/rainy.png";
    } else if (view === "Clear") {
      twoImg.src = "images/sun.png";
    } else {
      twoImg.src = "images/sun.png";
    }
  }
  twopara.innerHTML = view;
});

function click() {
  if (firstInput.value === "") {
    alert("type city or country name:");
  } else {
    //   city = firstInput.innerTEXT;
    let city = firstInput.value;
    let urlof = "https://api.openweathermap.org/data/2.5/weather?";
    let key = "38fe4fd89f98d73a40a8a27d17dbbd85";
    let p = fetch(`${urlof}q=${city}&appid=${key}&units=metric`);
    // try practicing more of this part

    p.then((resp) => resp.json()).then((data) => {
      console.log(data);
      let temp = data.main.temp;
      thirdPara.innerHTML = temp + "°c";

      let humi = data.main.humidity;
      fourth1para.innerHTML = humi + "%";

      let speed = data.wind.speed;
      fourth2para.innerHTML = speed + "m/s";

      thirdh2.innerHTML = data.name;

      let view = data.weather[0].main;
      twopara.innerHTML = view;
      function checking() {
        if (view === "Haze") {
          twoImg.src = "images/haze.png";
        } else if (view === "Mist") {
          twoImg.src = "images/fog.png";
        } else if (view === "Clouds") {
          twoImg.src = "images/clouds.png";
        } else if (view === "Drizzle") {
          twoImg.src = "images/drizzle.png";
        } else if (view === "Rain") {
          twoImg.src = "images/rainy.png";
        } else if (view === "Clear") {
          twoImg.src = "images/sun.png";
        } else {
          twoImg.src = "images/sun.png";
        }
      }
      checking();
    });
  }
}
