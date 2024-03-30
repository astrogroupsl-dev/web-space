let userData = {
    name: '',
    surname: '',
    age: '',
    gender: '',
    rational: '',
    doa: '',
    task: '',
    place: '',
    area: '',
    degree: '',
    university: '',
    year: '',
    country: '',
};

function start() {
    document.getElementById('step1').style.display = 'block';
}

function enableNextButton(step) {
    const allInputs = document.querySelectorAll(`#step${step} input`);
    let allFilled = true;
    allInputs.forEach(input => {
        if (input.value === '') {
            allFilled = false;
        }
    });
    document.getElementById(`step${step}Next`).disabled = !allFilled;
}

function checkNext(step) {
    enableNextButton(step);
}

function goToStep2() {
    userData.name = document.getElementById('nameInput').value;
    userData.surname = document.getElementById('surnameInput').value;
    userData.age = document.getElementById('ageInput').value;
    userData.gender = document.getElementById('genderInput').value;

    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
}

function goToStep3() {
    userData.rational = document.getElementById('rationalInput').value;
    userData.doa = document.getElementById('doaInput').value;
    userData.task = document.getElementById('taskInput').value;
    userData.place = document.getElementById('placeInput').value;

    document.getElementById('step2').style.display = 'none';
    document.getElementById('step3').style.display = 'block';
}

function goToStep4() {
    userData.area = document.getElementById('area').value;
    userData.degree = document.getElementById('degree').value;
    userData.university = document.getElementById('university').value;
    userData.year = document.getElementById('year').value;
    userData.country = document.getElementById('country').value;

    document.getElementById('step3').style.display = 'none';
    document.getElementById('step4').style.display = 'block';
    displayConfirmation(); // Call displayConfirmation function here
}

function skipStep(step) {
    document.getElementById(`step${step}`).style.display = 'none';
    if (step < 4) {
        document.getElementById(`step${step + 1}`).style.display = 'block';
        enableNextButton(step + 1);
        if (step + 1 == 4) {
            displayConfirmation(); // Call displayConfirmation when skipping to Step 4
        }
    } else {
        displayConfirmation();
    }
}

function displayConfirmation() {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p><strong>Name:</strong> ${userData.name}</p>
        <p><strong>Surname:</strong> ${userData.surname}</p>
        <p><strong>Age:</strong> ${userData.age}</p>
        <p><strong>Gender:</strong> ${userData.gender}</p>
        <p><strong>Rationale:</strong> ${userData.rational}</p>
        <p><strong>Date of Availability:</strong> ${userData.doa}</p>
        <p><strong>Task:</strong> ${userData.task}</p>
        <p><strong>Place:</strong> ${userData.place}</p>
        <p><strong>Area:</strong> ${userData.area}</p>
        <p><strong>Degree:</strong> ${userData.degree}</p>
        <p><strong>University:</strong> ${userData.university}</p>
        <p><strong>Year:</strong> ${userData.year}</p>
        <p><strong>Country:</strong> ${userData.country}</p>
    `;
}