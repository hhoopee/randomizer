export function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

export function createOption(value, selectContainer) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = value;
    selectContainer.append(option);
}

export function getAge(value) {
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
    let now = new Date();
    const randomNumber = randomInteger(0, 11);
    const month = MONTHS[randomNumber];
    const day = [0, 2, 4, 6, 7, 9, 11].includes(randomNumber) ? randomInteger(1, 31)
    : randomNumber === 1 ? randomInteger(1, 28) : randomInteger(1, 30);
    let year;
    if (randomNumber > now.getMonth()) {
        year = now.getFullYear() - (+value + 1);
    } else if (randomNumber === now.getMonth() && now.getDate() < day) {
        year = now.getFullYear() - (+value + 1);
    } else {
        year = now.getFullYear() - value;
    }
    return {year, month, day};
}

