$(document).ready(function(){

    $(".snapshots .more").click(function(){
        $.ajax({
            url : "./snapshots_add.html",
            success : function(result){
                $(".snapshots_add").html(result);
            }
        });
        $(this).hide();
    });

});