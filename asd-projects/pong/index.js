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
  below. Create objects for leftPaddle,
  rightPaddle, and ball using a factory
  function. In the factory function, assign values
  to properties using JQuery references to avoid
  hard coding imaginary numbers (numbers without
  obvious meaning). Compare to index.js for the walker
  project to know what properties need to be included
  in the factor function. Refernce index.css to assist
  with knowing what properties to include.
  */

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
