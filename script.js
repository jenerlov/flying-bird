window.onload = start
/**
 * The positon of the bird relative to the left side of the page.
 */
let left = 0;

/** Starts the program on page load.*/
function start() {
    fly();
   //moveBirdToTheRight();
  // testForLoop();
   
}
/** Sets an interval to make the bird "fly". */
function fly() {
    setInterval(moveBirdToTheRight, 10)
}
/** Moves the bird a small step in percentage to the right. */
function moveBirdToTheRight() {
   //fetch bird from html
    const bird = document.querySelector('img');
    console.log(bird);
    //update position
    left += 0.2;
    //render position
    bird.style.left = left + '%';
}

/*
function testForLoop() {
    console.time('loop');

    const interations = 1000;
    for (let i = 0;  i <iterations; i++) {
        //do nothing
    }

        console.timeEnd('loop')
}
*/