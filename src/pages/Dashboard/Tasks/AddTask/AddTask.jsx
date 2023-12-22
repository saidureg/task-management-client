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
  const OwnerName = user?.displayName;
  const OwnerEmail = user?.email;
  const OwnerImage = user?.photoURL;
  const status = "pending";
  //   const time = moment().format("YYYY-MM-DD h:mm:ss a");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const { product_name, photoURL, externalLink, description } = data;
    const taskInfo = {
      OwnerName,
      OwnerEmail,
      product_name,
      photoURL,
      description,
      externalLink,
      status,
    };
    const res = await axiosPublic.post("/tasks", taskInfo);
    if (res.data.insertedId) {
      reset();
      toast.success(`${product_name} is added to the DB!`);
      navigate("/dashboard/myProduct");
    }
  };
  return (
    <div>
      <h3 className="text-center text-3xl font-semibold">Add Your Task</h3>

      <div>
        <div className="bg-white mx-10 px-5 py-4 rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-6 my-6">
              {/*Owner name */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Owner name</span>
                </label>
                <input
                  type="text"
                  defaultValue={OwnerName}
                  disabled
                  className="input input-bordered w-full "
                />
              </div>
              {/* Owner Email */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Owner Email</span>
                </label>
                <input
                  type="text"
                  defaultValue={OwnerEmail}
                  disabled
                  className="input input-bordered w-full "
                />
              </div>
            </div>
            {/* Owner image */}
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Owner Image</span>
              </label>
              <input
                type="text"
                defaultValue={OwnerImage}
                disabled
                className="input input-bordered w-full "
              />
            </div>
            <div className="flex gap-6 my-6">
              {/* product_name */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Product name*</span>
                </label>
                <input
                  type="text"
                  placeholder="Product name"
                  {...register("product_name", { required: true })}
                  className="input input-bordered w-full "
                />
                {errors.product_name && (
                  <span className="text-red-600">Product name is required</span>
                )}
              </div>
            </div>
            <div className="flex gap-6 my-6">
              {/* External Link */}
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">External Link*</span>
                </label>
                <input
                  type="text"
                  placeholder="External Link"
                  {...register("externalLink", {
                    required: true,
                  })}
                  className="input input-bordered w-full "
                />
                {errors.externalLink && (
                  <span className="text-red-600">
                    External Link is required
                  </span>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Product Description*</span>
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
