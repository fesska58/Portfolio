let cards = document.querySelectorAll('.grid-card');
let modal = document.querySelector('.modal-container');
let btn = document.querySelector('.btn-close');
let card = null;
for (let i = 0; i < cards.length; i++) {
    let card = cards[i];

    card.addEventListener('click', function (e) {
        modal.classList.add('show');
    });

    btn.addEventListener('click', function () {
        modal.classList.remove('show');
    });
}


// modal.onclick = function () {
//     modalContainer.style.display = "block";
// }

// btn.onclick = function () {
//     modalContainer.style.display = "none";
// }

// let div = document.getElementsByClassName('grid-card')[0];

// div.addEventListener('click', function (event) {
//     alert('Hi!');
// });
