function postClassTimes(courses) {
    /*
    fetch('https://m9uqnix64d.execute-api.us-east-2.amazonaws.com/dev/schedulerequest',
        {
            method: 'POST',
            body: JSON.stringify(
                {
                    courses: courses
                }
            )
        }
    ).then(res => res.json()).then(console.log);
    */
    $.ajax({
        url: 'https://m9uqnix64d.execute-api.us-east-2.amazonaws.com/dev/schedulerequest',
        type: 'post',
        crossDomain: true,
        contentType: "application/json",
        dataType: 'json',
        data: {
            courses: courses
        },
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        success: function(data) {
            console.log(data);
        }
    });
}