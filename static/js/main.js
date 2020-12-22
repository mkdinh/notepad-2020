function loadTasks() {
  d3.json("/api/tasks-postgres").then((data) => {
    var listGroup = d3.select("#tasks");
    listGroup.html("");

    data.forEach((item) => {
      var li = listGroup.append("li");
      li.text(item.description);
      li.attr("class", "list-group-item");
    });
  });
}

loadTasks();
