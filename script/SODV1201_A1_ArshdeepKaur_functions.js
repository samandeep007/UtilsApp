/**
 * @name: Assignment1
 * @Course Code: SODV1201
 * @class: Software Development Diploma program.
 * @author: Arshdeep Kaur
 */

document.addEventListener('DOMContentLoaded', () => {
    // Set a timeout to update the picture name after 10 seconds
    setTimeout(() => {
        const pictureNameElement = document.getElementById('picture-name');
        pictureNameElement.textContent = 'MyPhoto.jpeg';
    }, 10000); // 10000 milliseconds = 10 seconds
});


/* Mark to Grade Converter */
function MarkToGrade() {
    const markInput = document.getElementById('mark-input-box').value;
    const validationMessage = document.getElementById('validation-message');
    const gradeOutput = document.getElementById('grade-output');

    let mark = parseInt(markInput);

    if (isNaN(mark) || mark < 0 || mark > 100) {
        validationMessage.textContent = "Please enter a valid mark between 0 and 100.";
        gradeOutput.textContent = "";
    } else {
        validationMessage.textContent = "";
        let grade;
        if (mark > 90) grade = 'A';
        else if (mark > 80) grade = 'B';
        else if (mark > 70) grade = 'C';
        else if (mark > 50) grade = 'D';
        else grade = 'F';

        gradeOutput.textContent = `Grade: ${grade}`;
    }
}

const staffList = [
    { name: 'John Doe', position: 'Manager', salary: 60000 },
    { name: 'Jane Smith', position: 'Developer', salary: 50000 },
    { name: 'Alice Johnson', position: 'Designer', salary: 55000 },
    { name: 'Bob Brown', position: 'Intern', salary: 30000 }
];

function formatDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date().toLocaleDateString(undefined, options);
}

document.getElementById('current-date').textContent = formatDate();

function displayStaffList(list) {
    const staffTableBody = document.getElementById('staff-list');
    staffTableBody.innerHTML = '';
    list.forEach(staff => {
        const row = `<tr>
            <td>${staff.name}</td>
            <td>${staff.position}</td>
            <td>$${staff.salary.toLocaleString()}</td>
        </tr>`;
        staffTableBody.innerHTML += row;
    });
}

// Display the staff list on page load
displayStaffList(staffList);

function sortByName() {
    const sortedList = [...staffList].sort((a, b) => a.name.localeCompare(b.name));
    displayStaffList(sortedList);
}

function sortBySalary() {
    const sortedList = [...staffList].sort((a, b) => a.salary - b.salary);
    displayStaffList(sortedList);
}



/* Weather Conversion */
// Convert Fahrenheit to Celsius
function convertFahrenheitToCelsius() {
    const fahrenheitInput = document.getElementById('fahrenheit-input').value;
    const celsiusOutput = document.getElementById('celsius-output');

    // Check if input is a number
    const fahrenheit = parseFloat(fahrenheitInput);
    if (isNaN(fahrenheit)) {
        celsiusOutput.textContent = 'Please enter a valid number.';
        return;
    }

    // Conversion formula
    const celsius = (fahrenheit - 32) * 5 / 9;
    celsiusOutput.textContent = `Celsius: ${celsius.toFixed(2)}°C`;
}

// Convert Celsius to Kelvin
function convertCelsiusToKelvin() {
    const celsiusInput = document.getElementById('celsius-input').value;
    const kelvinOutput = document.getElementById('kelvin-output');

    // Check if input is a number
    const celsius = parseFloat(celsiusInput);
    if (isNaN(celsius)) {
        kelvinOutput.textContent = 'Please enter a valid number.';
        return;
    }

    // Conversion formula
    const kelvin = celsius + 273.15;
    kelvinOutput.textContent = `Kelvin: ${kelvin.toFixed(2)}K`;
}
