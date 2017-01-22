var array = [1,2,3,4,5,6,7,8,9,10];
function setup() {
   createCanvas(400, 450);
  for(var i=0; i<array.length; i++) {
    array[i] = floor(random(50));
  }
  frameRate(1);
}
var i=0;
function draw() {
  background("#102439");
//bubble sort
  for(var j=0; j<array.length; j++) {
    if (array[i]>array[j]) {
      var temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
    fill(-1);
    stroke("#68BF4B");
    strokeWeight(2);
    text(array[j], 50, 30+20*j);
    line(90, 25+20*j, 90+5*array[j], 25+20*j);
  }
  i++;  
  if (i>array.length-1){
    noLoop();
  }

}