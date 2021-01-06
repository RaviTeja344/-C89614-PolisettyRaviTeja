function validateForm(){
    
    var uname=document.getElementById("uname");
    var pass=document.getElementById("pass");
    if(uname.value=="Ravi" && pass.value=="ravi123$"){
        return true;
    
    }
    else{
        alert("Wrong id or password");
        return false;
        
    
        
    }
}