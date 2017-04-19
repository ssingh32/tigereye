/*
* TigerEye Javascript
*/

$(document).ready(function () {

    // add event button, add event to the database
    $(document.body).on("click", "#add-event-button", function() {
        document.getElementById("event-add-form").submit();
    });

    // Create account button, add user to the userDB
    $(document.body).on("click", "#create-account-button", function() {
        document.getElementById("signup-form").submit();
    });

    // see more events button
    $(document.body).on("click", "#see-more-events", function() {
        $("#events-div").empty();
        $.getJSON('/php/get_event_data.php', function(events) {
            var counter = 0;
            $.each(events, function (key, val) {
                var row = '<div id="events" class="row">'
                var event_start = '<div data-toggle="modal" data-target="#event-details' + counter + '"><div id="event" class="col-md-4">'
                var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="' + val.Image + '" class="img-responsive"></div>'
                var event_info = '<div id="event-info-div" class="col-md-8"><p>' +
                    val.Name + '</p><p>' + val.Location +
                    '</p><p>' +
                    val.EventStart + '</p><p>' + val.EventEnd +
                    '</p><p>' + val.Cost + '</p></div>'
                var end_row = '</div></div>'

                var modal = '<div id="event-details' + counter + '"class="modal fade" role="dialog" data-backdrop="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">'+ val.Name +'</h4></div><div class="modal-body"><p>'+ val.Description +'</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';


                // add the element to the events div
                $('#events-div').append(event_start + image + event_info + modal);
                counter++;
            });
        });
        $("#events-div").append('<button class="btn btn-primary btn-sm" id="see-less-events" onclick="">See Fewer Events<span class="dropup"><span class="caret"></span></button>');
    });

    // see more clubs button
    $(document.body).on("click", "#see-more-clubs", function() {
        $("#clubs-div").empty();
        $.getJSON('/php/get_club_data.php', function(clubs) {
            var counter = 0;
            $.each(clubs, function (key, val) {
                var row = '<div id="clubs" class="row">'
                var club_start = '<div data-toggle="modal" data-target="#club-details' + counter + '"><div id="club" class="col-md-4">'
                var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
                var club_info = '<div id="club-info-div" class="col-md-8"><p>' + val.Name + '</p><p>' + val.Location + '</p><p>' + val.Cost + '</p></div>'
                var end_row = '</div></div>'

                var modal = '<div id="club-details' + counter + '"class="modal fade" role="dialog" data-backdrop="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">'+ val.Name +'</h4></div><div class="modal-body"><p>'+ val.Description +'</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';

                // add the element to the clubs div
                $('#clubs-div').append(club_start + image + club_info + modal);
                counter++;
            });
        });
        $("#clubs-div").append('<button class="btn btn-primary btn-sm" id="see-less-clubs" onclick="">See Fewer Clubs<span class="dropup"><span class="caret"></span></button>');
    });

    // see more social button
    $(document.body).on("click", "#see-more-social",function() {
        $("#social-areas-div").empty();
        $.getJSON('/php/get_social_data.php', function(social) {
            var counter = 0;
            $.each(social, function (key, val) {
                var row = '<div id="social-areas" class="row">'
                var social_start = '<div data-toggle="modal" data-target="#social-details' + counter + '"><div id="social-area" class="col-md-4">'
                var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
                var social_info = '<div id="social-info-div" class="col-md-8">' + val.Name + '</p><p>' + val.Location + '</p><p>' + val.Cost + '</p></div>'
                var end_row = '</div></div>'

                var modal = '<div id="social-details' + counter + '"class="modal fade" role="dialog" data-backdrop="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">'+ val.Name +'</h4></div><div class="modal-body"><p>'+ val.Description +'</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';

                // add the element to the social areas div
                $('#social-areas-div').append(social_start + image + social_info + modal);
                counter++;
            });
        });
        $("#social-areas-div").append('<button class="btn btn-primary btn-sm" id="see-less-social" onclick="">See Fewer Social Areas<span class="dropup"><span class="caret"></span></button>');
    });

    // see less events button
    $(document.body).on("click", "#see-less-events",function() {
        $("#events-div").empty();
        display_3_events();
    });

    // see less clubs button
    $(document.body).on("click", "#see-less-clubs",function() {
        $("#clubs-div").empty();
        display_3_clubs();
    });

    // see less social areas button
    $(document.body).on("click", "#see-less-social",function() {
        $("#social-areas-div").empty();
        display_3_social();
    });
});


// On page load, the first 3 database contents are inserted into the corresponding
// rows by getting the JSON data from each table in the DB
$(window).on("load", function() {
    display_3_events();
    display_3_clubs();
    display_3_social();

    // TODO do some user session so this generates the correct navbar 
    // logged_in_nav();
    not_logged_in_nav();
});

