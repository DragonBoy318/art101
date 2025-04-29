// Lab 6 - Arrays and Objects
// Author: Gabriel Specht
// Date: 4/28/2025

let myTransport = ["bus" , "walking"];

let myMainRide = {
  make: "Toyota",
  model: "Coaster",
  color: "blue",
  year: 1969,
 age: function() {
    return 2025 - this.year;
  }
}

document.writeln("Methods of Transportation: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");