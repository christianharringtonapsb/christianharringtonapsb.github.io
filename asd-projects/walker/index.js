/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Game Item Objects

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("keydown", handleKeyDown); // change 'eventType' to the type of event you want to handle
  $(document).on("keyup", handleKeyUp);
  
  /* The two lines below are part of the bonus challenge
      "Make the player(s) change color when clicked on" */
  $("#walker").on("click", changeWalkerColor);
  $("#walker2").on("click", changeWalker2Color);

  const KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    A: 65,
    D: 68,
    S: 83,
    W: 87,
  };

  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0,
  };

  var walker2 = {
    positionX: 390,
    positionY: 0,
    speedX: 0,
    speedY: 0,
  };

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollision();
    redrawGameItem();
  }
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      console.log("left pressed");
      walker2.speedX = -5;
      walker2.speedY = 0;
    }
    if (event.which === KEY.UP) {
      console.log("up pressed");
      walker2.speedY = -5;
      walker2.speedX = 0;
    }
    if (event.which === KEY.RIGHT) {
      console.log("right pressed");
      walker2.speedX = 5;
      walker2.speedY = 0;
    }
    if (event.which === KEY.DOWN) {
      console.log("down pressed");
      walker2.speedY = 5;
      walker2.speedX = 0;
    }
    if (event.which === KEY.A) {
      console.log("A pressed");
      walker.speedX = -5;
      walker.speedY = 0;
    }
    if (event.which === KEY.D) {
      console.log("D pressed");
      walker.speedX = 5;
      walker.speedY = 0;
    }
    if (event.which === KEY.S) {
      console.log("S pressed");
      walker.speedY = 5;
      walker.speedX = 0;
    }
    if (event.which === KEY.W) {
      console.log("W pressed");
      walker.speedY = -5;
      walker.speedX = 0;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT) {
      walker2.speedX = 0;
    }
    if (event.which === KEY.RIGHT) {
      walker2.speedX = 0;
    }
    if (event.which === KEY.UP) {
      walker2.speedY = 0;
    }
    if (event.which === KEY.DOWN) {
      walker2.speedY = 0;
    }
    if (event.which === KEY.A) {
      walker.speedX = 0;
    }
    if (event.which === KEY.D) {
      walker.speedX = 0;
    }
    if (event.which === KEY.W) {
      walker.speedY = 0;
    }
    if (event.which === KEY.S) {
      walker.speedY = 0;
    }
  }

  /* 
  the functions changeWalkerColor and changeWalker2Color were
    written in response to the bonus challenge "Make the player(s)
    change color when clicked on"
  */
  function changeWalkerColor() {
    var randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    $("#walker").css("background-color", randomColor);
  }

  function changeWalker2Color() {
    var randomColor2 = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    $("#walker2").css("background-color", randomColor2);
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem() {
    walker.positionX += walker.speedX;
    walker.positionY += walker.speedY;
    walker2.positionX += walker2.speedX;
    walker2.positionY += walker2.speedY;
  }

  function redrawGameItem() {
    $("#walker").css("left", walker.positionX);
    $("#walker").css("top", walker.positionY);
    $("#walker2").css("left", walker2.positionX);
    $("#walker2").css("top", walker2.positionY);
  }

  function wallCollision() {
    if (walker.positionX === -5) {
      walker.positionX -= walker.speedX;
    } else if (walker.positionX === $("#board").width() - 45) {
      walker.positionX -= walker.speedX;
    } else if (walker.positionY === -5) {
      walker.positionY -= walker.speedY;
    } else if (walker.positionY === $("#board").height() - 45) {
      walker.positionY -= walker.speedY;
    }
    if (walker2.positionX === -5) {
      walker2.positionX -= walker2.speedX;
    } else if (walker2.positionX === $("#board").width() - 45) {
      walker2.positionX -= walker2.speedX;
    } else if (walker2.positionY === -5) {
      walker2.positionY -= walker2.speedY;
    } else if (walker2.positionY === $("#board").height() - 45) {
      walker2.positionY -= walker2.speedY;
    }
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
