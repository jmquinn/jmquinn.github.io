$(document).ready(function() { 
    var section=window.location.hash.substring(1);
//    $(".starthidden").hide();
    if(section !="")
    {
        showSection($("#"+section).closest("section").attr("id"));
    }
    $(".mynav").on("click",function(){
//        showSection($(this).data("section"));
        showSection($(this).data("section"));
    });
});

function showSection(section) {
    if(!section) {
        section = "home";
    }
    else if(section == "#" || section == ""){
        section = "home"
    }
    
    if(!$('#'+section).is(':visible')){
        hideAll();  
        $('#'+section).fadeIn();
    }
    else scrollTo(section);
    
}

function hideAll() {
    $("section").fadeOut().delay(900);
}

function scrollTo(section){
  $('html, body').animate({
      scrollTop: $("#"+section).offset().top
  }, 800);
}
