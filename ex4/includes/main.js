  $(document).ready(function() {    $('#mybutton').delay(3000).fadeIn(500);
  });
  var plut = 0;
  var nep = 0;
  var ura = 0;
  var jup = 0;
  var mar = 0;
  var ven = 0;
  var sunny = 0;
  var mer = 0;
  var ear = 0;
  var moll = 0;

  function chbg(visibility) {
    document.getElementById('plutB').style.visibility = visibility;
     plut = 1;
} 

  function nepbg(visibility) {
    if (plut == 1){
    document.getElementById('nepB').style.visibility = visibility;
    nep = 1;
  }
} 

  function urabg(visibility) {
    if (nep == 1){
    document.getElementById('uraB').style.visibility = visibility;
    ura = 1;
  }
} 

  function satbg(visibility) {
    if (ura == 1){
    document.getElementById('satB').style.visibility = visibility;
    jup = 1;
  }
} 

  function jupbg(visibility) {
    if (jup == 1){
    document.getElementById('jupB').style.visibility = visibility;
    mar = 1;
  }
} 

  function marbg(visibility) {
    if (mar == 1){
    document.getElementById('marB').style.visibility = visibility;
    ven = 1;
  }
}

  function venbg(visibility) {
     if (ven == 1){
    document.getElementById('venB').style.visibility = visibility;
    moll = 1;
  }
}

  function mollbg(visibility) {
    if (moll == 1){
    document.getElementById('mollB').style.visibility = visibility;
    sunny = 1;
  }
}

  function sunnybg(visibility) {
    if (sunny == 1){
    document.getElementById('sunnyB').style.visibility = visibility;
    mer = 1;
  }
}

  function merbg(visibility) {
    if (mer == 1){
    document.getElementById('merB').style.visibility = visibility;
    ear = 1;
  }
}

  function earbg(visibility) {
    if (ear == 1){
    document.getElementById('earB').style.visibility = visibility;
  }
}

var err;
function validateForm(form) {
    var x = document.forms["myForm"]["fullName"].value;
    if (x == "" || x.includes(" ")) {
        err=document.createElement("H3");
        err.innerText="Error: Full name cannot contain space!";
        err.style.position = "absolute";
        err.style.top = "600px";
        err.style.left = "580px";
        form.appendChild(err);
        return false;
    }
          if(x.includes("d") && x.includes("a"))
        {return true;}
      else {
        err=document.createElement("H3");
        err.innerText="Error: Full name must include the letters a and d !";
        err.style.position = "absolute";
        err.style.top = "600px";
        err.style.left = "520px";
        form.appendChild(err);
      return false;
    }
}