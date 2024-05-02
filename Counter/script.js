let count = 0;

const number = document.getElementById('value');
const increaseBtn = document.querySelector('.increase-btn');
const decreaseBtn = document.querySelector('.decrease-btn');
const resetBtn = document.querySelector('.reset-btn');

number.textContent=count;

increaseBtn.addEventListener('click', () => {
    count++;
    number.textContent = count;
});


decreaseBtn.addEventListener('click',() => {
    count--;
    number.textContent=count;
})

resetBtn.addEventListener('click', () => {
    count = 0;
    number.textContent = count;
})

