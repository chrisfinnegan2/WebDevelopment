/* solids.js - do solid geometry form validation
 *
 * D Provine & Chris Finnegan, 4 Nov 2020
 */

function solid_compute() {
  // assume no radio button chosen
  // assume no data requested
    var DataRequest, RadioChosen = false, QueryString = "?", CGI = 'http://elvis.rowan.edu/~finneganc2/solids3.cgi', URL = CGI + QueryString;
    
    if ($("#solidCu").prop("checked")) {
        RadioChosen = true;
        QueryString += "solid=cube";
        if ($("#height").val().length === 0) {
            alert("You didn't give a height.");
            $("#height").focus();
            return;
        }
        QueryString += '&height=' + $("#height").val();
    }
    
    if ($("#solidSp").prop("checked")) {
        RadioChosen = true;
        QueryString += "solid=sphere";
        if ($("#radius").val().length === 0) {
            alert("You didn't give a radius.");
            $("#radius").focus();
            return;
        }
        QueryString += '&radius=' + $("#radius").val();
    }

    if ($("#solidCy").prop("checked")) {
        RadioChosen = true;
        QueryString += "solid=cylinder";
        if ($("#radius").val().length === 0 || $("#height").val().length === 0) {
            alert("You didn't give a height / radius.");
            $("#radius").focus();
            return;
        }
        QueryString += '&radius=' + $("#radius").val();
        QueryString += '&height=' + $("#height").val();
    }
    
    
    if (!RadioChosen) {
        alert("You didn't choose a solid.");
        return;
    }
  
    if ($("#area").prop("checked")) {
        DataRequest = true;
        QueryString += "&area=on";
    }
    
    if ($("#volume").prop("checked")) {
        DataRequest = true;
        QueryString += "&volume=on";
    }
    
    if (!DataRequest) {
        alert("You didn't request any data.");
        return;
    }
  
    
  // prepare data to send to CGI    
    CGI = 'http://elvis.rowan.edu/~kilroy/webdev/Sec2/WkB-solids/solids.cgi';
    URL = CGI + QueryString;
    console.log('Fetching: ' + URL);
    $.ajax({url: URL,
            success: function (result) {
            $("#output").text(result);
        }});
}