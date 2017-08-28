
var img;
var img2;
function setup(){
  var canvas = createCanvas(290, 290, WEBGL);
  canvas.parent('canvas-parent');
  img = loadImage("img/jasmin.jpg");
  img2 = loadImage("img/frisky.jpg");
}

function draw(){
  background(0);

  var locY = (mouseY / height - 0.5) * (-2);
  var locX = (mouseX / width - 0.5) * 2;

  ambientLight(100, 80, 80);
  pointLight(200, 200, 200, locX, locY, 0);

  translate(-50, -60, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img);
  box(75);
  pop();

  translate (100, 115, 0);
  push();
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(img2);
  box(75);
  pop();
}
