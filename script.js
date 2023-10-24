/* Teas Code - global-scoped function
function updateGlobalTime() {
  // function-scoped variables
  let utcTime = document.getElementById("utc-time");
  // Calculate UTC time
  const utcHours = new Date().getUTCHours();
  const utcMinutes = new Date().getUTCMinutes();
  const utcSeconds = new Date().getUTCSeconds();

  // checks if UTC hours is greater than 12 or less than 12
  // if utcHours > 12 = true, use 'PM'
  // else, use 'AM'
  const utcAmPm = utcHours >= 12 ? 'PM' : 'AM';

  // modulo will determine what hours in a day are remaining in a 24-hour format, then use those remaining hours to represent the current hour
  // If utcHours is between 0 and 11 (inclusive), it's AM.
  // If utcHours is between 12 and 23 (inclusive), it's PM.
  // the appropriate algorithm to convert 24-hour time to 12-hour time is
  // utcHours % 12
  // for example, if utcHours is 8, it's 8AM
  // however, if utcHours is 15, it's 6PM
  // below, we are checking if there is a remainder, and there isn't,
  // meaning utc % 12 = 0, it is technically midnight, so we use 12.
  const utc12Hour = utcHours % 12 || 12;

  // Format the time strings
  const utcTimeStr = `${utc12Hour}:${utcMinutes}:${utcSeconds} ${utcAmPm}`;

  // Update the HTML
  utcTime.textContent = `UTC Time: ${utcTimeStr}`;
}

function startGlobalTimer() {
    // Update the time every second
    setInterval(updateGlobalTime, 1000);
}

let button = document.getElementById("globalTimerButton");

button.addEventListener('click', startGlobalTimer); */

// Local Time

// adding a function that gets the Local Time by pressing button
function updateLocalTime() {
  // identifying the div where local time will be added to, will show up next to button
  let pstTime = document.getElementById("local-time");
  
  // Get local time from computer?
  var localTime = new Date();
  var pstHours = localTime.getHours();
  var pstMinutes = localTime.getMinutes();
  var pstSeconds = localTime.getSeconds();

  // Format the time strings
  const pstTimeStr = `${pstHours}:${pstMinutes}:${pstSeconds}`;

  pstTime.textContent = `PST Time: ${pstTimeStr}`;
  }

  function startLocalTimer() {
    // Update the time every second so it changes on the screen
    setInterval(updateLocalTime, 1000);
  }


  let button = document.getElementById("LocalTimerButton");

// I get an error saying that addEventListener cannot read properties of null - i am guessing this is because the updateLocalTime function is null. It looks like I am doing something wrong with that function, but I cannot tell what it is. I will go to office hours!
 button.addEventListener("click", startLocalTimer);
