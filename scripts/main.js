//Input Value
const day = document.getElementById('day-value');
const month = document.getElementById('month-value');
const year = document.getElementById('year-value');
const button = document.getElementById('arrow');

const resDay = document.getElementById('day');
const resMonth = document.getElementById('month');
const resYear = document.getElementById('year');

const dayError = document.querySelector('.err-day');
const monthError = document.querySelector('.err-month');
const yearError = document.querySelector('.err-year');

const dayTitle = document.querySelector('.title-day');
const monthTitle = document.querySelector('.title-month');
const yearTitle = document.querySelector('.title-year');

let errorEmpty = "This field is required";

function validations() {
    // Day 
    if (day.value === "") {
        dayError.textContent = errorEmpty;
        day.style.border = "1px #ff5757 solid";
        dayTitle.style.color = "#ff5757";
    } else if (parseInt(day.value) > 31) {
        dayError.textContent = "Must be a valid day";
        day.style.border = "1px #ff5757 solid";
        dayTitle.style.color = "#ff5757";
    }

    // Month 
    if (month.value === "") {
        monthError.textContent = errorEmpty;
        month.style.border = "1px #ff5757 solid";
        monthTitle.style.color = "#ff5757";
    } else if (parseInt(month.value) > 12) {
        monthError.textContent = "Must be a valid month";
        month.style.border = "1px #ff5757 solid";
        monthTitle.style.color = "#ff5757";
    }

    // Year 
    if (year.value === "") {
        yearError.textContent = errorEmpty;
        year.style.border = "1px #ff5757 solid";
        yearTitle.style.color = "#ff5757";
    }
}

// Calculate Age
function calcAge() {
    validations();

    const birthDate = new Date(year.value, month.value - 1, day.value);
    const today = new Date();
}

button.addEventListener('click', () => {
    calcAge();
})