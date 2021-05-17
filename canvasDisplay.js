class CanvasDisplay {

  BRANCH_LENGTH_TO_STOP_DRAWING = 8; 

  constructor(parent) {
    this.canvas = document.createElement("canvas");
    this.canvas.width = 600; // Math.min(600, level.width * scale);
    this.canvas.height = 500; // Math.min(450, level.height * scale);
    parent.prepend(this.canvas);
    this.cx = this.canvas.getContext("2d");
  }

  clear() {
    this.cx.save();
    this.cx.setTransform(1, 0, 0, 1, 0, 0);
    this.cx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.cx.restore();
  }

  drawBranch(length, angle, scale) {
    this.cx.fillRect(0, 0, 2, -length);
    if (length < this.BRANCH_LENGTH_TO_STOP_DRAWING) {
      return;
    }
    this.cx.save();
    this.cx.translate(0, -length);
    this.cx.rotate(angle);
    this.drawBranch(length * scale, angle, scale);
    this.cx.rotate(-2 * angle);
    this.drawBranch(length * scale, angle, scale);
    this.cx.restore();
  }
}