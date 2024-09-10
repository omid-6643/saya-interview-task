import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ENDPOINTS from "../utils/endpoints";
import queryKeys from "../utils/queryKeys";

const fetchPosts = async (id: string) => {
  const response = await axios.get(ENDPOINTS.post, {
    params: { id },
  });
  return response.data;
};

const useSinglePost = (id: string) => {
  return useQuery({
    queryKey: [queryKeys.singlePost],
    queryFn: () => fetchPosts(id),
  });
};

export default useSinglePost;
