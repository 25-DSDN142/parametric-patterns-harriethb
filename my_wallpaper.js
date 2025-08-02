//your parameter variables go here!

let headX = 50 // 50 // moves the entire head and beack on X axis
let headY = 90 // 90 //moves the entire head and beack on Y axis

let headSize = 43 // 43 // width and height of the head, excluding beak
let eyeSize = 10 // 10// width and height of the eye

let featherX = 105.5 // 105.5 // moves both the colourful and dark feathers on body X axis
let featherY = 90 // 90 // moves both the colourful and dark feathers on body Y axis

let featherWidth = 68 // 68 // width of colourful body feathers
let featherHeight = 62.5 // 62.5 // head of colourful body feathers

let darkFeatherSize = 30 // 30 // width & height of the 5 small dark body feathers
let darkFeatherColour = 40 // 40 // colour of all of the dark feathers (body & tail) & top of beak

let featherArcStart = 90 // 90 // the degree where my body feather begin
let featherArcEnd = 180 // 180 // the degree where my body feather end

let tailX = 139.5; // 139.5 // the X point where the stright line tail feathers and the big tail on top starts from.
let tailY = 91; // 91 // the Y point where the stright line tail feathers and the big tail on top starts from.

let tailWidth = 140 // 140 // width of the tail
let tailHeight = 150 // 150 // height of the tail

let tailArcStart = 225 // 225 // the degree where the tail starts
let tailArcEnd = 315 // 315 // the degree where the tail end

let lightCream = [219, 216, 189]; // middle of the head, and the tail // 219, 216, 189
let navy = [47, 61, 82] // the head and one of the body feathers // 47, 61, 82
let darkPink = [88, 71, 92] // the tail, and one of the feathers // 88, 71, 92
let bodyColour = [189, 184, 152] // the body and the bottom half of the beak // 189, 184, 152
let plantColour = [151, 181, 150] // 151, 181, 150
let backgroundColour = [56, 108, 125] //56, 108, 125


function setup_wallpaper(pWallpaper) {
 pWallpaper.output_mode(DEVELOP_GLYPH);
 pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(A3);
 pWallpaper.show_guide(false); //set this to false when you're ready to print


 //Grid settings
 pWallpaper.grid_settings.cell_width  = 200;
 pWallpaper.grid_settings.cell_height = 200;
 pWallpaper.grid_settings.row_offset  = 80;
}

function wallpaper_background() {

 background(backgroundColour); //teal
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

drawFantail(0, 0, 1)
}

