const temperatureEl = document.querySelector(".weather1");
const cityEl = document.querySelector(".weather2 .first");
const dateEl = document.querySelector(".weather2 .second");
const conditionEl = document.querySelector(".weather3");
const btn = document.getElementById("search");

const container = document.querySelector(".container");
const select = document.querySelector(".select");
const searchEl = document.getElementById("search");
const form = document.querySelector("form");

let place = "tolichoki";
const fetchData = async () => {
  try {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?unitGroup=metric&key=RM3K5LUWNAZWUKRLYTFD7ZUU5&contentType=json`;
    const response = await fetch(url);
    const data = await response.json();
    const city = data.resolvedAddress.split(",")[0];
    const total = data.resolvedAddress.split(",");

    select.innerHTML = "";
    
    total.map((e) => {
      const tag = document.createElement("button");
      tag.classList.add("tag");
      tag.innerText = e;
      tag.addEventListener("click", () => {
        place = tag.innerText;
        fetchData();
      });
      select.appendChild(tag);
    });

    //   console.log(data.resolvedAddress.split(" ")[0]);
    const temperature = data.days[0].temp;
    const date = data.days[0].datetime;
    const condition = data.days[0].description;

    updateDom(temperature, city, date, condition);
  } catch (error) {
    alert("Please enter a valid city or check the spelling");
  }

  //   console.log(data.resolvedAddress);

  //   console.log(data.days[0]);
  //   console.log(data.days[0].description);
  //   console.log(data.days[0].datetime);
  //   console.log(data.days[0].temp);
};
fetchData();
function updateDom(temperature, city, date, condition) {
  temperatureEl.innerText = `${temperature}°`;
  cityEl.innerText = city;
  dateEl.innerText = date;
  conditionEl.innerText = condition;
}
const search = (e) => {
  e.preventDefault();
  place = searchEl.value;
  fetchData();
  searchEl.value = "";
};
form.addEventListener("submit", search);
