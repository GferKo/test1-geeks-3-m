// 1
const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
}

console.log(containsOnlyDigits("182854"));
console.log(containsOnlyDigits("891gjdbvhjs4567"));
console.log(containsOnlyDigits(""));
console.log(containsOnlyDigits("00000238375"));

// 2
let seconds = 0;

const intervalId = setInterval(() => {
    seconds++;
    console.log("Прошла секунда", seconds);
}, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Стоп");
}, 15000);

// 3
let i = 1;

const count = setInterval(() => {
    console.log(i);
    i++;

    if (i > 10) {
        clearInterval(count);
    }
}, 1000);

// 4
const colorBlock = document.querySelector('#colorBlock');

colorBlock.onclick = () => {
    colorBlock.classList.toggle('active');
};

// 5
const xhr = new XMLHttpRequest();

xhr.open("GET", "data.json");

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log(data);
        }
    }
};

xhr.send();