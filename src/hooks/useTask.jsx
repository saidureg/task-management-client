import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useTask = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks/user/${user.email}`);
      return res.data;
    },
  });

  return [tasks, refetch];
};

export default useTask;
