var cityData = null;
var cityHTML = null;

$(document).ready(function() {
    $('#get-info-btn').on('click', function() {
        if (cityData === null) {
            $.get('location.html', function (data) {
                cityHTML = data;

            });
        } else {
            console.log("You already got the HTML");
        }
        if (cityData === null) {
            $.get('data.json', function (data) {
                cityData = data;
            });
        } else {
            console.log(cityData.locations[0].population);
            console.log("You already got the HTML");
        }
    });

    $('#makethings').on('click', function() {
        $('display-more').empty();
        for (var i = 0; i < cityData.locations.length; i++){
            var loc = $(cityHTML);
            loc.find('.location-name').text(cityData.locations[i].location);
            loc.find('.infoDiv').append("<p>Population: " + cityData.locations[i].population + "</p>");
            loc.find('.infoDiv').append("<p>Area: " + cityData.locations[i].area + "</p>");
            $('#display-more').append(loc);
        }

        $('#display-more').show();

    });

    $('#display-more').on('click', 'button', function() {
        $(this).siblings('div').toggleClass('hidden');
    });

    $('#display-more').on('click', '.removeBtn', function() {
        $('#display-more').empty();
        $('#display-more').hide();
    })
});

