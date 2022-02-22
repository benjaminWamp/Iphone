window.onload=function(){
  var btn = document.getElementById("onoff");
  var off = document.getElementById("screen2");

  btn.addEventListener('click', function (event) {
      console.log(off);
      console.log(off.classList);
      off.classList.toggle('active');
  })
};