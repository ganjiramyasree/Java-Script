/*document.querySelectorAll(".btn").forEach(function(btn) {
  btn.addEventListener("mouseover", function() {
    const top = Math.random() * 500 + "px";
    const left = Math.random() * 500 + "px";
    const style = `top: ${top}; left: ${left}; position: absolute;`;
    btn.setAttribute("style", style);
  });
});*/

$(".btn").mouseover(function(){
     $(this).css({
      top : Math.random() * 500 + "px",
      left : Math.random() * 500 + "px",
      position:"absolute"
     });
});
