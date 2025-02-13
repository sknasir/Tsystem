

$(document).ready(()=>{

    $("button").click (()=>{
     let email=$("#email").val();
     let password=$("#password").val();

     console.log("log");

     if(validate(email,password)){
        console.log("call");
        
        $("#message").html("Welcome");

     }
     else{
        $("#message").html("Invalid");
     }

    })

})

