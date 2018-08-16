$(function(){
  $('.input').on('click',function(){
    $(".header-form-container").slideDown();
    $(".input").slideUp(700);
    $(".icon_slide").fadeIn();
    $(".bury_box").fadeIn(1000);
    $(".capsule").fadeOut(500);
    $(".icon_delate").slideUp();
    $(".message_del").slideUp(600);
    $(".message_del_but").slideUp(600);
  })
})

$(function(){
  $('.icon_delate').on('click',function(){
    $(".message_del").slideDown(600);
    $(".message_del_but").slideDown(600);
  })
})

$(function(){
  $('.slidein').on('click',function(){
    $(".header-form-container").slideUp(600);
    $(".input").slideDown();
    $(".icon_slide").fadeOut(500);
    $(".bury_box").fadeOut(500);
  })
})

$(function(){
$('.icon_fade').on('click',function(){
    $(".capsule").fadeOut(500);
    $(".icon_delate").slideUp();
    $(".message_del").slideUp(600);
    $(".message_del_but").slideUp(600);
  })
})

$(function(){
  $('.bury').on('click',function(){
    $(".bury_box").fadeTo(300,0.1);
    $(".header-form-container").slideUp(1000);
    $(".input").slideDown();
    $(".icon_slide").fadeOut(500);
  })
})

$(function(){
  var match = location.search.match(/id=(.*?)(&|$)/);
  console.log(match);

  if(match) {
      id = decodeURIComponent(match[1]);
      $(".capsule").fadeIn(500);
      $(".icon_delate").slideDown();
      $(".message_del").slideUp(600);
      $(".message_del_but").slideUp(600);
  }

  $('.icon_fade').on('click',function(){
    $(".capsule").fadeOut(500);
    $(".icon_delate").slideUp();
    $(".message_del").slideUp(600);
    $(".message_del_but").slideUp(600);
  })
})

$(function(){
  $('.but_bury').on('click',function(){
    $(".bury_box").fadeTo(300,0.1);
    $(".header-form-container").slideUp(1000);
    $(".input").slideDown();
    $(".icon_slide").fadeOut(500);
    $(".capsule").fadeOut(500);
    $(".icon_delate").slideUp();
    $(".message_del").slideUp(600);
    $(".message_del_but").slideUp(600);
    $(".backblack").fadeIn();
    $(".past_box").fadeIn(1500);
  })
})

$(function(){
  $('.rec_but').on('click',function(){
    $(".past_box").fadeOut(600);
    $(".backblack").fadeOut(1000);
  })
})



