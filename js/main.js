/* Custom JS goes here. */

// For this assignment you'll need to do a few things:
// 1. Create a document ready handler.
// 2. Define a validation object for use on your page.
// 3. Connect the validation object to an event handler tied to the submit button.

// Refer to the `index.html` file for the validation rules that must be enforced.


$(document).on('ready', function() {
  
    $('#order-form').validate({
        submitHandler: function (form) {
            form.submit();
        },
      
        rules: {
            "your-name": {
                required: true,
                maxlength:128                           
            },
      
            "your-address": {
                required: true
            },
          
            "your-city": {
                required: true
            },
          
            "your-state": {
                required: true,
                minlength: 2,
                maxlength: 2            
            },          
          
            "your-zip": {
                required: true,
                digits: true,  
                minlength: 5,
                maxlength: 5
            },
          
            "card-holder-name": {
                required: true,
                maxlength: 128,       
            },
          
            "card-number": {
                required: true,
                creditcard: true //test that this fulfills "todo"//
            },
          
            "expiry-month": {
                required: true,
            },
          
            "cvv": {
                required: true,
                digits: true,              
                maxlength: 3
            },
          
            "comments": {
                required: false,
                maxlength: 500
            },
      
        },
      
        messages: {
            
        "your-name": {
                required: "Please provide a first and last name",
                maxlength: "Name cannot be longer than 128 characters",
               
            },
      
            "your-address": {
                required: "Please provide an address"
            },
          
            "your-city": {
                required: "Please provide a city"
            },
          
            "your-state": {
                required: "Please provide a state",
                minlength: "State must contain 2 characters, e.g. 'WA'",
                maxlength: "State must contain 2 characters, e.g. 'WA'"
            },          
          
            "your-zip": {
                required: "Please provide a zip code",
                digits: "Zip code cannot contain letters",  
                maxlength: "Zip code must be 5 digits",
                minlength: "Zip code must be 5 digits"
            },
          
            "card-holder-name": {
                required: "Please provide a name",
                equalTo: "Card holder name must match name from above"
            },
          
            "card-number": {
                required: "Please provide a card number",
                creditcard: "Must be valid credit card number" //test that this fulfills "todo"//
            },
          
            "expiry-month": {
                required: "Please provide an expiration",
            },
          
            "cvv": {
                required: "Please provide a CVV code",
                digits: "Code cannot contain letters",
                maxlength: "Code must be 3 characters" //<-- verify this method works//
            },
          
            "comments": {
                minlength: "Comments must be 500 characters or less"
            },
      
        },
    });

//Shows detailed instructions when hovering over question mark glyphicons for each field
$('label span.glyphicon').tooltip();
});