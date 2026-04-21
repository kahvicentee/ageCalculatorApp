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

function isValidDate(day, month, year) {
    const date = new Date(year, month - 1, day);

    return (
        date.getFullYear() == year &&
        date.getMonth() == month - 1 &&
        date.getDate() == day
    );
}

function validateField(input, errorEl, titleEl, type) {
    if(input.value === "") {
        errorEl.textContent = errorEmpty;
        input.style.border = "1px #ff5757 solid";
        titleEl.style.color = "#ff5757";
        return false;
    }

    if(type === "day" && parseInt(input.value) > 31) {
        errorEl.textContent = "Must a valid day";
        input.style.border = "1px #ff5757 solid";
        titleEl.style.color = "#ff5757";
        return false;
    }

    if(type === "month" && parseInt(input.value) > 12) {
        errorEl.textContent = "Must be a valid month";
        input.style.border = "1px #ff5757 solid";
        titleEl.style.color = "#ff5757";
        return false;
    }

    if (day.value && month.value && year.value) {
        const d = parseInt(day.value);
        const m = parseInt(month.value);
        const y = parseInt(year.value);

        const today = new Date();
        const inpDate = new Date(y, m - 1, d);

        //Impossible Date
        if(!isValidDate(d, m, y)) {
            errorEl.textContent = "Must be a valid date";
            input.style.border = "1px #ff5757 solid";
            titleEl.style.color = "#ff5757";
            return false;
        }

        if(inpDate > today) {
            errorEl.textContent = "Must be a valid date";
            input.style.border = "1px #ff5757 solid";
            titleEl.style.color = "#ff5757";
            return false;
        }
    }

    errorEl.textContent = "";
    input.style.border = "";
    titleEl.style.color = "";

    return true;
}

function validations() {
    const isDayValid = validateField(day, dayError, dayTitle, "day");
    const isMonthValid = validateField(month, monthError, monthTitle, "month");
    const isYearValid = validateField(year, yearError, yearTitle, "year");

    return isDayValid && isMonthValid && isYearValid;
}

day.addEventListener('input', () => {
    validateField(day, dayError, dayTitle, "day");
})

month.addEventListener('input', () => {
    validateField(month, monthError, monthTitle, "month");
})

year.addEventListener('input', () => {
    validateField(year, yearError, yearTitle, "year");
})

// Calculate Age
function calcAge() {
    if(!validations()) return;

    const birthDate = new Date(year.value, month.value - 1, day.value);
    const today = new Date();

    let days = today.getDate() - birthDate.getDate();
    let months = today.getMonth() - birthDate.getMonth();
    let years = today.getFullYear() - birthDate.getFullYear();

    if (days < 0) {
        months--;

        const lastMonthh = new Date(
            today.getFullYear(),
            today.getMonth(),
            0
        ).getDate()

        days += lastMonthh;
    }

    if (months < 0 ) {
        years --;
        months += 12;
    }

    resDay.textContent = days;
    resMonth.textContent = months;
    resYear.textContent = years;
}

button.addEventListener('click', () => {
    calcAge();
})