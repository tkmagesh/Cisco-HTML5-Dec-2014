	window.addEventListener("DOMContentLoaded", init);
	

	function init(){
		document.getElementById("btnAddTask").addEventListener("click", onBtnAddTaskClick);
		document.getElementById("btnRemoveCompleted").addEventListener("click", onBtnRemoveCompletedClick);
		window.addEventListener("storage", loadTasksFromStorage);
		loadTasksFromStorage();
	}
	function loadTasksFromStorage(evtArg){
		console.dir(evtArg);
		
		var taskItems = document.getElementById("olTaskList").children;
		for(var i=taskItems.length-1;i>=0;i--)
			taskItems[i].remove();

		//[].forEach.call(document.getElementById("olTaskList").children, function(node){ node.remove()});
		var allTasks = taskStorage.getAll();
		for(var i=0;i<allTasks.length;i++){
			addTaskToList(allTasks[i]);
		}
	}
	function onBtnAddTaskClick(){
		var taskName = document.getElementById("txtTask").value;
		var newTask = taskStorage.add(taskName);
		addTaskToList(newTask);
		
	}
	function addTaskToList(task){
		var newTask = document.createElement("li");
		newTask.innerHTML = task.name;
		newTask.setAttribute("task-id", task.id);
		if (task.isCompleted)
			newTask.classList.add("completed");
		newTask.addEventListener("click", onTaskItemClick);
		document.getElementById("olTaskList").appendChild(newTask);
	}

	function onTaskItemClick(){
		this.classList.toggle("completed");
		var taskId = this.getAttribute("task-id");
		taskStorage.toggle(taskId);
	}

	function onBtnRemoveCompletedClick(){
		var taskItems = document.getElementById("olTaskList").children;
		for(var i=taskItems.length-1;i>=0;i--){
			var taskItem = taskItems[i];
			if (taskItem.classList.contains("completed")){
				var taskId = taskItem.getAttribute("task-id");
				taskStorage.remove(taskId);
				taskItem.remove();
			}
		}
	}

