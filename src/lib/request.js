import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

export const getQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
};

export const get = async (url) => {
  const result = await axios.get(url);
  return result.data;
};
