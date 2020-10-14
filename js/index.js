//business logic
function CyeshaInfo(fullname, frequency, location, email, phonenumber) {
    this.fullname = fullname;
    this.frequency = frequency;
    this.location = location;
    this.phonenumber = phonenumber;
    this.email = email;
}




$("form#carwash").submit(function(event) {
    event.preventDefault();
    var inputFname = $("input#fullname").val();
    var inputFrequency = $("#cleaning-frequency").find(":selected").text();
    var inputLocation = $("#location").find(":selected").text();
    var inputphone = $("input#phonenumber").val();
    var inputEmail = $("input#email").val();
    var inputCarModal = $("#car-modal").find(":selected").text();
    $("#request").show();
    $(".fullName").text(inputFname);
    $(".location-request").text(inputLocation);
    $(".frequency-request").text(inputFrequency);
    $(".service-request").text("Car Wash");
    $(".modal-request").text(inputCarModal);


    console.log(inputCarModal);
});

$("form#houseform").submit(function(event) {
    event.preventDefault();
    var inputHouseRoom = $("#rooms").find(":selected").text();
    $("#request").show();
    // $(".fullname").text(inputFname);
    // $(".location-request").text(inputLocation);
    // $(".frequency-request").text(inputFrequency);
    console.log(inputHouseRoom);
});
$("form#gardenform").submit(function(event) {
    event.preventDefault();
    var inputTypeGarden = $("#type-garden").find(":selected").text();
    $("#request").show();
    // $(".fullname").text(inputFname);
    // $(".location-request").text(inputLocation);
    // $(".frequency-request").text(inputFrequency);
    console.log(inputTypeGarden);
});
$("form#officeform").submit(function(event) {
    event.preventDefault();
    var inputSizeOffice = $("#size-office").find(":selected").text();
    // $("#request").show();
    // $(".fullname").text(inputFname);
    // $(".location-request").text(inputLocation);
    // $(".frequency-request").text(inputFrequency);
    // console.log(inputSizeOffice);
});


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