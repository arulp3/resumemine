$(document).ready(function(){
  $(".modals1").hide();
  $(".modals2").hide();
  $(".modals3").hide();
  
})

$(".button1").click(function(){
    $(".modals1").show();
  $(".modals2").hide();
  $(".modals3").hide();
})

$(".button2").click(function(){
    $(".modals1").hide();
  $(".modals2").show();
  $(".modals3").hide();
})

$(".button3").click(function(){
    $(".modals1").hide();
  $(".modals2").hide();
  $(".modals3").show();
})
