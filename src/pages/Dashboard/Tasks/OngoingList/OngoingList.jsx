import useTask from "../../../../hooks/useTask";
import OngoingListCard from "./OngoingListCard";

const OngoingList = () => {
  const [tasks] = useTask();
  return (
    <div>
      <h3>Ongoing: {tasks.length}</h3>
      <div className="my-2">
        {tasks.map((task) => (
          <OngoingListCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default OngoingList;
