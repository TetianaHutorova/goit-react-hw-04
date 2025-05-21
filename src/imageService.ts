import axios from "axios";

export const fetchFotos = async (descr, currentPage) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: {
      query: descr,
      client_id: "T2OkjVh-CQh56fAabpAAHCMVo1opbLPlGhHKgYfsclg",
      page: currentPage,
    },
  });
   return response.data.results;
};
