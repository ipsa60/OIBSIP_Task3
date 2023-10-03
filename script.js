document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskDropdown = document.getElementById("taskDropdown");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const option = document.createElement("option");
            option.text = taskText;
            taskDropdown.add(option);
            
            taskInput.value = "";
        }
    });

    taskDropdown.addEventListener("change", function () {
        if (taskDropdown.selectedIndex !== 0) {
            taskDropdown.remove(taskDropdown.selectedIndex);
        }
    });
});

