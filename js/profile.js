function nextStep(step) {
    document.querySelector('.active').classList.remove('active');
    document.getElementById('step' + step).classList.add('active');
    }
