var password =document.getElementById("psw"),
confirm_psw =document.getElementById("confirm-psw");
function validatePassword(){
    if(password.value !=confirm_psw.value){
        confirm_psw.setCustomValidity("Password and Confirm Password must be the same!");
    }
    else{
        confirm_psw.setCustomValidity('');
    }

}

password.onchange = validatePassword;
confirm_psw.onkeyup = validatePassword;


var email =document.getElementById("email"), 
confirm_email = document.getElementById("confirm-email");

function validateEmail(){
    if (email.value != confirm_email.value){
        confirm_email.setCustomValidity("Email and Confirm Email don't match")
    }
    else{
        confirm_email.setCustomValidity('');
    }
}
email.onchange =validateEmail;
confirm_email.onkeyup=validateEmail;

function password_show_hide() {
    var x = document.getElementById("psw");
    var show_eye = document.getElementById("show_eye");
    var hide_eye = document.getElementById("hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }

  function confirm_password_show_hide() {
    var x = document.getElementById("confirm-psw");
    var show_eye = document.getElementById("confirm_show_eye");
    var hide_eye = document.getElementById("confirm_hide_eye");
    hide_eye.classList.remove("d-none");
    if (x.type === "password") {
      x.type = "text";
      show_eye.style.display = "none";
      hide_eye.style.display = "block";
    } else {
      x.type = "password";
      show_eye.style.display = "block";
      hide_eye.style.display = "none";
    }
  }


  $(document).ready(function () {  
    $('#psw').keyup(function () {  
        $('#strengthMessage').html(checkStrength($('#psw').val()))  
    })  
    function checkStrength(password) {  
        var strength = 0  
        if (password.length < 6) {  
            $('#strengthMessage').removeClass()  
            $('#strengthMessage').addClass('Short')  
            return 'Too short Password'  
        }  
        if (password.length > 7) strength += 1  
        // If password contains both lower and uppercase characters, increase strength value.  
        if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1  
        // If it has numbers and characters, increase strength value.  
        if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1  
        // If it has one special character, increase strength value.  
        if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1  
        // If it has two special characters, increase strength value.  
        if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1  
        // Calculated strength value, we can return messages  
        // If value is less than 2  
        if (strength < 2) {  
            $('#strengthMessage').removeClass()  
            $('#strengthMessage').addClass('Weak')  
            return 'Weak Password'  
        } else if (strength == 2) {  
            $('#strengthMessage').removeClass()  
            $('#strengthMessage').addClass('Good')  
            return 'Good Password'  
        } else {  
            $('#strengthMessage').removeClass()  
            $('#strengthMessage').addClass('Strong')  
            return 'Strong Password'  
        }  
    }  
});

document.getElementById("submit").addEventListener("click",function(){
    var male=document.getElementById("male");
    var female=document.getElementById("female");
    var other=document.getElementById("other");
    var gender = document.getElementById("gender")
    if(!male.checked && !female.checked &&!other.checked) {
      $("#gender").addClass('red').html('Please choose your gender')
        
    }
    else if (male.checked || female.checked || other.checked) {
        $("#gender").removeClass('red').html('') 
    }
   
});