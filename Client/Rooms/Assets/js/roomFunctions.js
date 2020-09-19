$(document).ready(function() {
    $("#keyBox").hide();
});

function enterPassword() {

    $("#keyBox").show();
    $("#lockButton").html('<i class="fas fa-key"></i>');

    var userKey = $("#keyWord").val();
    var chances = 5;

    $("#lockButton").click(function() {
        if (userKey == "abc") {
            $("#lockButton").html('<i class="fas fa-lock-open"></i>');
            Swal.fire(
                'Íreloooo',
                'Vamos al siguiente cuarto',
                'success'
              )
        } else{
            $("#lockButton").html('<i class="fas fa-lock"></i>');
            Swal.fire(
                'Chale, así no era, mai',
                'Te quedas hasta que acabes',
                'error'
            );
            setTimeout(function(){
                location.reload();
            }, 2000);

        }
    });

}