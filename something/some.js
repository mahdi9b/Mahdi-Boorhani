var btn_left = document.getElementsByClassName("next_btn")[0]
var btn_left_2 = document.getElementsByClassName("next_btn")[1]
var btn_right = document.getElementsByClassName("last_btn")[0]
var btn_right_2 = document.getElementsByClassName("last_btn")[1]
var div1 = document.getElementsByClassName("div1")[0]
var div2 = document.getElementsByClassName("div1")[1]
var box1  =document.getElementsByClassName("boxes1")[0]
var box2  =document.getElementsByClassName("boxes2")[0]
//////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, {});
});

//////////////////////////////////////////////////////////////////////////////

var signintab = document.querySelector(".sign_up_mian")
var signinbtns = document.querySelectorAll(".sign_up_mian_signup_signup")
var background = document.querySelector(".backgrounds")
signinbtns.forEach(signinbtn => {
signinbtn.addEventListener("click",()=>{
  signintab.classList.add("showing")
  background.classList.remove("dis-none")
})
background.addEventListener("click",()=>{
  background.classList.add("dis-none")
  signintab.classList.remove("showing")
})
});

var signintab2 = document.querySelector(".sign_up_mian_signin")
var signinbtns2 = document.querySelectorAll(".sign_up_mian_signin_signin")
var background = document.querySelector(".backgrounds")
signinbtns2.forEach(signinbtn2 => {
signinbtn2.addEventListener("click",()=>{
  signintab2.classList.add("showing")
  background.classList.remove("dis-none")
})
background.addEventListener("click",()=>{
  background.classList.add("dis-none")
  signintab2.classList.remove("showing")
})
});
//////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {});
});
