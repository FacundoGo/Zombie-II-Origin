class Background {
    constructor(ImageArray) {
      this.images = ImageArray;
    }
  
    drawBackground() {

      this.images.forEach(function (backgroundImage) {
        backgroundImage.x -= backgroundImage.speed;
        image(backgroundImage.src, backgroundImage.x, 0, width, height);
        image(backgroundImage.src, backgroundImage.x - width, 0, width, height);
        if (backgroundImage.x < 0) {
          backgroundImage.x = width;
        }
      });
    }
  }
  