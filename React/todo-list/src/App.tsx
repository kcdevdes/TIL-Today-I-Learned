import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import type { Task } from './models/Task';
import { useState, useEffect, useCallback } from 'react';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const raw = localStorage.getItem('tasks');
    if (raw) {
      try {
        const parsed: (Omit<Task, 'createdAt'> & { createdAt: string })[] =
          JSON.parse(raw);
        setTasks(
          parsed.map((t) => ({
            ...t,
            createdAt: new Date(t.createdAt),
          })) as Task[]
        );
      } catch (e) {
        console.warn('Failed to parse tasks from storage', e);
      }
    }
  }, []);

  // Persist tasks whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback(
    (task: string) => {
      const newTask: Task = {
        id: tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1,
        content: task,
        createdAt: new Date(),
        completed: false,
      };
      setTasks((prev) => [...prev, newTask]);
    },
    [tasks]
  );

  const toggleComplete = useCallback((task: Task) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  }, []);

  const deleteTask = useCallback((task: Task) => {
    setTasks((prev) => prev.filter((t) => t.id !== task.id));
  }, []);

  const completedCount = tasks.filter((t) => t.completed).length;
  const total = tasks.length;
  const progress = total ? Math.round((completedCount / total) * 100) : 0;

  const handlePointerMove = (e: React.PointerEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    document.documentElement.style.setProperty('--pointer-x', x + 'px');
    document.documentElement.style.setProperty('--pointer-y', y + 'px');
  };

  return (
    <div className="App liquid-glass" onPointerMove={handlePointerMove}>
      <h1 className="app-title">✨ Todo List</h1>
      <div className="stats-bar" aria-label="progress stats">
        <span>
          {completedCount}/{total} completed
        </span>
        <div className="progress-track" aria-hidden>
          <div className="progress-fill" style={{ width: progress + '%' }} />
        </div>
        <span className="progress-percent">{progress}%</span>
      </div>
      <section className="add-task">
        <AddTask addTask={addTask} />
      </section>
      <section className="task-list">
        <TaskList
          tasks={tasks}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
        />
      </section>
    </div>
  );
}

export default App;
