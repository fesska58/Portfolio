
function app() {
    let buttons = document.querySelectorAll('.button');
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

    function filter(category, items) {
        items.forEach((item) => {
            let isItemFiltered = !item.classList.contains(category)
            let isShowAll = category.toLowerCase() === 'all'
            if (isItemFiltered && !isShowAll) {
                item.classList.add('anime')
            } else {
                item.classList.remove('anime')
            }
        })
    }

    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            let current = button.dataset.filter
            filter(current, cards)
        })
    })

}

app()