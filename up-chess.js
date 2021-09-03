 var countDownDAte = new Date("SEP 15, 2021 ").getTime();
    var Y = setInterval(function() {
      var now = new Date().getTime();
       var distance = countDownDAte - now;
                
              // Time calculations for days, hours, minutes and seconds
              var days = Math.floor(distance / (1000 * 60 * 60 * 24));
              var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                
             
              document.getElementById("demoo").innerHTML =  days + "d " + hours + "h "
              + minutes + "m " + seconds + "s "   +"LEFT" ;
                
              
              if (distance < 0) {
                clearInterval(Y);
                document.getElementById("demoo").innerHTML = "EXPIRED";
              }
            }, 1000);
         