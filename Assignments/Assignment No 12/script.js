

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = ' ';
}

function calculate() {
    const display = document.getElementById('display');

    // Eval Function is Evaluate the Given Input and Slve it According to the Given Operation.
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
