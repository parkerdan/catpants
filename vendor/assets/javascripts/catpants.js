function strength(chars) {

    COUNTER = 0
  var blackList = ["password", "12345", "admin","master","11111","god", "supersecret"]
    if (chars.length > 7) {
      COUNTER ++  }
    if (/[a-z]/.test(chars) === true) {
      COUNTER ++  }
    if (/[A-Z]/.test(chars) === true) {
      COUNTER ++  }
    if (/[^a-zA-Z\d\s:]/.test(chars) === true) {
      COUNTER ++  }
    if (chars.length > 13) {
      COUNTER ++  }
    if (blackList.indexOf(chars.toLowerCase()) >= 0 ) {
      COUNTER = -1}

  switch (COUNTER) {
    case COUNTER = 0:
       return "Your password strength is not good... 😕"
      break;
     case COUNTER = 1:
       return "It is slowly getting better 😐"
       break;
     case COUNTER = 2:
       return "Keep going!  😏"
       break;
     case COUNTER = 3:
       return "Almost a good password  😳"
       break;
     case COUNTER = 4:
       return "Mine is usually this good  😊"
       break;
     case COUNTER = 5:
       return "I doubt anyone will ever guess this one  😻"
       break;
     case COUNTER = -1:
       return "Very funny...try harder!  Is this Tam?  🙀"
       break;
    default: return "Something"
  }
};

document.addEventListener("DOMContentLoaded", function(){

  var para = document.createElement("p");
  para.setAttribute("id","cat-message");
  var node = document.createTextNode("Your password strength is not good... 😕");
  para.appendChild(node);


  document.getElementById("catpants").appendChild(para);
  document.getElementById("cat-message").style.color="red";
  document.getElementById("cat-message").style.transition="color 2s";

  document.getElementById("password").onkeyup = function(event){
    event = event || window.event;
    var pw = document.getElementById("password").value;

    document.getElementById("cat-message").innerHTML= strength(pw);

    if ( COUNTER >= 4 ) {
        document.getElementById("cat-message").style.color="green";
    }
    if ( COUNTER < 4 ) {
        document.getElementById("cat-message").style.color="red";
    }
  }
});
