var displayEvens = document.forms["displayEvens"];
var start = document.getElementById('start');
var end = document.getElementById('end');
var step = document.getElementById('step');
var results = document.getElementById("results");
var submitButton = document.getElementById("submitButton");

function validate() {

    displayEvens.className = 'needs-validation';

    if (!displayEvens.checkValidity()){
        displayEvens.className = 'was-validated';
        return false;
    }

    var operand1 = parseInt(start.value);
    var operand2 = parseInt(end.value);
    var operand3 = parseInt(step.value);

    document.getElementById('startInput').innerText = operand1;
    document.getElementById('endInput').innerText = operand2;
    document.getElementById('stepInput').innerText = operand3;

    let stepResults = document.getElementById('stepResults');


    if (operand1 >= operand2){
        stepResults.innerText = 'Start must be greater than End';
    } else {
        for (let i = operand1; i <= operand2; i = i + operand3){
            if (i % 2 === 0){
                var span = document.createElement("span");
                span.setAttribute("class", "new");
                span.innerHTML = i + '<br>';
                stepResults.appendChild(span);
            } 
        }
    }

    results.style.display = "block";

    return false;
}