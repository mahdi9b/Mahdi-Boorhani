
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
var commentback = document.querySelector(".comment_back")
var btndanger = document.querySelector(".btn-danger")
var btncomment = document.querySelector(".comment_Saver")
var form = document.querySelector(".form")
btncomment.addEventListener("click",()=>{
    commentback.classList.remove("dis-none")
})
btndanger.addEventListener("click",()=>{
    commentback.classList.add("dis-none")
})
btnprimary.addEventListener("submit",()=>{
    commentback.classList.add("dis-none")
})


  