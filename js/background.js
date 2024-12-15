const body = document.querySelector("body");

const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");

bgImg.src = `img/backgroundImg/${chosenImage}`;
// 배경 이미지 경로 설정
body.style.backgroundImage = `url('img/backgroundImg/${chosenImage}')`;
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";
