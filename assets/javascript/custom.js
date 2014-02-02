$(document).ready(function() {
    var section=window.location.hash;
    $("section").on('click',showSection(section));
});

function showSection(section) {
    if(!section) {
        section = "home";
    }
    else if(section == "#" || section == ""){
        section = "home"
    }
    hideAll();  
    $(section).fadeIn();
}

function hideAll() {
    $("section").hide();
}
