$(document).ready(function(){
  $("p").text("Miło mi Cię gościć!");
});
/*$(document).ready(function(){
  $("p").css("color", "green");
  $("p").hide(3000);
  $("p").show(3000);
});*/

$(document).ready(function(){
  $("p").css("color", "green").hide(3000).show(3000);
});

$(document).ready(function(){
  $("#login").click(function(event){
    event.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var password = $("#password").val();
    $("#contact-right").html(name + "<br>" + email +"<br>" + password);
  })

  /* Przejścia przy wczytywaniu strony */
  $("h1, h2, h3, h4, a, img, form, button").hide().fadeIn(2000);
});
