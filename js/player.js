const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const pauseBtn = document.getElementById("pause-btn");
const volume = document.getElementById("volume");

// 초기 음량을 0.3로 설정 (기본값 설정)
audioPlayer.volume = 0.2;
audioPlayer.play();

playBtn.addEventListener("click", () => audioPlayer.play());
pauseBtn.addEventListener("click", () => audioPlayer.pause());

volume.addEventListener("input", (event) => {
  audioPlayer.volume = event.target.value;
});
