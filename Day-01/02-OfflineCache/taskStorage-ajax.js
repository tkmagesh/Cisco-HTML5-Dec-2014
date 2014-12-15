var taskStorage = (function(){
		function getAllTasks(){
			console.log("trying to load the data from the server");			
			var result = [];
			
			return result;
		}

		function addTask(taskName){
			console.log("trying to save the task in the server");
			return newTask;
		}

		function removeTask(taskId){
			storage.removeItem(taskId);
		}

		function toggleTask(taskId){
			var taskAsString = storage.getItem(taskId);
			var task = window.JSON.parse(taskAsString);
			task.isCompleted = !task.isCompleted;
			storage.setItem(task.id, JSON.stringify(task));
		}

		return {
			getAll : getAllTasks,
			add : addTask,
			remove : removeTask,
			toggle: toggleTask
		};

	})();
	