// generate the navbar when not logged in
function not_logged_in_nav() {
    var login_button = '<li><a href="login_page.html">Login/Signup <span class="glyphicon glyphicon-log-in"></span></a></li>'
    var add_event_button = '<button type="button" class="btn btn-primary btn-sm" id="modal-button" data-toggle="modal" data-target="#add-event-modal">Add Event <span class="glyphicon glyphicon-plus"></span></button>'
    $('#login').append(login_button);
    $('#add-event').append(add_event_button);
}

// generate the navbar when logged in
function logged_in_nav() {
    var logout_button = '<li><a href="#">Signout <span class="glyphicon glyphicon-log-out"></span></a></li>'
    var add_event_button = '<button type="button" class="btn btn-primary btn-sm" id="modal-button" data-toggle="modal" data-target="#add-event-modal">Add Event <span class="glyphicon glyphicon-plus"></span></button>'
    $('#login').append(logout_button);
    $('#add-event').append(add_event_button);
}

// TODO signout when the button is pressed
function sign_out() {
    console.log("Now signing out");
}

// build the events div array with the first 3 entries
function display_3_events() {
    $.getJSON('/php/get_event_data.php', function(events) {
        var counter = 0;
        $.each(events, function (key, val) {
            var row = '<div id="events" class="row">'
            var event_start = '<div data-toggle="modal" data-target="#event-details' + counter + '"><div id="event" class="col-md-4">'
            var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="' + val.Image + '" class="img-responsive"></div>'
            var event_info = '<div id="event-info-div" class="col-md-8"><p>' +
                val.Name + '</p><p>' + val.Location +
                '</p><p>' +
                val.EventStart + '</p><p>' + val.EventEnd +
                '</p><p>' + val.Cost + '</p></div>'
            var end_row = '</div></div>'

            var modal = '<div id="event-details' + counter + '"class="modal fade" role="dialog" data-backdrop="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">'+ val.Name +'</h4></div><div class="modal-body"><p>'+ val.Description +'</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';


            // add the element to the events div
            $('#events-div').append(event_start + image + event_info + modal);

            // only displays the first 3 items from the db unless see more is pressed
            counter++;
            return counter < 3;
        });
    });
    $('#events-div').append('<button class="btn btn-primary btn-sm" id="see-more-events" onclick="">See More Events<span class="caret"></span></button>')
}

// build the clubs div array with the first 3 entries
function display_3_clubs() {
    $.getJSON('/php/get_club_data.php', function(clubs) {
        var counter = 0;
        $.each(clubs, function (key, val) {
            var row = '<div id="clubs" class="row">'
            var club_start = '<div data-toggle="modal" data-target="#club-details' + counter + '"><div id="club" class="col-md-4">'
            var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
            var club_info = '<div id="club-info-div" class="col-md-8"><p>' + val.Name + '</p><p>' + val.Location + '</p><p>' + val.Cost + '</p></div>'
            var end_row = '</div></div>'

            var modal = '<div id="club-details' + counter + '"class="modal fade" role="dialog" data-backdrop="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">'+ val.Name +'</h4></div><div class="modal-body"><p>'+ val.Description +'</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';

            // add the element to the clubs div
            $('#clubs-div').append(club_start + image + club_info + modal);

            // only displays the first 3 items from the db unless see more is pressed
            counter++;
            return counter < 3;
        });
    });
    $('#clubs-div').append('<button class="btn btn-primary btn-sm" id="see-more-clubs" onclick="">See More Clubs<span class="caret"></span></button>');
}

// build the social areas div array with the first 3 entries
function display_3_social() {
    $.getJSON('/php/get_social_data.php', function(social) {
        var counter = 0;
        $.each(social, function (key, val) {
            var row = '<div id="social-areas" class="row">'
            var social_start = '<div data-toggle="modal" data-target="#social-details' + counter + '"><div id="social-area" class="col-md-4">'
            var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
            var social_info = '<div id="social-info-div" class="col-md-8">' + val.Name + '</p><p>' + val.Location + '</p><p>' + val.Cost + '</p></div>'
            var end_row = '</div></div>'

            var modal = '<div id="social-details' + counter + '"class="modal fade" role="dialog" data-backdrop="false"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal">&times;</button><h4 class="modal-title">'+ val.Name +'</h4></div><div class="modal-body"><p>'+ val.Description +'</p></div><div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">Close</button></div></div></div></div>';

            // add the element to the social areas div
            $('#social-areas-div').append(social_start + image + social_info + modal);

            // only displays the first 3 items from the db unless see more is pressed
            counter++;
            return counter < 3;
        });
    });
    $('#social-areas-div').append('<button class="btn btn-primary btn-sm" id="see-more-social" onclick="">See More Social Areas<span class="caret"></span></button>');
}
