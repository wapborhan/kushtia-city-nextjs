import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useSingleUser = (username) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  // Query function
  const getUser = async () => {
    const res = await axiosPublic.get(`/api/user/${username}`);
    return res.data?.data;
  };

  const {
    data: singleUser,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user", username],
    queryFn: getUser,
    enabled: !!user, // only fetch when username is available
  });

  return [singleUser, isLoading, isError];
};

export default useSingleUser;
