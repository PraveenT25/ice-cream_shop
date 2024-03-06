function authenticateuser(){
    let username=document.getElementById("un").value 
    let password=document.getElementById("pass").value 
    if(username=="Praveen"&&password=="Pavvi123"||username=="Rahul"&&password=="Rahul"||username=="Shrusti"&&password=="Shrusti"){
        alert("WELCOME!  "+username)
        window.location.href = './index.html'
    }
    else
       alert("Acess Denied!!")
}
/*let username=document.getElementById("un");

function user(){
    var user1 = "welcome" + un;
    return user1
}
console.log.(user());*/