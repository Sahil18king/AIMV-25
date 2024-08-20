
var countDownDate = new Date("Aug 16, 2025 09:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  if(days<10)
  {
    document.getElementById("days").innerHTML="0"+days;
  }
  else
  {
    document.getElementById("days").innerHTML=days;
  }
  if(hours<10)
  {
    document.getElementById("hours").innerHTML="0"+hours;
  }
  else
  {
    document.getElementById("hours").innerHTML=hours;
  }
  if(minutes<10)
  {
    document.getElementById("minutes").innerHTML="0"+minutes;
  }
  else
  {
    document.getElementById("minutes").innerHTML=minutes;
  }
  if(seconds<10)
  {
    document.getElementById("seconds").innerHTML="0"+seconds;
  }
  else
  {
    document.getElementById("seconds").innerHTML=seconds;
  }
    
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML="00";
    document.getElementById("hours").innerHTML="00";
    document.getElementById("minutes").innerHTML="00";
    document.getElementById("seconds").innerHTML="00";
  }
}, 1000);

