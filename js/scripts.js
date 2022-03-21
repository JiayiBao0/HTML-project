function showDescription(descript) {
    $("#description").html("Description: " + descript);
}

function hideDescription() {
    $("#description").hide();
}

function validate() {
    var txtdatein = $("#ubirth").val();
    var datein = new Date(txtdatein);
    if (datein >= new Date()) {
        alert("Date of birth is not valid. Date has to be before today.");
        return false;
    }

    var phonein = $("#phone").val();
    if (phonein.length != 10 || isNaN(phone)) {
        alert("Phone number is not valid or not in a valid format.");
        return false;
    }
}