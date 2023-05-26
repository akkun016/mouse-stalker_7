$(function(){
  let mouseX = 0, mouseY = 0;
  let stalkerX = 0, stalkerY = 0;
  const stalker = $(".mouse-stalker");
  
  $(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    console.log(mouseX + ":" + mouseY);
  });
  
  setInterval(function() {
    stalkerX += (mouseX - stalkerX) / 12;
    stalkerY += (mouseY - stalkerY) / 12;
    stalker.css({ left: stalkerX + "px", top: stalkerY + "px" });
  }, 10);
})
