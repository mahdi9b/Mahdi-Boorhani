document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });
var signbtn = document.getElementsByClassName("sign");

signbtn.addEventListener("click",sign())






function sign() {
  document.querySelector(".signup").classList.add("up")
  
}