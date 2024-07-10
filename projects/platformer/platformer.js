$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    //Vertical Columns
    //first vertical column from left
    createPlatform(100, 0, 10, 650);
    //second vertical column from left
    createPlatform(395, 175, 10, 575);
    //third vertical column from left
    createPlatform(700, 450, 10, 575);
    //sixth vertical column from left
    createPlatform(1390, 450, 10, 575);

    //Platforms in initial chute
    //bottom left horizontal platform (chute)
    createPlatform(100, 610, 60, 5);
    //bottom right horizontal platform (chute)
    createPlatform(340, 480, 55, 5);
    //middle left horizontal platform (chute)
    createPlatform(100, 350, 60, 5);
    //top horizontal platform (chute)
    createPlatform(245, 220, 50, 5);

    //Box
    //Left Roof
    createPlatform(700, 450, 262, 10);
    //Right Roof
    createPlatform(1138, 450, 262, 10);
    //Left Box Column
    createPlatform(962, 185, 10, 275);
    //Right Box Column
    createPlatform(1128, 185, 10, 275);
    //long horizontal platform within box
    createPlatform(700, 600, 520, 10);
    //top short horizontal platform
    createPlatform(1095, 250, 40, 5);
    //middle short horizontal platform
    createPlatform(970, 360, 40, 5);
    //bottom short horizontal platform wihin box
    createPlatform(1075, 490, 40, 5);

    //Extra Platforms
    //horizontal platform in between middle of chute and box
    createPlatform(525, 520, 55, 5);
    createPlatform(630, 650, 10, 10);
    createPlatform(920, 320, 50, 5);
    createPlatform(1250, 320, 50, 5);

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("grammy", 345, 615,0.009,1);
    createCollectable("oscar", 737, 475,0.009,1);
    createCollectable("tony", 737, 615,0.009,1);
    createCollectable("emmy", 1258, 325,0.009,1);

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("bottom", 210, 1000);
    createCannon("right", 590, 2400);
    createCannon("left", 90, 2400);

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
