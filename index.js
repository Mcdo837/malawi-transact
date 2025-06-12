let submit = document.getElementById("submit");

 submit.onclick = function(){
    let username = document.getElementById("username").value;
    document.getElementById("output").textContent =`hello ${username}
    this website is not complete please try again later`;
 }