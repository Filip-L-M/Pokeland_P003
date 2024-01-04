const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 570;

// c.fillStyle = "red";
// c.fillRect(0, 0, canvas.width, canvas.height);

const image = new Image();
image.src = "./IMG/mainLand.png";
const playerImage = new Image();
playerImage.src = "./IMG/playerDown.png";

const background = new Sprite({
  position: {
    x: -160,
    y: -370,
  },
  image: image,
});

const player = new Player({
  position: {},
  image: playerImage,
});

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  player.draw();
}

animate();
