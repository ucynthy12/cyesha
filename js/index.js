//business logic
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}

//interface logic
$("form#myForm").submit(function(event) {
    var name = $("input#nameTxt").val();
    var email = $("input#mailTxt").val();
    var msg = $("textarea#messageTxt").val();

    if (name != "" && email != "" && msg != "") {
        alert(
            name +
            ", We have recieved your feedback. Thank you for your support and reach to us, it means a lot"
        );
    } else if (!isEmail(email)) {
        alert("incomplete, try again please");
    } else {
        alert("invalid input");
    }
    event.preventDefault();
});