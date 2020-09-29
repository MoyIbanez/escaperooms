$(document).ready(function() {
    roomEngine();
    $("#keyBox").hide();
});

var togglePass = false;
var roomData

function roomEngine(room) {

    //Remove on room selection.
    if(!room) {
        room = 1;
    }

    var baseURL = "http://localhost/escaperooms/escaperooms/api/post.php?roomID="
    $.ajax({
        url: baseURL + room,
        type : 'GET'
      })
        .done(function( data ) {
            roomData = JSON.parse(data);
            console.log(roomData);
            $("#roomTitle").html(roomData.roomName);
            $("#roomDescription").html(roomData.roomDescription);
            $("#roomDescription").html(roomData.roomDescription);
            $("#roomContent").html(roomData.roomContent);
        });

}

$("#keyWord").keyup(function(){

    if($("#keyWord").val().length > 0){
        $("#lockButton").html('<i class="fas fa-key"></i>');
    }else{
        $("#lockButton").html('<i class="fas fa-times"></i>');
    }

});

function showPassBox(){
    togglePass = true;
    $("#keyBox").show();
    !this.togglePass;

    $("#lockButton").html('<i class="fas fa-times"></i>');
    
}

function hidePassBox(){

    if($("#keyWord").val() == roomData.roomPassword){
        alert(roomData.roomPassword + " Es correcto!");
        roomEngine(roomData.nextRoom);
    }
    togglePass = false;
    $("#keyBox").hide();
    !this.togglePass;
    $("#keyWord").val("");
    $("#lockButton").html('<i class="fas fa-lock"></i>');
}

$("#lockButton").click(function(){

    if (togglePass == false){
        showPassBox();
    }else if(togglePass == true){
        hidePassBox();
    }

});
