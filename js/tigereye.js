/*
* TigerEye Javascript
*/

$(document).ready(function () {
    $("#see-more-events").click(function () {
        $("#events-div").empty();
        $.getJSON('/php/get_event_data.php', function (events) {
            $.each(events, function (key, val) {
                var row = '<div id="events" class="row">'
                var event_start = '<div id="event" class="col-md-4">'
                var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
                var event_info = '<div id="event-info-div" class="col-md-8"><p>' +
                    val.Name + '</p><p>' + val.Location +
                    '</p><p>' + val.Date + '</p><p>' +
                    val.EventStart + '-' + val.EventEnd +
                    '</p><p>' + val.Cost + '</p></div>'
                var end_row = '</div>'

                // add the element to the events div
                $('#events-div').append(event_start + image + event_info);
            });
        });
        $('#events-div').append('<button class="btn btn-primary btn-sm" id="see-less-events" onclick="">See Less Events<span class="dropup"><span class="caret"></button>');
    });
    $("#see-more-clubs").click(function () {
        $("#clubs-div").empty();
        $.getJSON('/php/get_club_data.php', function (events) {
            $.each(events, function (key, val) {
                var row = '<div id="clubs" class="row">'
                var club_start = '<div id="club" class="col-md-4">'
                var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
                var club_info = '<div id="club-info-div" class="col-md-8"><p>' + val.Name + '</p><p>' + val.location + '</p><p>' + val.Cost + '</p></div>'
                var end_row = '</div>'

                // add the element to the clubs div
                $('#clubs-div').append(club_start + image + club_info);
            });
        });
        $('#clubs-div').append('<button class="btn btn-primary btn-sm" id="see-less-clubs" onclick="">See Less Clubs<span class="dropup"><span class="caret"></button>');
    });
    $("#see-more-social").click(function () {
        $("#social-areas-div").empty();
        $.getJSON('/php/get_social_data.php', function (events) {
            $.each(events, function (key, val) {
                var row = '<div id="social-areas" class="row">'
                var social_start = '<div id="social-area" class="col-md-4">'
                var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
                var social_info = '<div id="social-info-div" class="col-md-8">' + val.Name + '</p><p>' + val.location + '</p><p>' + val.Cost + '</p></div>'
                var end_row = '</div>'

                // add the element to the social areas div
                $('#social-areas-div').append(social_start + image + social_info);
            });
        });
        $('#social-areas-div').append('<button class="btn btn-primary btn-sm" id="see-less-social" onclick="">See Less Social Areas<span class="dropup"><span class="caret"></button>');
    });
});


// On page load, the first 3 database contents are inserted into the corresponding
// rows by getting the JSON data from each table in the DB
$(window).on("load", function () {
    $.getJSON('/php/get_event_data.php', function (events) {
        var counter = 0;
        $.each(events, function (key, val) {
            var row = '<div id="events" class="row">'
            var event_start = '<div id="event" class="col-md-4">'
            var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
            var event_info = '<div id="event-info-div" class="col-md-8"><p>' +
                val.Name + '</p><p>' + val.Location +
                '</p><p>' + val.Date + '</p><p>' +
                val.EventStart + '-' + val.EventEnd +
                '</p><p>' + val.Cost + '</p></div>'
            var end_row = '</div>'

            // add the element to the events div
            $('#events-div').append(event_start + image + event_info);

            // only displays the first 3 items from the db unless see more is pressed
            counter++;
            return counter < 3;
        });
    });
    $.getJSON('/php/get_club_data.php', function (events) {
        var counter = 0;
        $.each(events, function (key, val) {
            var row = '<div id="clubs" class="row">'
            var club_start = '<div id="club" class="col-md-4">'
            var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
            var club_info = '<div id="club-info-div" class="col-md-8"><p>' + val.Name + '</p><p>' + val.location + '</p><p>' + val.Cost + '</p></div>'
            var end_row = '</div>'

            // add the element to the clubs div
            $('#clubs-div').append(club_start + image + club_info);

            // only displays the first 3 items from the db unless see more is pressed
            counter++;
            return counter < 3;
        });
    });
    $.getJSON('/php/get_social_data.php', function (events) {
        var counter = 0;
        $.each(events, function (key, val) {
            var row = '<div id="social-areas" class="row">'
            var social_start = '<div id="social-area" class="col-md-4">'
            var image = '<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
            var social_info = '<div id="social-info-div" class="col-md-8">' + val.Name + '</p><p>' + val.location + '</p><p>' + val.Cost + '</p></div>'
            var end_row = '</div>'

            // add the element to the social areas div
            $('#social-areas-div').append(social_start + image + social_info);

            // only displays the first 3 items from the db unless see more is pressed
            counter++;
            return counter < 3;
        });
    });
});
