var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("pythonBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 90) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

var j = 0
function move1() {
    if (j == 0) {
      j = 1;
      var elem = document.getElementById("javascriptBar");
      var width = 1;
      var id = setInterval(frame, 10);
      function frame() {
        if (width >= 80) {
          clearInterval(id);
          j = 0;
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width + "%";
        }
      }
    }
  }
  
  var k = 0
  function move2() {
      if (k == 0) {
        k = 1;
        var elem = document.getElementById("htmlBar");
        var width = 1;
        var id = setInterval(frame, 10);
        function frame() {
          if (width >= 75) {
            clearInterval(id);
            k = 0;
          } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
          }
        }
      }
    }

    var l = 0
    function move3() {
        if (l == 0) {
          l = 1;
          var elem = document.getElementById("mlBar");
          var width = 1;
          var id = setInterval(frame, 10);
          function frame() {
            if (width >= 75) {
              clearInterval(id);
              l = 0;
            } else {
              width++;
              elem.style.width = width + "%";
              elem.innerHTML = width + "%";
            }
          }
        }
      }

      var m = 0
      function move4() {
          if (m == 0) {
            m = 1;
            var elem = document.getElementById("javaBar");
            var width = 1;
            var id = setInterval(frame, 10);
            function frame() {
              if (width >= 70) {
                clearInterval(id);
                m = 0;
              } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
              }
            }
          }
        }
window.onload = function() {
    move();
    move1();
    move2();
    move3();
    move4();
   }
