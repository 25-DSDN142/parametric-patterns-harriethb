//your parameter variables go here!
let bodySize = 100;
let wingAngle = 0.5;
let tailSpread = 0.8;
let beakLength = 15;
let colorTheme = 1;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);2
 // pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  
  translate(width / 2, height / 2); // center of canvas

  drawFantail(bodySize, wingAngle, tailSpread, beakLength, colorTheme);
}

function drawFantail(bSize, wAngle, tSpread, bLength, theme) {
  // Colors
  let light = "#eeeeee";
  let mid = "#aaaaaa";
  let dark = "#666666";
  let beak = "#222222";

  if (theme == 2) {
    light = "#fff6e0";
    mid = "#d5c4a1";
    dark = "#a89f91";
    beak = "#442200";
  }

  // Draw body
  fill(mid);
  stroke(0);
  strokeWeight(1);
  triangle(-bSize * 0.2, 0, bSize * 0.4, -bSize * 0.3, bSize * 0.4, bSize * 0.3);

  // Draw head
  fill(light);
  triangle(bSize * 0.4, -bSize * 0.2, bSize * 0.7, 0, bSize * 0.4, bSize * 0.2);

  // Eye
  fill(0);
  ellipse(bSize * 0.55, -5, 5, 5);

  // Beak
  fill(beak);
  triangle(bSize * 0.7, -2, bSize * 0.7 + bLength, 0, bSize * 0.7, 2);

  // Wings
  push();
  rotate(-wAngle);
  fill(dark);
  triangle(-bSize * 0.4, 0, -bSize * 1, -bSize * 0.6, 0, -bSize * 0.5);
  pop();

  // Tail (3 triangles)
  for (let i = -1; i <= 1; i++) {
    push();
    rotate(i * tSpread);
    fill(i == 0 ? mid : dark);
    triangle(-bSize * 0.3, bSize * 0.2, -bSize * 1.1, bSize * 0.6, -bSize * 0.3, bSize * 0.7);
    pop();
  }
}
