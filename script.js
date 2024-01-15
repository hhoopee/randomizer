import countries from "./countries.js";
import { randomInteger, createOption, getAge} from "./functions.js";


const selectCountry = document.getElementById('select-country');
const generateBtn = document.querySelector('.generate-btn');
const gender = document.querySelectorAll('.gender');
const first = document.querySelector('.first');
const second = document.querySelector('.second');

const countriesNames = [...Object.keys(countries)]

countriesNames.forEach(countryName => {
    const option = document.createElement('option');
    option.value = countryName;
    option.textContent = countryName;
    selectCountry.append(option);
})

generateBtn.addEventListener('click', () => {
// test
    const genderValue = gender[0].checked ? 'female' : 'male';
    const country = selectCountry.value;
    const names = countries[country].en.sex[genderValue].first;
    const surnames = countries[country].en.sex[genderValue].second;

    const nameRandomNumber = randomInteger(0, names.length - 1);
    const surnameRandomNumber = randomInteger(0, surnames.length - 1);

    first.value = names[nameRandomNumber];
    second.value = surnames[surnameRandomNumber];
    console.log(names[nameRandomNumber])
    console.log(surnames[surnameRandomNumber])
})
