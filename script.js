

const button = document.querySelector('button');

button.addEventListener('click', (event) => {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    document.querySelector('.img1').src = `./img/dice${randomNumber1}.png`;
    document.querySelector('.img2').src = `./img/dice${randomNumber2}.png`;
    
    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerText = 'Player1 Win';
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector('h1').innerText = 'Player2 Win';
    } else {
        document.querySelector('h1').innerText = 'Draw!'; 
    }
});
