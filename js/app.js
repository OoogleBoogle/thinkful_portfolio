

document.addEventListener('DOMContentLoaded', function() {
  var mg = document.getElementById('midground');
  var body = document.body;

  var pos = {
    x : 0,
    y : 0
  }

  mg.onmousemove = function(e) {
    pos.x = e.clientX;
    pos.y = e.clientY;
  }

  window.setInterval(mgMove, 50);
  window.setInterval(bgMove, 50);

  function mgMove() {
    mg.style.backgroundPositionX = (pos.x / 90) + "px";
    mg.style.backgroundPositionY = (pos.y / 90) + "px";
  };

  function bgMove() {
    body.style.backgroundPositionX = (pos.x / 200) + "px";
    body.style.backgroundPositionY = (pos.y / 200) + "px";
  }
});

function log() {
  console.log('hello');
}