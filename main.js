function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$('#welcome').on('click', function() {
    var welcome = $('#welcome-section').position().top;
    $('html, body').animate(
        {
            scrollTop: welcome
        },
        900
    );
})

$('#projects').on('click', function() {
    var project = $('#projects-section').position().top;
    $('html, body').animate(
        {
            scrollTop: project
        },
        900
    );
})

$('#contact').on('click', function() {
    var contact = $('#contact-section').position().top;
    $('html, body').animate(
        {
            scrollTop: contact
        },
        900
    );
})