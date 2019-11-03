btnLogin.onclick=function(){
    req1 = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + inptNetID.value + "&j_password=" + inptPassword.value);

if (req1.status == 200) { //everything worked.  
  lblResponse.value = "Your LDAP return code was " + req1.responseText
  // 1 good 0 bad
  if (req1.responseText == 1) {
    ChangeForm(favFoods)
  } else if (req1.responseText == 0) {
    lblResponse.value = "Your login info is invalid."
  }
} else if (req1.responseText == 0) {
  // had a problem with the AJAX request.
  lblResponse.value = "Error: " + req1.status;
}
}

btnFood.onclick=function(){
  ChangeForm(favFoods)
}
