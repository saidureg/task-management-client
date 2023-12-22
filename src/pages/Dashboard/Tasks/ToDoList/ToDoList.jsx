import useTask from "../../../../hooks/useTask";
import ToDoListCard from "./ToDoListCard";

const ToDoList = () => {
  const [tasks] = useTask();
  console.log(tasks);
  return (
    <div>
      <h3>To Do: {tasks.length}</h3>
      <div className="my-2">
        {tasks.map((task) => (
          <ToDoListCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
