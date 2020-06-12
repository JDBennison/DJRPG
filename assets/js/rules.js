$(".attackHit").click(function() {
    $(this).html("Attack Hits!")
});

$(".attackMiss").click(function() {
    $(this).html("Attack Misses!")
});

$(document).ready(function(){
     start = 4.1; 
     step = (2*Math.PI)/5;
     
     $( "#divCircle i" ).each(function(index) {
          radius = 180;
          tmpTop = (200 + radius * Math.sin(start)) - (30);
          tmpLeft = (200 + radius * Math.cos(start)) - (30);
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

skillSelector = $(".defaultOn").attr("id");
$("#" + skillSelector).addClass("skill-icons-on").removeClass("skill-icons");
$("#skillsBox").html("<p><h5>" + $(".defaultOn").data("skill-name") + "</h5>" + $(".defaultOn").data("skill-info") + "<br /><h6>Attribute = " + $(".defaultOn").data("skill-attribute") + "</h6></p>");
 

$(".skills i").mouseover(function(){
    if(skillSelector != $(this).attr("id"))
    {
        $("#" + skillSelector).addClass("skill-icons").removeClass("skill-icons-on");
    }
    $(this).addClass("skill-icons-on").removeClass("skill-icons");
    $("#skillsBox").html("<p><h5>" + $(this).data("skill-name") + "</h5>" + $(this).data("skill-info") + "<br /><h6>Attribute = " + $(this).data("skill-attribute") + "</h6></p>");
    skillSelector = $(this).attr("id");
});