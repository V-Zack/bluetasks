package br.com.softblue.bluetasks.domain.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.core.annotation.HandleAfterSave;
import org.springframework.data.rest.core.annotation.HandleBeforeCreate;
import org.springframework.data.rest.core.annotation.RepositoryEventHandler;
import org.springframework.stereotype.Component;

@Component
@RepositoryEventHandler
public class TaskRepositoryEventHandler {

	private TaskRepository taskRepository;
	
	@Autowired
	public TaskRepositoryEventHandler(TaskRepository taskRepository) {
		this.taskRepository = taskRepository;
	}
	
	@HandleAfterSave
	@HandleBeforeCreate
	public void handle(Task task) throws DuplicateTaskException {
		
		Task taskDB = taskRepository.findByDescription(task.getDescription());
		boolean duplicate = false;
		
		if(taskDB != null ) {
			if((task.getId() == null || task.getId() == 0) && task.getDescription().equals(taskDB.getDescription())) {
				duplicate = true;
			}
			if(task.getId() != null && task.getId() > 0 && !task.getId().equals(taskDB.getId())) {
				duplicate = true;
			}
		}
		
		if( duplicate ) {
			throw new DuplicateTaskException("Já existe uma tarefa com esta descrição");
		}
	}
	

}
