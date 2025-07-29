
//your parameter variables go here!

let tailX = 139.5;
let tailY = 91;

let headX = 50
let headY = 90

let darkFeatherSize = 30
let darkFeatherColour = 40

let lightCream = [219, 216, 189];
let navy = [47, 61, 82]
let darkPink = [88, 71, 92]



function setup_wallpaper(pWallpaper) {
 pWallpaper.output_mode(DEVELOP_GLYPH);
 //pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(FIT_TO_SCREEN);
 pWallpaper.show_guide(false); //set this to false when you're ready to print


 //Grid settings
 pWallpaper.grid_settings.cell_width  = 200;
 pWallpaper.grid_settings.cell_height = 200;
 pWallpaper.grid_settings.row_offset  = 100;
}


function wallpaper_background() {

 background(56, 108, 125); //teal
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

 //beak
noStroke()
fill(darkFeatherColour) 
triangle(headX-20,headY-5,headX-20,headY,headX-35,headY) // beak top half

fill(201, 190, 157); // cream-ish
triangle(headX-20,headY,headX-20,headY+5,headX-35,headY) // beak bottom half

//body

fill(189, 184, 142); // yellow-ish
arc(105, 90, 125, 125, 0, 180, PIE);

//head

fill(navy) 
circle(headX,headY,43,43)

fill(lightCream)
circle (headX,headY,30,30)

fill(navy) 
circle(headX,headY,20,20)

fill(255) //white 
circle (headX,headY,10,10)

//eye
fill(0) //black
circle (headX,headY,9.5,9.5)

fill(255) //white
circle (headX-1.5,headY+1,3,3)

//feathers
fill(74, 66, 60);  // brown
arc(105.5, 90, 68, 62.5, 90, 180, PIE);

fill(darkPink); 
arc(105.5, 121.25, 68, 62.5, 90, 180, PIE);

fill(99, 130, 104); // sage
arc(139.5, 121.25, 68, 62.5, 90, 180, PIE);

fill(navy); 
arc(139.5, 90, 68, 62.5, 90, 180, PIE);

fill(45, 64, 77); // dark teal
arc(173.5, 90, 68, 62.5, 90, 180, PIE);

//small feathers
fill(darkFeatherColour)
arc(105.5, 90, darkFeatherSize , darkFeatherSize , 90, 180, PIE);

arc(105.5, 121.25, darkFeatherSize , darkFeatherSize , 90, 180, PIE);

arc(139.5, 121.25, darkFeatherSize , darkFeatherSize , 90, 180, PIE);

arc(139.5, 90, darkFeatherSize , darkFeatherSize , 90, 180, PIE);

arc(173.5, 90, darkFeatherSize , darkFeatherSize , 90, 180, PIE);


//black tail lines
stroke(0)
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

// feet

strokeWeight(2)
line(102,153,102,175)
line(108,153,108,175)

//tail

noStroke()

fill(lightCream)
arc(tailX, tailY, 140, 150, 225, 315, PIE);

fill(darkPink)
arc(tailX, tailY-15, 125, 120, 225, 315, PIE);

fill(lightCream)
arc(tailX, tailY-30, 110, 90, 225, 315, PIE);

fill(darkPink)
arc(tailX, tailY-45, 95, 60, 225, 315, PIE);

fill(lightCream)
arc(tailX, tailY-60, 80, 30, 225, 315, PIE);

fill(darkFeatherColour)
arc(tailX, tailY, darkFeatherSize , darkFeatherSize , 225, 315, PIE);

arc(tailX, tailY-15, darkFeatherSize , darkFeatherSize , 225, 315, PIE);

arc(tailX, tailY-30, darkFeatherSize , darkFeatherSize , 225, 315, PIE);

arc(tailX, tailY-45, darkFeatherSize , darkFeatherSize , 225, 315, PIE);

arc(tailX, tailY-60, darkFeatherSize , darkFeatherSize , 225, 315, PIE);
}

