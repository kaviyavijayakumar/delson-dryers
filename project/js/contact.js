//warranty.js
$(document).ready(function() {
    //focus moved to First Name text box when form is first displayed
    $("#fName").focus();
    // apply the validate plugin, rules only, custom error messages
    $("#contact_form").validate({
        
        rules: {
            //Validate all text boxes
            fname:{
                required: true,
				fName: true               
            },
            lname:{
                required: true,
                lName: true
            },
            email:{
                required: true,
				email: true
            },            
            phone:{
                required: true,
				phoneUS: true
            },
        },//end rules
        messages: {
            //custom error message for first name
            fname: {
                required: "Please enter your first name."
            },
            lname: {
                required: "Please enter your last name."
            },
            //error message for email
            email: {
                required: "Please enter your correct email address"
            },
            phone: {
                required: "Please enter your correct phone number"
            }
        }
    }); // end of validate function
}); // end of ready function
