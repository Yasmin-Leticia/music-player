const musicas = [
    {titulo: "aespa 에스파 'Whiplash'", arquivo: "songs/aespa_whiplash.mp3"},
    {titulo: "KISS OF LIFE (키스오브라이프) 'Midas Touch", arquivo: "songs/kiss_of_life_midas_touch.mp3"}
];

let indiceAtual = 0; 
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const musicTitle = document.getElementById("music-title");

function carregarMusica(indice) {
    audio.src = musicas[indice].arquivo;
    musicTitle.innerText = musicas[indice].titulo;
}
carregarMusica(indiceAtual);

function togglePlayPause(){
    if (audio.paused) {
        audio.play();
        playPauseBtn.innerText = "⏸";
    } else {
        audio.pause();
        playPauseBtn.innerText = "▶";
    }
}

function prevMusic(){
    indiceAtual = (indiceAtual -1 + musicas.length) % musicas.length;
    carregarMusica(indiceAtual);
    audio.play();
    playPauseBtn.innerHTML = "⏸";
}

function nextMusic() {
    indiceAtual = (indiceAtual + 1) % musicas.length;
    carregarMusica(indiceAtual);
    audio.play();
    playPauseBtn.innerText = "⏸";
}








// function playMusic(){
//     let audio = document.getElementById('audio');
//     let title = document.getElementById('music-title');
//     audio.play();
//     title.innerText = "Tocando: Aespa"
// }

// function pauseMusic() {
//     let audio = document.getElementById('audio');
//     let title = document.getElementById('music-title');
//     audio.pause();
//     title.innerText = "Música Pausada.";
// }