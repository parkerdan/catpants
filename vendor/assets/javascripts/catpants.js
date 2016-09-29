function strength(chars) {
  var counter = 0
  var blackList = ["password", "12345", "admin","master","11111","god", "supersecret"]
    if (chars.length > 7) {
      counter ++  }
    if (/[a-z]/.test(chars) === true) {
      counter ++  }
    if (/[A-Z]/.test(chars) === true) {
      counter ++  }
    if (/[^a-zA-Z\d\s:]/.test(chars) === true) {
      counter ++  }
    if (chars.length > 13) {
      counter ++  }
    if (blackList.indexOf(chars.toLowerCase()) >= 0 ) {
      counter = -1}

  switch (counter) {
    case counter = 0:
       return {sentence:"Your password strength is not good...  ",
               emoji: String.fromCharCode(0xD83D, 0xDE1E),
               color: 'red'}
      break;
     case counter = 1:
       return {sentence:"It is slowly getting better  ",
               emoji: String.fromCharCode(0xD83D, 0xDE0F),
               color:'red'}
       break;
     case counter = 2:
       return {sentence:"Keep going  ",
               emoji: String.fromCharCode(0xD83D, 0xDE40),
               color: 'orange'}
       break;
     case counter = 3:
       return {sentence:"Almost a good password  ",
               emoji: String.fromCharCode(0xD83D, 0xDE01),
               color: 'orange'}
       break;
     case counter = 4:
       return {sentence:"Mine is usually this good  ",
               emoji: String.fromCharCode(0xD83D, 0xDE0A) + " " + String.fromCharCode(0xD83D, 0xDE18),
               color: 'green'}
       break;
     case counter = 5:
       return {sentence:"I doubt anyone will guess this  ",
               emoji: String.fromCharCode(0xD83D, 0xDE3B) + " " +  String.fromCharCode(0xD83D, 0xDE3D),
               color: 'green'}
       break;
     case counter = -1:
       return {sentence:"Very funny....is this Tam?  ",
               emoji: String.fromCharCode(0xD83D, 0xDE1C) + " " +  String.fromCharCode(0xD83D, 0xDE1D),
               color: 'blue'}
       break;
    default: return "Something"
  }
};

function bind_click(i){
  document.getElementsByClassName("catpants-password")[i].onkeyup = function(event){
    event = event || window.event;
    var pw = document.getElementsByClassName("catpants-password")[i].value;
    var responseObject = strength(pw);

    document.getElementById("cat-message" + i).innerHTML= responseObject.sentence + "<span id='emoji' style='color:black;font-weight:normal;'>" + responseObject.emoji + "</span>";
    document.getElementById("cat-message" + i).style.color=responseObject.color;
  }
};

var listener = (window.Turbolinks) ? "page:change":"DOMContentLoaded";

document.addEventListener(listener, function(){


  if (document.getElementsByClassName("catpants")) {
    var ELEMENTS = document.getElementsByClassName("catpants");
    for (var i = 0; i < ELEMENTS.length; i++) {
      var para = document.createElement("p");
      para.setAttribute("id","cat-message" + i);
      var node = document.createTextNode("");
      para.appendChild(node);
      ELEMENTS[i].appendChild(para);
      document.getElementById("cat-message" + i).style.color="red";
      document.getElementById("cat-message" + i).style.transition="color 2s";
      document.getElementById("cat-message" + i).innerHTML = "Your password strength is not good... <span id='emoji' style='color:black;font-weight:normal;'>" + String.fromCharCode(0xD83D, 0xDE1E) + "</span>" ;
    };
    if (document.getElementsByClassName("catpants-password")) {
      var INPUTS = document.getElementsByClassName("catpants-password");
      console.log(INPUTS);
      for (var i = 0; i < INPUTS.length; i++) {
        bind_click(i);

      }
    };
  };
});
//  bundle exec rake release
