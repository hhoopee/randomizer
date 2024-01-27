import countries from "./countries.js";
import { randomInteger, createOption, getAge } from "./functions.js";

const selectCountry = document.getElementById("select-country");
const selectAge = document.getElementById("select-age");
const generateBtn = document.querySelector(".generate-btn");
const gender = document.querySelectorAll(".gender");
const tabs = document.querySelectorAll(".tab");
const inputContainers = document.querySelectorAll(".input-container");

// tabs
const tabsID = ["first-tab", "second-tab"];
tabs.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    inputContainers.forEach((inputContainer) => {
      inputContainer.classList.remove("active");
    });
    tab.classList.add("active");
    console.log();
    inputContainers[tabsID.indexOf(event.target.id)].classList.add("active");
  });
});

// add options to country select
const countriesNames = [...Object.keys(countries)];

countriesNames.forEach((countryName) => {
  createOption(countryName, selectCountry);
});

// add options to age select
for (let i = 18; i <= 64; i += 1) {
  createOption(i, selectAge);
}

const firstEn = document.querySelector(".first-en");
const secondEn = document.querySelector(".second-en");
const birthEn = document.querySelector(".birth-en");

const firstGeo = document.querySelector(".first-geo");
const secondGeo = document.querySelector(".second-geo");
const birthGeo = document.querySelector(".birth-geo");

generateBtn.addEventListener("click", () => {
  const genderValue = gender[0].checked ? "female" : "male";
  const country = selectCountry.value;
  const namesEn = countries[country].en.sex[genderValue].first;
  const surnamesEn = countries[country].en.sex[genderValue].second;

  const namesGeo = countries[country].native.sex[genderValue].first;
  const surnamesGeo = countries[country].native.sex[genderValue].second;

  const nameRandomNumber = randomInteger(0, namesEn.length - 1);
  const surnameRandomNumber = randomInteger(0, surnamesEn.length - 1);

  firstEn.value = namesEn[nameRandomNumber];
  secondEn.value = surnamesEn[surnameRandomNumber];
  firstGeo.value = namesGeo[nameRandomNumber];
  secondGeo.value = surnamesGeo[surnameRandomNumber];

  const { year, month, day } = getAge(selectAge.value);
  birthEn.value = `${day}/${month}/${year}`;
  birthGeo.value = `${day}/${month}/${year}`;
});

const copyFirstEn = document.getElementById("copy-first-en");
const copySecondEn = document.getElementById("copy-second-en");
const copyFirstGeo = document.getElementById("copy-first-geo");
const copySecondGeo = document.getElementById("copy-second-geo");
const copyBDEn = document.getElementById("copy-birth-en");
const copyBDGeo = document.getElementById("copy-birth-geo");

const BUTTONS = [copyFirstEn, copyFirstGeo, copySecondEn, copySecondGeo, copyBDEn, copyBDGeo];
const INPUTS = [firstEn, firstGeo, secondEn, secondGeo, birthEn, birthGeo];

BUTTONS.forEach((button, index) => {
  button.addEventListener("click", () => {
    INPUTS[index].select();
    document.execCommand("copy");
  });
});
