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

$(document).ready(function(){
  $(".catpants").after("<p id='cat-message'>Your password strength is not good... 😕</p>");
  $("#cat-message").css({
    'color' : 'red',
    'transition' : 'color 3s'
  });

  $(".catpants").on("keyup", function(){
            $("#cat-message").html(strength($(this).val()));

            if ( COUNTER >= 4 ) {
                $("#cat-message").css("color","green");
            }
            if ( COUNTER < 4 ) {
                $("#cat-message").css("color","red");
            }
    });
});
