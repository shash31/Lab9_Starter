let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    let answer = output.innerHTML;
    try {
        answer = eval(`${firstNum} ${operator} ${secondNum}`);
    } catch(err) {
        throw new InvalidInput();
    } finally {
        output.innerHTML = answer;
    }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish

TrackJS.track('Testing TrackJS!');

class InvalidInput extends Error {
    constructor() {
        super('The calculator only accepts numbers as input');
        this.name = 'InvalidInput';
    }
}

// Console Log
errorBtns[0].addEventListener("click", function() {
    console.log('Console Log Demo');
});

// Console Error
errorBtns[1].addEventListener("click", function() {
    console.error("Console Error Demo");
})

// Console Count
errorBtns[2].addEventListener("click", function() {
    console.count("Count Button");
})

// Console Warn
errorBtns[3].addEventListener("click", function() {
    console.warn("Console Warn Button");
})

// Console Assert
errorBtns[4].addEventListener("click", function() {
    const number = 2;
    const errorMsg = 'The number does not equal 3';
    console.assert(number == 3, {number, errorMsg});
})

// Console Clear
errorBtns[5].addEventListener("click", function() {
    console.clear();
})

// Console Dir
errorBtns[6].addEventListener("click", function() {
    console.dir(errorBtns[6]);
})

// Console dirxml
errorBtns[7].addEventListener("click", function() {
    console.dirxml(errorBtns[7]);
})

// Console Group Start
errorBtns[8].addEventListener("click", function() {
    console.group('console.group');
})

// Console Group End
errorBtns[9].addEventListener("click", function() {
    console.groupEnd('console.group');
})

// Console Table
errorBtns[10].addEventListener("click", function() {
    const classes = [
        {
            name: 'Cryptography',
            num: 187
        },
        {
            name: 'Astronomy',
            num: 2
        },
        {
            name: 'Software Engineering',
            num: 110
        }
    ];
    console.table(classes);
})

// Start Timer
errorBtns[11].addEventListener("click", function() {
    console.time('Timer Button');
})

// End Timer
errorBtns[12].addEventListener("click", function() {
    console.timeEnd('Timer Button');
})

// Console Trace
errorBtns[13].addEventListener("click", function() {
    const deep = () => { deeper(); };
    const deeper = () => { deepest(); };
    const deepest = () => { console.trace(); };
    deep();
})

// Trigger a Global Error
errorBtns[14].addEventListener("click", function() {
    bang();
    // eval('const c;');
})

window.addEventListener('error', (err) => {
    console.log("ERROR!!!");
    console.log(`${err.type}: ${err.message}`);
});
