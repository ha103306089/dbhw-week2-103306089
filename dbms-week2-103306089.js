
function minus() {
  if (document.getElementById("num")) {
    var curr = parseInt(document.getElementById("num").innerHTML);
  }

  if (curr && curr <= 120) {

    if (curr <= 10) {
      document.getElementById("num").innerHTML = "0" + (curr - 1);
    } else {
      document.getElementById("num").innerHTML = curr - 1;
    }
  } else {
    document.getElementById("num").innerHTML = 120;
  }

  setTimeout(function() {
    minus();
  }, 1000);
};
minus();
