import MenuItem from "../Sidebar/MenuItem";
import { FaRegAddressBook } from "react-icons/fa";

const TaskMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaRegAddressBook}
        label="Dashboard"
        address="/dashboard/tasks"
      />
    </>
  );
};

export default TaskMenu;
