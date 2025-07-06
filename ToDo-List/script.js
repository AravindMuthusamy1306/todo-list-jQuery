$("#input-list").on("input", function(event){
    $("#preview").text("Live Preview: "+ $(this).val());
});
function addList() {
    let task = $("#input-list").val().trim()
        if (task === "") {
            alert("Please add a task");
            return;
        }
        else{
            $("#task-list").append("<li>"+$("#input-list").val()+"</li>")
            .fadeIn(500);
            $("#input-list").val("");
        }
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
$("#task-list").on("click","li",function () { 
    $(this).toggleClass("done");
});
