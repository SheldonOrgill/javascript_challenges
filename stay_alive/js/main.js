/


        // Set the date we're counting down to
        var countdown = new Date("Aug 28, 2019 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now and the count down date 
        var distance = countdown - now;
        
        /
        var seconds = Math.floor((distance % (1000 * 16)) / 1000);
        
        // Output the result in an element with id="demo"
        document.getElementById("countdown").innerHTML = seconds + "s ";
        
        }, 1000);