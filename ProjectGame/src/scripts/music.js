// Seleciona o elemento de áudio
const music = document.getElementById("background-music");

// Função para iniciar a música
function playMusic() {
    music.play().catch(error => {
        console.log('O autoplay pode estar bloqueado pelo navegador. Interação do usuário pode ser necessária.');
    });
}

// Função para pausar a música
function pauseMusic() {
    music.pause();
}

// Ajusta o volume (valor entre 0 e 1)
music.volume = 0.5; // 50% do volume

// Adiciona os eventos de clique aos botões de controle
document.getElementById("play-music").addEventListener("click", playMusic);
document.getElementById("pause-music").addEventListener("click", pauseMusic);

// Tente reproduzir a música assim que possível
window.addEventListener('click', playMusic);
