/*
* TigerEye Javascript
*/

$(document).ready(function(){
    $("#see-more-events").click(function(){
    // document.getElementById("player-add-form").submit();
    var row = '<div id="events" class="row">'
    var event_start='<div id="event" class="col-md-4">'
    var image ='<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
    var event_info='<div id="event-info-div" class="col-md-8"><p>Test</p><p>Chambers 113</p><p>3/30/2017</p><p>7:00pm - 8:00pm</p><p>$0</p></div>'
    var end_row='</div>'
    // $('#events-div').append(row);
    $('#events-div').append(event_start+image+event_info); 
    $('#events-div').append(event_start+image+event_info);
    $('#events-div').append(event_start+image+event_info);
    // $('#events-div').append(end_row); 
  });
  $("#see-more-clubs").click(function(){
    // document.getElementById("player-add-form").submit();
    var row = '<div id="clubs" class="row">'
    var club_start='<div id="club" class="col-md-4">'
    var image ='<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
    var club_info='<div id="club-info-div" class="col-md-8"><p>Test</p><p>Chambers 113</p><p>$0</p></div>'
    var end_row='</div>'
    // $('#clubs-div').append(row);
    $('#clubs-div').append(club_start+image+club_info); 
    $('#clubs-div').append(club_start+image+club_info);
    $('#clubs-div').append(club_start+image+club_info);
    // $('#clubs-div').append(end_row); 
  });
  $("#see-more-social").click(function(){
    // document.getElementById("player-add-form").submit();
    var row = '<div id="social-areas" class="row">'
    var social_start='<div id="social-area" class="col-md-4">'
    var image ='<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
    var social_info='<div id="social-info-div" class="col-md-8"><p>Test</p><p>Chambers 113</p><p>$0</p></div>'
    var end_row='</div>'
    // $('#social-areas-div').append(row);
    $('#social-areas-div').append(social_start+image+social_info); 
    $('#social-areas-div').append(social_start+image+social_info);
    $('#social-areas-div').append(social_start+image+social_info);
    // $('#social-areas-div').append(end_row); 
  });
});


// On page load, the first 3 database contents are inserted into the corresponding
// rows by getting the JSON data from each table in the DB
$(window).on("load", function() {
    $.getJSON('/php/get_event_data.php', function(events) {
        $.each(events, function(key, val) {
            var row = '<div id="events" class="row">'
            var event_start='<div id="event" class="col-md-4">'
            var image ='<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
            var event_info='<div id="event-info-div" class="col-md-8"><p>' +
                            val.Name + '</p><p>' + val.Location +
                            '</p><p>' + val.Date + '</p><p>' +
                            val.EventStart + '-' + val.EventEnd +
                            '</p><p>' + val.Cost + '</p></div>'
            var end_row='</div>'

            // add the row to the events table
            $('#events-div').append(event_start+image+event_info);
        });
    });
    $.getJSON('/php/get_club_data.php', function(events) {
        $.each(events, function(key, val) {
            var row = '<div id="clubs" class="row">'
            var club_start='<div id="club" class="col-md-4">'
            var image ='<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
            var club_info='<div id="club-info-div" class="col-md-8"><p>' + val.Name +'</p><p>'+ val.location +'</p><p>'+ val.Cost + '</p></div>'
            var end_row='</div>'

            // add the row to the clubs table
           $('#clubs-div').append(club_start+image+club_info); 
        });
    });
    $.getJSON('/php/get_social_data.php', function(events) {
        $.each(events, function(key, val) {
            var row = '<div id="social-areas" class="row">'
            var social_start='<div id="social-area" class="col-md-4">'
            var image ='<div id="image-div" class="col-md-4"><img id="event-image" src="../assets/blank_image.png" class="img-responsive"></div>'
            var social_info='<div id="social-info-div" class="col-md-8">' + val.Name +'</p><p>'+ val.location +'</p><p>'+ val.Cost + '</p></div>'
            var end_row='</div>'

            // add the row to the social areas table
            $('#social-areas-div').append(social_start+image+social_info);
        });
    });
});
