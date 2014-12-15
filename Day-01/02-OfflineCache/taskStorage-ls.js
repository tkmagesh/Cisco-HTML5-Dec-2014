var taskStorage = (function(){
		var storage = window.localStorage;
		function getAllTasks(){
			var result = [];
			for(var i=0;i<storage.length;i++){
				var taskId = storage.key(i);
				var taskAsString = storage.getItem(taskId);
				var task = window.JSON.parse(taskAsString);
				result.push(task);
			}
			return result;
		}

		function addTask(taskName){
			var newTaskId = new Date().getTime().toString();
			var newTask = {
				id : newTaskId,
				name : taskName,
				isCompleted : false
			};

			storage.setItem(newTaskId, window.JSON.stringify(newTask));
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
	