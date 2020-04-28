var canvas;
let sliderL;
let sliderT;
let sliderF;
let sliderB;

let fracType;


function windowResized() {
  resizeCanvas(windowWidth-15, windowHeight);
}


function setup() {

  var dist = 25;
  // Sliders for Tree settings
  // Length
  sliderL = createSlider(10, 300, 250, 10);
  sliderL.position(75, 5);
  // Theta
  sliderT = createSlider(0, PI, PI / 2, PI / 128);
  sliderT.position(75,5 + dist);
  // Fraction
  sliderF = createSlider(0, 0.8, 0.5, 0.001);
  sliderF.position(75,5 + (2*dist));
  // Branches
  sliderB = createSlider(2, 4, 2, 1);
  sliderB.position(75, (3 * dist));


  //Radio buttons to Change fractal types
  // fracType = createRadio('radio');
  // fracType.style('color', 'white');
  // fracType.style('width', '50px');
  // fracType.style('right', '50px');
  // fracType.option('Tree', 1);
  // fracType.option('2', 2);
  // fracType.value(1);

  // create canvas that encapsules webpage
  var myHeight = document.documentElement.scrollHeight;
  canvas = createCanvas(windowWidth, myHeight);
  canvas.position(0, 0);
  canvas.style('z-index', -1);
  canvas.style('position', 'absolute');
  canvas.style('display', 'block');

  //set text properties
  textFont('Verdana');
  textStyle();
}

function labels() {
  fill(67, 3, 111);
  rect(0, 0, 275, 110);

  fill(255);
  stroke(255);
  var offset = 15;
  var distance = 25;
  text("Length:",5, offset);
  text("Angle:",5, offset + distance);
  text("Fraction:",5, offset + (2 * distance));
  text("Branches:", 5, offset + (3 * distance));

}


function branch(l, t, f, b) {
  // l = length
  // t = theta
  // f = fraction
  // b = branches
  fill(6, 117, 31);

  line(0,0,0,-l);
  translate(0, -l);
  // l < 10 : exit condition
  if (l > 10) {
    // 2 branches
    if (b == 2) {
      //branch 1
      push();
        rotate(t);
        branch(l*f, t, f, b);
      pop();
      //branch 2
      push();
        rotate(-t);
        branch(l*f, t, f, b);
      pop();
    }
    // 3 branches
    else if (b == 3) {
      //branch 0
      push();
        branch(l*f, t, f, b);
      pop();

      //branch 1
      push();
        rotate(t);
        branch(l*f, t, f, b);
      pop();
      //branch 2
      push();
        rotate(-t);
        branch(l*f, t, f, b);
      pop();
    }
    // 4 branches
    else if (b == 4) {
      //branch 1
      push();
        rotate(t);
        branch(l*f, t, f, b);
      pop();
      //branch 2
      push();
        rotate(-t);
        branch(l*f, t, f, b);
      pop();

      //branch 3
      push();
        rotate(t / 2);
        branch(l*f, t, f, b);
      pop();
      //branch 4
      push();
        rotate(-t / 2);
        branch(l*f, t, f, b);
      pop();
    }

    }
}




function draw() {
  clear();

  background(0);

  // set type of fractal
  // var type = fracType.value();


  labels();

  //centered at bottom of screen
  var length = sliderL.value();
  var theta = sliderT.value();
  var fraction = sliderF.value();
  var branches = sliderB.value();

  translate(width / 2, height);
  stroke(4, 147, 57);

  branch(length, theta, fraction, branches);


}
