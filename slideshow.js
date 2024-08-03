$( document ).ready(function() {
    $("#right-image > div:gt(0)").hide();
    setInterval(function() { 
    $('#right-image > div:first')
    .fadeOut(2000)
    .next()
    .fadeIn(2000)
    .end()
    .hide()
    .appendTo('#right-image');
    }, 5000);

    function myFunction(x) {
      if (x.matches) { // If media query matches
      } else {
        document.querySelectorAll("#slide1 img")[0].title="Statue of Unity";
        document.querySelectorAll("#slide2 img")[0].title="Hutheesing Jain Temple";
        document.querySelectorAll("#slide3 img")[0].title="Kankaria Lake";
        document.querySelectorAll("#slide4 img")[0].title="PDEU Campus";
        document.querySelectorAll("#slide5 img")[0].title="PDEU Lab";
        document.querySelectorAll("#slide6 img")[0].title="Kite Festival, Kutch";
        document.querySelectorAll("#slide7 img")[0].title="Sun Temple";
        document.querySelectorAll("#slide8 img")[0].title="Narendra Modi Stadium";
        document.querySelectorAll("#slide9 img")[0].title="PDEU D-Block";
      }
    }


    var x = window.matchMedia("(max-width: 600px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes
});