function validateForm() {
  var ad = document.forms["myForm"]["name"];
  var mail = document.forms["myForm"]["email"];
  var mesaj = document.forms["myForm"]["message"];

  if (ad.value == "") {
    document.getElementById('errorname').innerHTML = "Lütfen Adınızı giriniz";
    ad.focus();
    return false;
  } else {
    document.getElementById('errorname').innerHTML ="";
  }

  if (mail.value == "") {
    document.getElementById('erroremail').innerHTML =
      "Lütfen mailinizi giriniz";
    mail.focus();
    return false;
  } else {
    document.getElementById('erroremail').innerHTML = "";
  }

  if (mail.value.indexOf("@", 0) < 0) {
    document.getElementById('erroremail').innerHTML =
      "Lütfen mailinizi giriniz";
    mail.focus();
    return false;
  }

  if (mail.value.indexOf(".", 0) < 0) {
    document.getElementById('erroremail').innerHTML =
      "Lütfen mailinizi giriniz";
    mail.focus();
    return false;
  }

  if (mesaj.value == "") {
    document.getElementById('errormsg').innerHTML = "Lütfen Mesajınızı giriniz";
    mesaj.focus();
    return false;
  } else {
    document.getElementById('errormsg').innerHTML = "";
  }
}
