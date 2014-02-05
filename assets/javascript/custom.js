$(document).ready(function() { 
    var section=window.location.hash;
    if(section != "")
    {
        scrollTo('#'+$(section).attr('id'));
    }
    $(".mynav").on("click",function(e){
        e.preventDefault();
        $('.active').removeClass("active");
        $("#"+$(this).data("section")+"-nav").closest("li").addClass("active");
        scrollTo($(this).attr('href'));
    });
});

function getNavLink(elem){
    $(elem).data("section");
}

function scrollTo(section){
    if(section == '#'){
        section = '#home';
    }
    $('html, body').animate({
       scrollTop: $(section).offset().top
    }, 800);
}