function drawFantail(x, y, s) {
  translate(x, y);
  scale(s);

// tree
stroke(plantColour)
strokeWeight(8)
line(30,20,30,180)

fill(plantColour) // leaf on the tree
arc(50,40, 20,20,45,225, PIE);
beginShape()
vertex(45,31)
vertex(60,30)
vertex(59,45)
endShape()

arc(176,175,20,20,315,135, PIE); // leaf on the ground
beginShape()
vertex(167,180)
vertex(167,165)
vertex(180,165)
endShape()

strokeWeight(3) // the three leaf stems
line(45,45,30,60)
line(30,75,15,60)
line(176,175,192,192)

//shadow

noStroke();
if (eyeSize > 10) {
  fill(plantColour); // conditional shadow colour
} else {
  fill(47, 94, 110); // original shadow colour
}
ellipse(105, 176, 80, 20);

 //beak
noStroke()
fill(darkFeatherColour) 
triangle(headX-20,headY-5,headX-20,headY,headX-35,headY) // beak top half

fill(bodyColour); 
triangle(headX-20,headY,headX-20,headY+5,headX-35,headY) // beak bottom half

//body

fill(bodyColour); // yellow-ish
arc(105, 90, 125, 125, 0, 180, PIE);

//head

if (headSize > 45) {
  fill(45, 77, 60); // dark green
} else {
  fill(navy); // original navy
}
circle(headX, headY, headSize, headSize);

fill(lightCream)
circle (headX,headY,headSize-13,headSize-13)

if (headSize > 45) {
  fill(45, 77, 60); // dark green
} else {
  fill(navy); // original navy
}
circle(headX,headY,headSize-23,headSize-23)

//eye

fill(255) //white 
circle (headX,headY,eyeSize,eyeSize)

fill(0) //black
circle (headX,headY,eyeSize-0.5,eyeSize-0.5)

fill(255) //white
circle (headX-1.5,headY+1,eyeSize/3,eyeSize/3)

//feathers
fill(74, 66, 60);  // brown
arc(featherX, featherY, featherWidth, featherHeight, featherArcStart, featherArcEnd, PIE);

fill(darkPink); 
arc(featherX, featherY+31.25, featherWidth, featherHeight, featherArcStart, featherArcEnd, PIE);

fill(99, 130, 104); // sage
arc(featherX+34, featherY+31.25, featherWidth, featherHeight, featherArcStart, featherArcEnd, PIE);

fill(navy); 
arc(featherX+34, featherY, featherWidth, featherHeight, featherArcStart, featherArcEnd, PIE);

fill(45, 64, 77); // dark teal
arc(featherX+68, featherY, featherWidth, featherHeight, featherArcStart, featherArcEnd, PIE);

//small feathers
fill(darkFeatherColour)
arc(featherX, featherY, darkFeatherSize , darkFeatherSize , featherArcStart, featherArcEnd, PIE);

arc(featherX, featherY+31.25, darkFeatherSize , darkFeatherSize , featherArcStart, featherArcEnd, PIE);

arc(featherX+34, featherY+31.25, darkFeatherSize , darkFeatherSize , featherArcStart, featherArcEnd, PIE);

arc(featherX+34, featherY, darkFeatherSize , darkFeatherSize , featherArcStart, featherArcEnd, PIE);

arc(featherX+68, featherY, darkFeatherSize , darkFeatherSize , featherArcStart, featherArcEnd, PIE);


//black tail lines
stroke(0)
strokeWeight(1)
line(tailX,tailY,tailX+52,tailY)

line(tailX,tailY+3,tailX+34,tailY+3)

line(tailX,tailY+6,tailX+49,tailY+6)

line(tailX,tailY+9,tailX+34,tailY+9)

line(tailX,tailY+12,tailX+46,tailY+12)

line(tailX,tailY+15,tailX+34,tailY+15)

line(tailX,tailY+18,tailX+43,tailY+18)

line(tailX,tailY+21,tailX+34,tailY+21)

line(tailX,tailY+24,tailX+40,tailY+24)

line(tailX,tailY+27,tailX+34,tailY+27)

line(tailX,tailY+30,tailX+37,tailY+30)

// legs

strokeWeight(2)
line(102,153,102,175)
line(108,153,108,175)

//tail

// Adjust tail arc angles based on feather arc start
if (featherArcStart < 90) {
  tailArcStart = 205;
  tailArcEnd = 335;
}

noStroke()

fill(lightCream)
arc(tailX, tailY, tailWidth, tailHeight, tailArcStart, tailArcEnd, PIE);

fill(darkPink)
arc(tailX, tailY-15, tailWidth-15, tailHeight-30, tailArcStart, tailArcEnd, PIE);

fill(lightCream)
arc(tailX, tailY-30, tailWidth-30, tailHeight-60, tailArcStart, tailArcEnd, PIE);

fill(darkPink)
arc(tailX, tailY-45, tailWidth-45, tailHeight-90, tailArcStart, tailArcEnd, PIE);

fill(lightCream)
arc(tailX, tailY-60, tailWidth-60, tailHeight-120, tailArcStart, tailArcEnd, PIE);

fill(darkFeatherColour)
arc(tailX, tailY, darkFeatherSize , darkFeatherSize , tailArcStart, tailArcEnd, PIE);

arc(tailX, tailY-15, darkFeatherSize , darkFeatherSize , tailArcStart, tailArcEnd, PIE);

arc(tailX, tailY-30, darkFeatherSize , darkFeatherSize , tailArcStart, tailArcEnd, PIE);

arc(tailX, tailY-45, darkFeatherSize , darkFeatherSize , tailArcStart, tailArcEnd, PIE);

arc(tailX, tailY-60, darkFeatherSize , darkFeatherSize , tailArcStart, tailArcEnd, PIE);
}

