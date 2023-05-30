$(function(){
  let mouseX = 0;
  let mouseY = 0;
  let stalkerX = 0;
  let stalkerY = 0;
  const stalker = $(".mouse-stalker");
  
  $(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });
  
  setInterval(function() {
    stalkerX += (mouseX - stalkerX) / 12;
    stalkerY += (mouseY - stalkerY) / 12;
    stalker.css({ left: stalkerX + "px", top: stalkerY + "px" });
  }, 10);
})
