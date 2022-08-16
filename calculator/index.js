let display = document.getElementById('display')

function calculate(number) {
    display.value += number;
}

function result() {
    try {
        display.value = eval(display.value)  
    }
    catch {
        alert('Enter the valid value') 
    }
} 

function reset() {
    display.value = '';
}

function del() {
    display.value = display.value.slice(0, -1);
}

document.addEventListener('keypress', function onEvent(event) {
    if(event.key === 'Enter' && display.value === '') {
        display.value = null
    }
     else if(event.key === 'Enter') {
        event.preventDefault()
        result()
    }
});

