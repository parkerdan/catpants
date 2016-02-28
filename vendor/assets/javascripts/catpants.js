function strength(chars) {
  var COUNTER = 0
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
       return {sentence:"Your password strength is not good...  ",
               emoji: String.fromCharCode(0xD83D, 0xDE1E),
               color: 'red'}
      break;
     case COUNTER = 1:
       return {sentence:"It is slowly getting better  ",
               emoji: String.fromCharCode(0xD83D, 0xDE0F),
               color:'red'}
       break;
     case COUNTER = 2:
       return {sentence:"Keep going  ",
               emoji: String.fromCharCode(0xD83D, 0xDE40),
               color: 'orange'}
       break;
     case COUNTER = 3:
       return {sentence:"Almost a good password  ",
               emoji: String.fromCharCode(0xD83D, 0xDE01),
               color: 'orange'}
       break;
     case COUNTER = 4:
       return {sentence:"Mine is usually this good  ",
               emoji: String.fromCharCode(0xD83D, 0xDE0A) + String.fromCharCode(0xD83D, 0xDE18),
               color: 'green'}
       break;
     case COUNTER = 5:
       return {sentence:"I doubt anyone will guess this  ",
               emoji: String.fromCharCode(0xD83D, 0xDE3B) + String.fromCharCode(0xD83D, 0xDE3D),
               color: 'green'}
       break;
     case COUNTER = -1:
       return {sentence:"Very funny....is this Tam?  ",
               emoji: String.fromCharCode(0xD83D, 0xDE1C) + String.fromCharCode(0xD83D, 0xDE1D),
               color: 'blue'}
       break;
    default: return "Something"
  }
};

document.addEventListener("DOMContentLoaded", function(){

  var para = document.createElement("p");
  para.setAttribute("id","cat-message");
  var node = document.createTextNode("");
  para.appendChild(node);
  document.getElementById("catpants").appendChild(para);

  document.getElementById("cat-message").style.color="red";
  document.getElementById("cat-message").style.transition="color 2s";
  document.getElementById("cat-message").innerHTML = "Your password strength is not good... <span id='emoji' style='color:black;font-weight:normal;'>" + String.fromCharCode(0xD83D, 0xDE1E) + "</span>" ;


  document.getElementById("password").onkeyup = function(event){
    event = event || window.event;
    var pw = document.getElementById("password").value;
    var responseObject = strength(pw);

    document.getElementById("cat-message").innerHTML= responseObject.sentence + "<span id='emoji' style='color:black;font-weight:normal;'>" + responseObject.emoji + "</span>";
    document.getElementById("cat-message").style.color=responseObject.color;
  }
});
