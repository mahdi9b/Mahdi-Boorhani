document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});




    const btn = document.getElementById("btn")
    btn.addEventListener("click",()=>{
      document.querySelector(".Add_user_btn").classList.add("show")
      document.querySelector(".back_user_btn").classList.remove("dis-none")
    })



    document.querySelector(".back_user_btn").addEventListener("click",()=>{
      document.querySelector(".Add_user_btn").classList.remove("show")
      document.querySelector(".back_user_btn").classList.add("dis-none")
    })

 

  });
