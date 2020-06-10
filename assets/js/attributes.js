$(document).ready(function(){
     var divTop = ($("#divCircle").height() - $("#middleBubble").height())/2;
     var divLeft = ($("#divCircle").width() - $("#middleBubble").width())/2;
     $("#middleBubble").css("top",divTop + "px");
     $("#middleBubble").css("left",divLeft + "px");
})

$(document).ready(function(){
     numItems = $( "#divCircle i" ).length; 
     start = 4.1; 
     step = (2*Math.PI)/numItems;
     
     $( "#divCircle i" ).each(function(index) {
          radius = ($("#divCircle").width() - $(this).width())/2; 
          tmpTop = (($("#divCircle").height()/2) + radius * Math.sin(start)) - ($(this).height()/2);
          tmpLeft = (($("#divCircle").width()/2) + radius * Math.cos(start)) - ($(this).width()/2);
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