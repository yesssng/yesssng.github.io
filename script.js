var countDownDate = new Date("Nov 4, 2023 16:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days  + " күн " + hours + " сағат "
  + minutes + " минут " + seconds + " секунд ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

on_button.onclick = function(){
    document.querySelector('audio').play();
    on_button.style.visibility = "hidden";
    off_button.style.visibility = "visible";
}

off_button.onclick = function(){
  document.querySelector('audio').pause();
  off_button.style.visibility = "hidden";
  on_button.style.visibility = "visible";
}

