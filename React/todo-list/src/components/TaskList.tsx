import type { Task } from '../models/Task';

interface TaskListProps {
  tasks: Task[];
  deleteTask: (task: Task) => void;
  toggleComplete: (task: Task) => void;
}

const TaskList = ({ tasks, deleteTask, toggleComplete }: TaskListProps) => {
  return (
    <div className="task-list-wrapper">
      <h2>Tasks</h2>
      {tasks.length > 0 ? (
        <ul className="task-items">
          {tasks.map((task) => (
            <li key={task.id} className={task.completed ? 'completed' : ''}>
              <div
                className="task-main"
                onClick={() => toggleComplete(task)}
                role="button"
                tabIndex={0}
              >
                <span
                  className={'status-circle ' + (task.completed ? 'on' : '')}
                />
                <p className="task-content">{task.content}</p>
              </div>
              <div className="task-actions">
                <button
                  className="delete-task-button"
                  onClick={() => deleteTask(task)}
                  aria-label="Delete task"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="empty-state">No tasks yet. Add your first one above ✨</p>
      )}
    </div>
  );
};

export default TaskList;
