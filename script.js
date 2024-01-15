import countries from "./countries.js";
import { randomInteger, createOption, getAge} from "./functions.js";


const selectCountry = document.getElementById('select-country');
const generateBtn = document.querySelector('.generate-btn');
const gender = document.querySelectorAll('.gender');
const tabs = document.querySelectorAll('.tab');
const inputContainers = document.querySelectorAll('.input-container');


const tabsID = ['first-tab', 'second-tab'];
tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        })
        inputContainers.forEach(inputContainer => {
            inputContainer.classList.remove('active');
        })
        tab.classList.add('active');
        console.log()
        inputContainers[tabsID.indexOf(event.target.id)].classList.add('active');
    })
})


const countriesNames = [...Object.keys(countries)]

countriesNames.forEach(countryName => {
    const option = document.createElement('option');
    option.value = countryName;
    option.textContent = countryName;
    selectCountry.append(option);
})



const firstEn = document.querySelector('.first-en');
const secondEn = document.querySelector('.second-en');

const firstGeo = document.querySelector('.first-geo');
const secondGeo = document.querySelector('.second-geo');

generateBtn.addEventListener('click', () => {
// test
    const genderValue = gender[0].checked ? 'female' : 'male';
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
})
