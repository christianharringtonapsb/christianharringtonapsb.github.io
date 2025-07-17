/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;

  // Game Item Objects

  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL); // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on("eventType", handleEvent); // change 'eventType' to the type of event you want to handle
  $(document).on("keydown", handleKeyDown);
  $(document).on("keyup", handleKeyUp);

  const KEY = {
    W: 87,
    S: 83,
    UP: 38,
    DOWN: 40,
  };

  /* start here. create objects with properties that can
  be used to manipulate objects in the game
  below. Compare to index.js for the walker
  project. Consider the starting position of
  each paddle as identied in the index.css file.

  var rightPaddle = {
    positionX: ,
    positionY: ,
    speedX: 0,
    speedY: 0
  }

  var leftPaddle = {
    positionX: ,
    positionY: ,
    speedX: 0,
    speedY: 0
  }

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {}

  /* 
  Called in response to events.
  */
  function handleEvent(event) {}

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
