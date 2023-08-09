const a=document.getElementById("1")
const b=document.getElementById("2")
const c=document.getElementById("3")



function z() {

    var xml = new XMLHttpRequest();
    xml.open("get","my_information.json",true);
    xml.onload=function () {
        console.log(xml.response);
        var v=JSON.parse(xml.response)
        a.innerHTML=v.username
        b.innerHTML=v.age
        c.innerHTML=v.password
    }
    xml.send();
};

    
z()