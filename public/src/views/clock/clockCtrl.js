angular.module("app")
  .controller("clockCtrl", function($scope, dbservice) {
    dbservice.getusers()
      .then(function(result) {
        $scope.user = result;
        console.log($scope.user);
      })

    // This is where my deathclock starts //

    // Set the date we're counting down to

    //////////////// uncomment this for the clock feature ti dsiplay ////////////////////

    var countDownDate = new Date("April 05, 2059 00:00:00").getTime();


    // Update the count down every 1 second
    var x = setInterval(function() {

      // Get todays date and time
      var now = new Date().getTime();

      // Find the distance between now an the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 364))
      var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 364)) / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"
      document.getElementById("YYYYMM").innerHTML = years + " Year(s), " + days + " Day(s)";
      document.getElementById("HHMMSS").innerHTML = hours + ":" + minutes + ":" + seconds;

      // If the count down is over, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);

    // This is the break on the timer //
    ////////////////////////////////////



  })
