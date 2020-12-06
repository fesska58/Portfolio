//const modal = document.getElementsByClassName("grid-card");
const modalContainer = document.getElementsByClassName("modal-container")
const btn = document.getElementById("close");


modal.onclick = function () {
    modalContainer.style.display = "block";
}

btn.onclick = function () {
    modalContainer.style.display = "none";
}

let div = document.getElementsByClassName('grid-card')[0];

div.addEventListener('click', function (event) {
    alert('Hi!');
});


function app() {
    let btn = document.getElementById('close');
    let div = document.getElementById('grid-card');
    let modal = document.getElementById('modal');


    div.onclick = function () {
        modal.style.visibility = 'visible';
    }

    btn.onclick = function () {
        modal.style.visibility = 'hidden';
    }
}

app();