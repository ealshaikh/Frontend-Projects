const btn = document.getElementById('btn');
const modal = document.querySelector('.modal-overlay');
const container = document.querySelector('.container');
const closeBtn = document.querySelector('.close-btn');

btn.addEventListener('click', function () {
    modal.classList.toggle('show-modal');
    container.classList.add('hide-container');
});

closeBtn.addEventListener('click', function () {
    modal.classList.remove('show-modal');
    container.classList.remove('hide-container');
})