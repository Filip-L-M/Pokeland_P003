class Player {
  constructor({ image, position }) {
    this.image = image;
    this.position = position;
  }
  draw() {
    c.drawImage(
      this.image,
      0,
      0,
      this.image.width / 4,
      this.image.height,
      canvas.width / 2 - this.image.width / 4 / 2,
      canvas.height / 2 - this.image.height / 2,
      this.image.width / 4,
      this.image.height
    );
  }
}
