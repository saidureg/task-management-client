import { FaGithub } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";

const GithubLogin = () => {
  const { gitHubLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard/tasks";
  const handleGithubSignIn = () => {
    gitHubLogin()
      .then(() => {
        navigate(from, { replace: true });
        toast("You have successfully logged in");
      })
      .catch((error) => {
        swal("Oops!", error.message, "error");
      });
  };
  return (
    <div>
      <FaGithub
        onClick={handleGithubSignIn}
        className="text-5xl border rounded-full border-pink-500 p-2"
      />
    </div>
  );
};

export default GithubLogin;
