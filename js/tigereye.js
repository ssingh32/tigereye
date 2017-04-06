/*
* TigerEye Javascript
*/

$(document).ready(function () {
    // see more events button
    $(document.body).on("click", "#see-more-events", function() {
        $("#events-div").empty();
        $.getJSON('/php/get_event_data.php', function(events) {
            $.each(events, function (key, val) {
                var row = '<div id="events" class="row">'
                var event_start = '<a href="details.html"><div id="event" class="col-md-4">'
                var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
                var event_info = '<div id="event-info-div" class="col-md-8"><p>' +
                    val.Name + '</p><p>' + val.Location +
                    '</p><p>' + val.EventDate + '</p><p>' +
                    val.EventStart + '-' + val.EventEnd +
                    '</p><p>' + val.Cost + '</p></div>'
                var end_row = '</div></a>'

                // add the element to the events div
                $('#events-div').append(event_start + image + event_info);
            });
        });
        $("#events-div").append('<button class="btn btn-primary btn-sm" id="see-less-events" onclick="">See Less Events<span class="dropup"><span class="caret"></span></button>');
    });

    // see more clubs button
    $(document.body).on("click", "#see-more-clubs", function() {
        $("#clubs-div").empty();
        $.getJSON('/php/get_club_data.php', function(clubs) {
            $.each(clubs, function (key, val) {
                var row = '<div id="clubs" class="row">'
                var club_start = '<a href="details.html"><div id="club" class="col-md-4">'
                var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
                var club_info = '<div id="club-info-div" class="col-md-8"><p>' + val.Name + '</p><p>' + val.Location + '</p><p>' + val.Cost + '</p></div>'
                var end_row = '</div></a>'

                // add the element to the clubs div
                $('#clubs-div').append(club_start + image + club_info);
            });
        });
        $("#clubs-div").append('<button class="btn btn-primary btn-sm" id="see-less-clubs" onclick="">See Less Clubs<span class="dropup"><span class="caret"></span></button>');
    });

    // see more social button
    $(document.body).on("click", "#see-more-social",function() {
        $("#social-areas-div").empty();
        $.getJSON('/php/get_social_data.php', function(social) {
            $.each(social, function (key, val) {
                var row = '<div id="social-areas" class="row">'
                var social_start = '<a href="details.html"><div id="social-area" class="col-md-4">'
                var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
                var social_info = '<div id="social-info-div" class="col-md-8">' + val.Name + '</p><p>' + val.Location + '</p><p>' + val.Cost + '</p></div>'
                var end_row = '</div></a>'

                // add the element to the social areas div
                $('#social-areas-div').append(social_start + image + social_info);
            });
        });
        $("#social-areas-div").append('<button class="btn btn-primary btn-sm" id="see-less-social" onclick="">See Less Social Areas<span class="dropup"><span class="caret"></span></button>');
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
});

// build the events div array with the first 3 entries
function display_3_events() {
    $.getJSON('/php/get_event_data.php', function(events) {
        var counter = 0;
        $.each(events, function (key, val) {
            var row = '<div id="events" class="row">'
            var event_start = '<a href="details.html"><div id="event" class="col-md-4">'
            var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
            var event_info = '<div id="event-info-div" class="col-md-8"><p>' +
                val.Name + '</p><p>' + val.Location +
                '</p><p>' + val.EventDate + '</p><p>' +
                val.EventStart + '-' + val.EventEnd +
                '</p><p>' + val.Cost + '</p></div>'
            var end_row = '</div></a>'

            // add the element to the events div
            $('#events-div').append(event_start + image + event_info);

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
            var club_start = '<a href="details.html"><div id="club" class="col-md-4">'
            var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
            var club_info = '<div id="club-info-div" class="col-md-8"><p>' + val.Name + '</p><p>' + val.Location + '</p><p>' + val.Cost + '</p></div>'
            var end_row = '</div></a>'

            // add the element to the clubs div
            $('#clubs-div').append(club_start + image + club_info);

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
            var social_start = '<a href="details.html"><div id="social-area" class="col-md-4">'
            var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
            var social_info = '<div id="social-info-div" class="col-md-8">' + val.Name + '</p><p>' + val.Location + '</p><p>' + val.Cost + '</p></div>'
            var end_row = '</div></a>'

            // add the element to the social areas div
            $('#social-areas-div').append(social_start + image + social_info);

            // only displays the first 3 items from the db unless see more is pressed
            counter++;
            return counter < 3;
        });
    });
    $('#social-areas-div').append('<button class="btn btn-primary btn-sm" id="see-more-social" onclick="">See More Social Areas<span class="caret"></span></button>');
}
