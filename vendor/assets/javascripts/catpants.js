function strength(chars) {

   cOUntEr = 0
  var blackList = ["password", "12345", "admin","master","11111","god", "supersecret"]
    if (chars.length > 7) {
      cOUntEr ++  }
    if (/[a-z]/.test(chars) === true) {
      cOUntEr ++  }
    if (/[A-Z]/.test(chars) === true) {
      cOUntEr ++  }
    if (/[^a-zA-Z\d\s:]/.test(chars) === true) {
      cOUntEr ++  }
    if (chars.length > 13) {
      cOUntEr ++  }
    if (blackList.indexOf(chars.toLowerCase()) >= 0 ) {
      cOUntEr = -1}

  switch (cOUntEr) {
    case cOUntEr = 0:
       return "Your password strength is not good... 😕"
      break;
     case cOUntEr = 1:
       return "It is slowly getting better 😐"
       break;
     case cOUntEr = 2:
       return "Keep going!  😏"
       break;
     case cOUntEr = 3:
       return "Almost a good password  😳"
       break;
     case cOUntEr = 4:
       return "Mine is usually this good  😊"
       break;
     case cOUntEr = 5:
       return "I doubt anyone will ever guess this one  😻"
       break;
     case cOUntEr = -1:
       return "Very funny...try harder!  Is this Tam?  🙀"
       break;
    default: return "Something"
  }
};

$(document).ready(function(){
  $(".catpants").after("<p id='cat-message'>Your password strength is not good... 😕</p>");
  $("#cat-message").css({
    'color' : 'red',
    'transition' : 'color 2s'
  });

  $(".catpants").siblings('input').on("keyup", function(){
            $("#cat-message").html(strength($(this).val()));

            if ( cOUntEr >= 4 ) {
                $("#cat-message").css("color","green");
            }
            if ( cOUntEr < 4 ) {
                $("#cat-message").css("color","red");
            }
    });
});
