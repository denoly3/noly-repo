            document.getElementById("mybutton").addEventListener("click", function() {
              document.getElementById("demo").innerHTML = "Hello mr. Customer";  
            });

           document.getElementById('theme-toggle').addEventListener('click', function() {
                document.body.classList.toggle('dark-mode');
            });

            document.getElementById("change").addEventListener("click", function() {
                document.getElementById("demo2").style.fontSize = "20px";
            });

             document.getElementById("hide").addEventListener("click", function() {
                document.getElementById("demo2").style.display = "none";
            });

              document.getElementById("show").addEventListener("click", function() {
                document.getElementById("demo2").style.display = "block";
             });                            
