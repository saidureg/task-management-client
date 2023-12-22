import useTask from "../../../../hooks/useTask";
import CompletedListCard from "./CompletedListCard";

const CompletedList = () => {
  const [tasks] = useTask();
  return (
    <div>
      <h3>To Do: {tasks.length}</h3>
      <div className="my-2">
        {tasks.map((task) => (
          <CompletedListCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default CompletedList;
