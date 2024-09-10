import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import ENDPOINTS from "../utils/endpoints";
import queryKeys from "../utils/queryKeys";

const createPost = async (data: { name: string }) => {
  const response = await axios.post(ENDPOINTS.post, data);
  return response;
};

const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKeys.posts] });
    },
  });
};
export default useCreatePost;
