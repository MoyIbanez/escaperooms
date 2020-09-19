$(document).ready(function() {
    $("#keyBox").hide();
});

function enterPassword() {

    $("#keyBox").show();
    $("#lockButton").html('<i class="fas fa-key"></i>');

    var userKey = $("#keyWord").val();

    $("#lockButton").click(function() {
        if (userKey == 'abc') {
            console.log("Success");
            $("#lockButton").html('<i class="fas fa-lock-open"></i>');
            $("#lockBox").attr("class", "is-valid");
            $("#lockBox").attr("class", "success");
        } else {
            $("#lockButton").html('<i class="fas fa-lock"></i>');
            $("#lockBox").attr("class", "fail");
        }
    });

}