$(document).ready(function() { 
    var section=window.location.hash.substring(1);
    if(section !="")
    {
        showSection($("#"+section).closest("section").attr("id"));
    }
    $(".starthidden").hide();
    $(".mynav").on("click",function(){
        showSection($(this).data("section"));
    });
});

function showSection(section) {
    hideAll();  
    if(!section) {
        section = "home";
    }
    else if(section == "#" || section == ""){
        section = "home"
    }
    if(!$('#'+section).is(':visible')){
       $('#'+section).fadeIn();
    }
    
}

function hideAll() {
    $("section").fadeOut();
}
