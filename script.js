function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
}

window.onload = function() {
    if (localStorage.getItem('dark-mode') === 'true') {
        document.body.classList.add('dark-mode');
    }
}

function calculateEMI() {
    let amount = document.getElementById('amount').value;
    let rate = document.getElementById('rate').value;
    let time = document.getElementById('time').value;

    if (amount && rate && time) {
        let monthlyRate = rate / 12 / 100;
        let months = time * 12;
        let emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        document.getElementById('emi-result').innerText = `Your EMI: ₹${emi.toFixed(2)}/month`;
    } else {
        document.getElementById('emi-result').innerText = "Please enter all values.";
    }
}