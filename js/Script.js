function verify(){
    var pass=document.getElementById('pass').value;
    var name=document.getElementById('name').value;
    if(pass=='admin' && name=='admin')
        window.location.href = "./index.html";
    
    console.log('click');
    console.log(pass);
    console.log(name);
}