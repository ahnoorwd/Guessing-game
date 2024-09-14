let randomNumber = Math.floor(Math.random() * 5) + 1;
let remainingAttempts = 5;
let wins = 0;
let losses = 0;

document.getElementById('checkButton').addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    const resultMessage = document.getElementById('resultMessage');
    
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 5) {
        resultMessage.textContent = 'Please enter a valid number between 1 and 5.';
        return;
    }

    if (userGuess === randomNumber) {
        resultMessage.textContent = 'Congratulations! You guessed it right.';
        wins++;
    } else {
        // Use template literals (backticks) to include the random number in the message
        resultMessage.textContent = `You have lost; random number was: ${randomNumber}`;
        losses++;
        remainingAttempts--;
    }

    document.getElementById('remainingAttempts').textContent = remainingAttempts;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;

    if (remainingAttempts === 0) {
        document.getElementById('checkButton').disabled = true;
        resultMessage.textContent += ' Game over!';
    }

    randomNumber = Math.floor(Math.random() * 5) + 1;  // Reset random number for next round
});
