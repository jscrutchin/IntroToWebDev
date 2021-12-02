var tracking = false;

var mouseX = document.getElementById('mouseX');
var mouseY = document.getElementById('mouseY');

function toggle(){
    if (tracking){
        this.classList.remove('btn-danger');
        this.classList.add('btn-success');
        this.innerText = 'Start mouse tracking';

        mouseX.innerText = 'untracked';
        mouseY.innerText = 'untracked';
    } else {
        this.classList.remove("btn-success");
        this.classList.add("btn-danger");
        this.innerText = "Stop mouse tracking.";
    }
    tracking = !tracking;
}

function updateMousePosition(e){
    if (tracking){
        mouseX.innerText = e.clientX;
        mouseY.innerText = e.clientY;
    }
}

document.getElementById("btnToggle").addEventListener("click", toggle);
document.addEventListener("mousemove", updateMousePosition);