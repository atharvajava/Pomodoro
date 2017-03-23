$(document).ready(function() {
  var count = parseInt($("#count").html());
  var breakCount = parseInt($("#breakCount").html());
  $("#reset").hide();
  //Below Segment contains the logic for timer
  $("#start").click(function(){
    var counter=setInterval(timer,1000);
    count *=60;
    function timer(){
      //Hiding Unused Variables
      $('#start,#increase,#decrease,#decreaseBreak,#increaseBreak,#breakCount,#t2').hide();
      if(count>0){
      count -=1;
      }
      if(count===0){
        clearInterval(counter);
        breakCount *=60;
        var startBreak=setInterval(breakTimer,1000);
        $('#count').hide();
      }
      //below segment is used to format the timer
       if(count%60>=10){
          $('#count').html(Math.floor(count/60)+":"+count%60);
          }else{
           $('#count').html(Math.floor(count/60)+":"+"0"+count%60);
          }
      //End of segment
      //$('#count').html(count);
      //logic for break time
        function breakTimer(){
      $("#t1").hide();
      $("#breakCount,#t2").show();
      breakCount-=1;
      if(breakCount===0){
        clearInterval(startBreak);
        $('#reset').show();
        $("#breakCount,#t2").hide();
      }
       if(breakCount%60>=10){
          $('#breakCount').html(Math.floor(breakCount/60)+":"+breakCount%60);
          }else{
           $('#breakCount').html(Math.floor(breakCount/60)+":"+"0"+breakCount%60);
          }
    }
    }
  
  });
//Below Segment is for Session Time
  $("#decrease").click(function() {
    if (count > 0){
      count -= 1;}
    $("#count").html(count);
  });
  $("#increase").click(function() {
    count += 5;
    $("#count").html(count);
  });
  //Below Segment is for Break Time
   $("#decreaseBreak").click(function() {
    if (breakCount > 0){
      breakCount -= 1;
    }
    $("#breakCount").html(breakCount);
  });
  $("#increaseBreak").click(function() {
    breakCount += 5;
    $("#breakCount").html(breakCount);
  });
  //below segment is for Reset
  $("#reset").click(function(){
    count=5;
    breakCount=5;
    $('#start,#increase,#decrease,#decreaseBreak,#increaseBreak,#breakCount,#count,#t2,#t1').show();
    $('#reset').hide();
    $('#breakCount').html(breakCount);
    $('#count').html(count);
  });
  
});