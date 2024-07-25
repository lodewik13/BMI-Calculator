function showAverageWeightModal(idealWeightAvg, textColor) {
    const averageWeightDiv = document.querySelector('.average-weight');
    averageWeightDiv.innerHTML = `<span>Your ideal weight is 
    <span style="font-weight: bold; text-decoration: underline; color: ${textColor};">${idealWeightAvg} kg</span></span>`;

    document.getElementById('average-weight-modal').style.display = 'block';
}

document.getElementById('bmi-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let resultContainer = document.getElementById('result');
    let body = document.body;

    if (weight && height) {
        let heightInMeters = height / 100;
        let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        let result = `Your BMI is ${bmi}. `;
        let backgroundColor = '';
        let textColor = '';

        if (bmi < 18.5) {
            result += 'You are underweight.';
            backgroundColor = '#FDE9E9';
            textColor = 'red';
        } else if (bmi >= 18.5 && bmi < 24.9) {
            result += 'You have a normal weight.';
            backgroundColor = '#EDFDE9';
            textColor = 'green';
        } else if (bmi >= 25 && bmi < 29.9) {
            result += 'You are overweight.';
            backgroundColor = '#FDE9E9';
            textColor = 'red';
        } else {
            result += 'You are obese.';
            backgroundColor = '#FDE9E9';
            textColor = 'red';
        }

        let idealWeightMin = (18.5 * heightInMeters * heightInMeters).toFixed(2);
        let idealWeightMax = (24.9 * heightInMeters * heightInMeters).toFixed(2);
        let idealWeightAvg = ((parseFloat(idealWeightMin) + parseFloat(idealWeightMax)) / 2).toFixed(2);

        result += `<span>Your ideal weight range is between 
        <span style="font-weight: bold; color: ${textColor};">${idealWeightMin}</span> kg and 
        <span style="font-weight: bold; color: ${textColor};">${idealWeightMax}</span> kg.</span>`;

        resultContainer.innerHTML = result;
        body.style.backgroundColor = backgroundColor;

        showAverageWeightModal(idealWeightAvg, textColor);
    } else {
        resultContainer.textContent = 'Please enter valid numbers.';
        body.style.backgroundColor = 'transparent';
    }
});

function closeModal() {
    document.getElementById('average-weight-modal').style.display = 'none';
}

document.getElementById('reset-button').addEventListener('click', function () {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').textContent = '';
    closeModal();
    document.body.style.backgroundColor = 'transparent';
});

document.querySelector('.close-btn').addEventListener('click', closeModal);

document.getElementById('close-btn').addEventListener('click', function () {
    closeModal();
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('result').textContent = '';
    document.body.style.backgroundColor = 'transparent';
});

window.addEventListener('click', function (event) {
    if (event.target == document.getElementById('average-weight-modal')) {
        closeModal();
    }
});


document.getElementById('close-icon').style.display = 'none';
