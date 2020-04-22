var canvas;
let sliderL;
let sliderT;
let sliderF;


function windowResized() {
  resizeCanvas(windowWidth-15, windowHeight);
}


function setup() {

  sliderL = createSlider(10, 500, 250, 10);
  sliderL.position(50, 10);

  sliderT = createSlider(0.01, PI, PI / 2, PI / 16);
  sliderT.position(50,25);

  sliderF = createSlider(0, 1, 0.5, 0.01);
  sliderF.position(50,40);

  var myHeight = document.documentElement.scrollHeight;
  canvas = createCanvas(windowWidth, myHeight);
  canvas.position(0, 0);
  canvas.style('z-index', -1);
  canvas.style('position', 'absolute');
  canvas.style('display', 'block');
}

function labels() {
  fill(155, 74, 246);
  text("Length:",5, 20);
  text("Angel:",5, 35);
  text("Fraction:",5, 50);
}
function branch(l, t, f) {
  // l = length
  // t = theta
  // f = fraction
  fill(6, 117, 31);

  line(0,0,0,-l);
  translate(0, -l);
  if (l > 5) {
    //branch 1
    push();
      rotate(t);
      branch(l*f, t, f);
    pop();
    //branch 2
    push();
      rotate(-t);
      branch(l*f, t, f);
    pop();
  }
}



function draw() {
  clear();
  labels();
  background(0);
  //centered at bottom of screen
  var length = sliderL.value();
  var theta = sliderT.value();
  var fraction = sliderF.value();

  translate(width / 2, height);
  stroke(4, 147, 57);
  branch(length, theta, fraction);
}