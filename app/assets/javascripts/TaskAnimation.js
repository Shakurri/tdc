$(function(){
  $('.input').on('touchstart',function(){
    console.log("a");
    $(".header-form-container").slideDown();
    $(".input").slideUp(700);
    $(".icon_slide").fadeIn();
    $(".bury_box").fadeIn(1000);
    $(".capsule").fadeOut(500);
    $(".icon_delate").slideUp();
    $(".message_del").slideUp(600);
    $(".message_del_but").slideUp(600);
  }).css('cursor','pointer');



  $('.icon_delate').on('touchstart',function(){
    $(".message_del").slideDown(600);
    $(".message_del_but").slideDown(600);
  }).css('cursor','pointer');



  $('.slidein').on('touchstart',function(){
    $(".header-form-container").slideUp(600);
    $(".input").slideDown();
    $(".icon_slide").fadeOut(500);
    $(".bury_box").fadeOut(500);
  }).css('cursor','pointer');


$('.icon_fade').on('touchstart',function(){
    $(".capsule").fadeOut(500);
    $(".icon_delate").slideUp();
    $(".message_del").slideUp(600);
    $(".message_del_but").slideUp(600);
  }).css('cursor','pointer');



  $('.bury').on('touchstart',function(){
    $(".bury_box").fadeTo(300,0.1);
    $(".header-form-container").slideUp(1000);
    $(".input").slideDown();
    $(".icon_slide").fadeOut(500);
  }).css('cursor','pointer');


  var match = location.search.match(/id=(.*?)(&|$)/);
  console.log(match);

  if(match) {
      id = decodeURIComponent(match[1]);
      $(".capsule").fadeIn(500);
      $(".icon_delate").slideDown();
      $(".message_del").slideUp(600);
      $(".message_del_but").slideUp(600);
  }

  $('.icon_fade').on('touchstart',function(){
    $(".capsule").fadeOut(500);
    $(".icon_delate").slideUp();
    $(".message_del").slideUp(600);
    $(".message_del_but").slideUp(600);
  }).css('cursor','pointer');



  $('.but_bury').on('touchstart',function(){
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
  }).css('cursor','pointer');


  $('.rec_but').on('touchstart',function(){
    $(".past_box").fadeOut(600);
    $(".backblack").fadeOut(1000);
  }).css('cursor','pointer');
})



