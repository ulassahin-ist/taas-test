export const useProducts = () => {
  const getProducts = async (limit, skip) => {
    try {
      const { data, error } = await useFetch(
        `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
      );

      if (error.value) {
        console.error("Error fetching products:", error.value);
        return [];
      }

      return data.value?.products || [];
    } catch (err) {
      console.error("Error fetching products:", err);
      return [];
    }
  };

  return { getProducts };
};
