// Create a function to log the response from the Mandrill API
function log(obj) {
    $('#response').text(JSON.stringify(obj));
}

function sendTheMail() {
// Send the email!
    // create a new instance of the Mandrill class with your API key
    var m = new mandrill.Mandrill('bJyNsXB91Kzq_6eQGgPJLQ');
    // create a variable for the API call parameters

    var params = {
        "message": {
            "from_email":$('#email').val(),
            "to":[{"email":"brown.alex.k@gmail.com"}],
            "subject": "Message from your online portfolio from " + $('#name').val(),
            "html": $('#message').val(),
            "autotext": true,
            "track_opens": true,
            "track_clicks": true
        }
    };

    m.messages.send(params, function(res) {
        console.log(res); // successful
        $('#email').val("");
        $('#name').val("");
        $('#message').val("");
    }, function(err) {
        console.log(err); // error
    });
}
