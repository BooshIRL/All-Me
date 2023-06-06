let x;
x = 3 * 4;
document.getElementById("demo").innerHTML = "3 * 4 = " + x;

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }