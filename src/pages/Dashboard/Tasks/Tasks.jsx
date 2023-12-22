import { Link } from "react-router-dom";

const Tasks = () => {
  return (
    <div>
      <h3 className="text-3xl md:text-5xl font-bold text-center">
        Task Status Dashboard
      </h3>
      <Link to="/dashboard/addTask">
        <button className="btn btn-primary rounded-lg">+ Add New Task</button>
      </Link>
    </div>
  );
};

export default Tasks;
