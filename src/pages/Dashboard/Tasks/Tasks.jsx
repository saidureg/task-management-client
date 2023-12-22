import { Link } from "react-router-dom";
import ToDoList from "./ToDoList/ToDoList";
import OngoingList from "./OngoingList/OngoingList";
import CompletedList from "./CompletedList/CompletedList";

const Tasks = () => {
  return (
    <div>
      <h3 className="text-3xl md:text-5xl font-bold text-center">
        Task Status Dashboard
      </h3>
      <Link to="/dashboard/addTask">
        <button className="btn btn-primary rounded-lg">+ Add New Task</button>
      </Link>

      <div className="bg-base-300">
        <hr />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-12 mx-8">
          {/* to do list */}
          <div>
            <ToDoList />
          </div>
          {/* ongoing list */}
          <div>
            <OngoingList />
          </div>
          {/* completed list */}
          <div>
            <CompletedList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tasks;
