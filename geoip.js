function isAllowedCountry(allowed_country_list, callback) {
    $.ajax({
        url: 'https://ipapi.co/json/',
        type: 'GET',
        success: function(location) {
            var countryName = location.country_name;
            $('#shopping_location').text(countryName);

            // Check if the country is in the allowed list
            var isAllowed = allowed_country_list.includes(countryName);

            // Call the callback with the results
            callback(countryName, isAllowed);
        }
    });
}
