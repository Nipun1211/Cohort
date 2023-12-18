/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    var hh = 0;
    var mm = 0;
    var ss = 0;
    
    setInterval(() => {
      console.log(`${hh.toString().padStart(2, '0')}:${mm.toString().padStart(2, '0')}:${ss.toString().padStart(2, '0')}`);
      ss++;
      if (ss == 60) {
        mm++;
        ss = 0;
        if (mm == 60) {
          mm = 0;
          hh++;
          if (hh == 24) {
            hh = 0;
            mm = 0;
            ss = 0;
          }
        }
      }
    }, 1000)
  }