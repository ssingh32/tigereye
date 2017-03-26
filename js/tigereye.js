/*
* TigerEye Javascript
*/

// $(document).ready(function(){
//     $("#submit-to-database").click(function(){
//     document.getElementById("player-add-form").submit();
//   });
// });

// On page load, the entire database contents are inserted into the corresponding
// table by getting the JSON data from get_event_data.php
$(window).on("load", function() {
    $.getJSON('/php/get_event_data.php', function(events) {
        $.each(events, function(key, val) {
            var start_row='<tr id="found-player">';
            //var image='<td style=width:25%>'+ val.Image +'</td>';
            var name='<td style=width:25%>'+ val.Name +'</td>';
            var description='<td style=width:10%>'+ val.Description +'</td>';
            var location='<td style=width:10%>'+ val.Location +'</td>';
            var date='<td style=width:10%>'+ val.EventDate +'</td>';
            var start='<td style=width:10%>'+ val.EventStart +'</td>';
            var end='<td style=width:10%>'+ val.EventEnd +'</td>';
            var cost='<td style=width:10%>'+ val.Cost +'</td>';
            var end_row='</tr>';

            // add the row to the events table
            $('#events-table').append(start_row+name+description+location+date+start+end+cost+end_row); 
        });
    });
    $.getJSON('/php/get_club_data.php', function(events) {
        $.each(events, function(key, val) {
            var start_row='<tr id="found-player">';
            //var image='<td style=width:25%>'+ val.Image +'</td>';
            var name='<td style=width:25%>'+ val.Name +'</td>';
            var description='<td style=width:10%>'+ val.Description +'</td>';
            var location='<td style=width:10%>'+ val.Location +'</td>';
            var cost='<td style=width:10%>'+ val.Cost +'</td>';
            var end_row='</tr>';

            // add the row to the clubs table
            $('#clubs-table').append(start_row+name+description+location+cost+end_row); 
        });
    });
    $.getJSON('/php/get_social_data.php', function(events) {
        $.each(events, function(key, val) {
            var start_row='<tr id="found-player">';
            //var image='<td style=width:25%>'+ val.Image +'</td>';
            var name='<td style=width:25%>'+ val.Name +'</td>';
            var description='<td style=width:10%>'+ val.Description +'</td>';
            var location='<td style=width:10%>'+ val.Location +'</td>';
            var cost='<td style=width:10%>'+ val.Cost +'</td>';
            var end_row='</tr>';

            // add the row to the social areas table
            $('#socialareas-table').append(start_row+name+description+location+cost+end_row); 
        });
    });
});
