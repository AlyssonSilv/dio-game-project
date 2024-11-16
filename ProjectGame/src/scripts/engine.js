const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
        lives: document.querySelector(".menu-lives h2") // Ajustado para selecionar corretamente o elemento de vidas
    },

    values: {
        timerId: null,
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        timeLeft: 30, // Tempo inicial do jogo (em segundos)
        lives: 3 // Quantidade inicial de vidas
    },
};

function randomSquare() {
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * state.view.squares.length);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function moveEnemy() {
    state.values.timerId = setInterval(randomSquare, state.values.gameVelocity);
}

function addListenerHitobox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
            } else {
                state.values.lives--;
                state.view.lives.textContent = `x${state.values.lives}`;
                if (state.values.lives <= 0) {
                    alert("Game Over! Tente novamente.");
                    clearInterval(state.values.timerId);
                    resetGame();
                }
            }
        });
    });
}

function startTimer() {
    const timerInterval = setInterval(() => {
        state.values.timeLeft--;
        state.view.timeLeft.textContent = state.values.timeLeft;

        if (state.values.timeLeft <= 0) {
            clearInterval(timerInterval);
            clearInterval(state.values.timerId);
            alert("Tempo esgotado! Fim de jogo.");
            resetGame();
        }
    }, 1000);
}

function resetGame() {
    state.values.timeLeft = 30;
    state.values.lives = 3;
    state.values.result = 0;
    state.view.timeLeft.textContent = state.values.timeLeft;
    state.view.lives.textContent = `x${state.values.lives}`;
    state.view.score.textContent = state.values.result;

    moveEnemy();
    startTimer();
}

function init() {
    moveEnemy();
    addListenerHitobox();
    startTimer();
}

init();
