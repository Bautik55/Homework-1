document.getElementById('startButton').addEventListener('click', function() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const randomNumber = getRandomNumber(1, 10);

    if (guess === randomNumber) {
        document.getElementById('result').textContent = 'Ты победил!';
    } else {
        document.getElementById('result').textContent = 'Давай еще раз';
    }
});

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}