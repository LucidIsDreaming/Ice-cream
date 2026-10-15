document.getElementById("icecream-form").onsubmit = () => {

    let isValid = true;

    // Clear all errors
    clearErrors();
    
    // Validate first name
    let fname = document.getElementById("fname").value.trim();
    if (fname === "") {
        document.getElementById("err-fname").style.display = "block";
        isValid = false;
    }

    // Validate email
    let email = document.getElementById("email").value.trim();
    if (email === "") {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }

    // Validate method: cone choices (pickup or delivery)
    let methodSelected = false;
    let methodButtons = document.getElementsByName("method");
    for (let i=0; i<methodButtons.length; i++) {
        if(methodButtons[i].checked) {
            methodSelected = true;
        }
    }

    if (!methodSelected) {
        document.getElementById("err-method").style.display = "block";
        isValid = false;
    }

    // Validate flavor choices (pizza size)
    let size = document.getElementById("flavor").value;
    if (size == "none") {
        document.getElementById("err-flavor").style.display = "block";
        isValid = false;

    }    

    // Do not submit the form if data is in-valid
    return isValid;
};

function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}