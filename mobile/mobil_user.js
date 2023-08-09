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

  setTimeout(function(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((json) => { 
      console.log(json)
  

      let html = ""


      for (const user  of json){
        html=html+`<tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.company.city}</td>
                    <td>${user.address.city}</td>
                    <td>
                      <i class="material-icons red-text">delete_forever</i>
                      <i class="material-icons yellow-text">create</i>
                    </td>
                  </tr>`

      }

      document.querySelector(".mamad").innerHTML = html
    })



  },0)
const inputname=document.getElementById("name12")
const inputemail=document.getElementById("email12")
const inputPhone=document.getElementById("Phone12")
const subbtn=document.querySelector(".sub")
var xhr=new XMLHttpRequest();
function newuser() {
  xhr.open("post","mahdi.txt",true)
  var params ="name="+inputname.value+"&"+"email="+inputemail.value+"&"+"phone="+inputPhone.value
  xhr.send(params)
  console.log("finish");

  
}

  
subbtn.addEventListener("click",newuser())