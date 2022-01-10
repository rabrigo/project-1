var apiURL = "http://api.aviationstack.com/v1/flights?access_key=4905c45b46c75bf1dc9cb8b1826a98c3";
fetch(apiURL)
        .then(function (response) {
                return response.json();
        })
        .then(function (data) {
                console.log(data);
              });
            