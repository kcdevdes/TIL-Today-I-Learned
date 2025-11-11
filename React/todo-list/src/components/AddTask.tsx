import { useRef, useState } from 'react';

interface AddTaskProps {
  addTask: (task: string) => void;
}

const AddTask = ({ addTask }: AddTaskProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const task = value.trim();
    if (task) {
      addTask(task);
      setValue('');
      inputRef.current?.focus();
    } else {
      inputRef.current?.focus();
    }
  };

  return (
    <div className="add-task-wrapper">
      <form onSubmit={handleSubmit} className="add-task-form">
        <input
          type="text"
          name="task"
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add a task and press Enter..."
          aria-label="Task description"
        />
        <button
          className="add-task-button"
          type="submit"
          disabled={!value.trim()}
          aria-disabled={!value.trim()}
        >
          ➕
        </button>
      </form>
    </div>
  );
};

export default AddTask;
