import { toast } from "react-toastify";
import useAuth from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BsDatabaseFillAdd } from "react-icons/bs";
// import moment from "moment/moment";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";

const AddTask = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();
  const navigate = useNavigate();
  const email = user?.email;
  const status = "to-do";
  //   const time = moment().format("YYYY-MM-DD h:mm:ss a");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const { title, deadline, description, priority } = data;
    const taskInfo = {
      email,
      title,
      deadline,
      description,
      priority,
      status,
    };
    const res = await axiosPublic.post("/tasks", taskInfo);
    if (res.data.insertedId) {
      reset();
      toast.success(`${title} is added to the DB!`);
      navigate("/dashboard/tasks");
    }
  };
  return (
    <div>
      <h3 className="text-center text-3xl font-semibold">Add Your Task</h3>

      <div>
        <div className="bg-white px-5 py-4 rounded w-1/2 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-6 my-6">
              {/* product_name */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Title*</span>
                </label>
                <input
                  type="text"
                  placeholder="Title"
                  {...register("title", { required: true })}
                  className="input input-bordered w-full "
                />
                {errors.title && (
                  <span className="text-red-600">Title is required</span>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description*</span>
              </label>
              <textarea
                {...register("description", {
                  required: true,
                  minLength: 20,
                  maxLength: 500,
                })}
                className="textarea textarea-bordered h-24"
                placeholder="Product Description"
              ></textarea>
              {errors.description?.type === "required" && (
                <p className="text-red-600">Description is required</p>
              )}
              {errors.description?.type === "minLength" && (
                <p className="text-red-600">
                  Description must be 20 characters
                </p>
              )}
              {errors.description?.type === "maxLength" && (
                <p className="text-red-600">
                  Description must be less than 500 characters
                </p>
              )}
            </div>
            {/* deadlines */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Deadline*</span>
              </label>
              <input
                type="text"
                placeholder="Deadline"
                {...register("deadline", {
                  required: true,
                })}
                className="input input-bordered w-full "
              />
              {errors.deadline && (
                <span className="text-red-600">Deadline is required</span>
              )}
            </div>
            {/* Priority */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Priority*</span>
              </label>
              <select
                defaultValue="default"
                {...register("priority", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
                  Set Priority
                </option>
                <option value="low">Low</option>
                <option value="Moderate">Moderate</option>
                <option value="high">High</option>
                <option value="others">Others</option>
              </select>
              {errors.priority && (
                <span className="text-red-600">Priority is required</span>
              )}
            </div>

            <div className="flex justify-center mt-6">
              <button className="btn bg-gradient-to-r from-[#835D23] to-[#E76F51] text-white text-lg">
                Submit <BsDatabaseFillAdd />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
