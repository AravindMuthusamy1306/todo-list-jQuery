$("#input-list").on("input", function(event){
    $("#preview").text("Live Preview: "+ $(this).val());
});
function addList() {
        $("#task-list").append("<li>"+$("#input-list").val()+"</li>");
        $("#input-list").val("");
}
$("#input-list").keydown(function (event) {
    if (event.key === "Enter") {
        addList();
    }
});
$("#btn-add").click(addList);

$("#btn-remove").click(function () { 
    $("#preview").text("Live Preview: ");
    $("#task-list").empty();
});