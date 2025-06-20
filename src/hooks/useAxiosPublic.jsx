import axios from "axios";

const axiosPublic = axios.create({
  baseURL: process.env.BASE_URL,
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
