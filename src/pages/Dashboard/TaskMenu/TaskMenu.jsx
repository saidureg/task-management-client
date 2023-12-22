import MenuItem from "../Sidebar/MenuItem";
import { FaTasks } from "react-icons/fa";

const TaskMenu = () => {
  return (
    <>
      <MenuItem icon={FaTasks} label="Dashboard" address="/dashboard/tasks" />
    </>
  );
};

export default TaskMenu;
