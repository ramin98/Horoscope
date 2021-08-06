$( ".login" ).click(function() {
  $( ".log-in-window-container" ).css({"display": "flex"})
});

$(document).mouseup(function (e){ 
    var div = $(".log-in-window-container"); 
    var div_second = $(".sign-up-window-container"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) { 
      div.fadeOut(); 
    }
    if (!div_second.is(e.target) 
        && div_second.has(e.target).length === 0) { 
      div_second.fadeOut(); 
    }
  });


$( ".sign-up-in-login-href" ).click(function() {
  $( ".log-in-window-container" ).fadeOut()
  $( ".sign-up-window-container" ).css({"display": "flex"})
  
});


$( ".login-href" ).click(function() {
    $( ".sign-up-window-container").fadeOut()
  $( ".log-in-window-container" ).css({"display": "flex"})
});

$( ".taurus" ).click(function() {
  $( ".taurus" ).css({"display": "block"})
});

$( ".pisces" ).click(function() {
  $( ".pisces" ).css({"display": "block"})
});

$( ".sagittarius" ).click(function() {
  $( ".sagittarius" ).css({"display": "block"})
});

$( ".aries" ).click(function() {
  $( ".aries" ).css({"display": "block"})
});

$( ".gemini" ).click(function() {
  $( ".gemini" ).css({"display": "block"})
});

$( ".cancer" ).click(function() {
  $( ".cancer" ).css({"display": "block"})
});

$( ".virgo" ).click(function() {
  $( ".virgo" ).css({"display": "block"})
});

$( ".leo" ).click(function() {
  $( ".leo" ).css({"display": "block"})
});

$( ".libro" ).click(function() {
  $( ".libro" ).css({"display": "block"})
});

$( ".scorpio" ).click(function() {
  $( ".scorpio" ).css({"display": "block"})
});

$( ".aquarius" ).click(function() {
  $( ".aquarius" ).css({"display": "block"})
});

$( ".capricorn" ).click(function() {
  $( ".capricorn" ).css({"display": "block"})
});

