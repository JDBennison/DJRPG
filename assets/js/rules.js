$(".attackHit").click(function() {
    $(this).html("Attack Hits!")
});

$(".attackMiss").click(function() {
    $(this).html("Attack Misses!")
});

//$(document).ready(function(){
  //   var divTop = ($("#divCircle").height() - $("#middleBubble").height())/2;
    // var divLeft = ($("#divCircle").width() - $("#middleBubble").width())/2;
   //  $("#middleBubble").css("top",divTop + "px");
    // $("#middleBubble").css("left",divLeft + "px");;
//})

$(document).ready(function(){
     start = 4.1; 
     step = (2*Math.PI)/5;
     
     $( "#divCircle i" ).each(function(index) {
          radius = 180;
          tmpTop = (250 + radius * Math.sin(start)) - (30);
          tmpLeft = (250 + radius * Math.cos(start)) - (30);
          start += step; 
                 
          $(this).css("top",tmpTop);
          $(this).css("left",tmpLeft);
     });
})

currentGridSelector = $(".homepageGridDefault").attr("id");
$("#" + currentGridSelector).addClass("on").removeClass("off");
$("#middleBubble").html("<p><b>" + $(".homepageGridDefault").data("bubble1") + "</b><br />" + $(".homepageGridDefault").data("bubble2") + "</p>");
 

$("#divCircle i").mouseover(function(){
    if(currentGridSelector != $(this).attr("id"))
    {
        $("#" + currentGridSelector).addClass("off").removeClass("on");
    }
    $(this).addClass("on").removeClass("off");
    $("#middleBubble").html("<p><b>" + $(this).data("bubble1") + "</b><br />" + $(this).data("bubble2") + "</p>");
    currentGridSelector = $(this).attr("id");
});