// Pin generated function:
function getPin() {
    const random = Math.random() * 10000;
    const pin = (random + '').split('.')[0];
    if (pin.length === 4) {
        return pin;
    } else {
        // console.log('Shoter pin', pin);
        return getPin();
    }
}

//Display generated pin
function generatePin() {
    const pinInput = document.getElementById('pin');
    pinInput.value = getPin();
}

// handle calculator button event
const buttonContainer = document.getElementById('digit-container');
buttonContainer.addEventListener('click', function (event) {
    const digit = event.target.innerText;
    if (isNaN(digit)) {
        if (digit === 'C') {
            const typedInput = document.getElementById('typed-pin'); // handle clear for ('C')
            typedInput.value = '';
        }
        else if (digit === 'B') {
            const typedInput = document.getElementById('typed-pin'); // handle backspace for ('B')
            typedInput.value = '';
        } else {
            // console.log();
        }
    } else {
        const typedInput = document.getElementById('typed-pin');
        typedInput.value = typedInput.value + digit;
    }
})

// verify pin
function verifyPin() {
    const pin = document.getElementById('pin').value;
    const typedPin = document.getElementById('typed-pin').value;
    if (pin === typedPin) {
        displayMatchResult('block', 'none');
    }
    else {
        displayMatchResult('none', 'block');
    }
}

// Match display result function
function displayMatchResult(corrected, incorrected) {
    const correct = document.getElementById('correct-pin');
    correct.style.display = corrected;

    const inCorrect = document.getElementById('incorrect-pin');
    inCorrect.style.display = incorrected;
}
