let canvasDisplay = new CanvasDisplay(document.querySelector('.container'));

const angle = document.querySelector('#angle');
const output = document.querySelector('.angle-output');

output.textContent = angle.value;

angle.addEventListener('input', function() {
  output.textContent = angle.value;
  canvasDisplay.clear();
  canvasDisplay.drawBranch(80, angle.value * Math.PI / 180, 0.8);
});

canvasDisplay.cx.translate(300, 450);
canvasDisplay.drawBranch(80, 45 * Math.PI / 180, 0.8);