export const useProducts = () => {
  const getProducts = async (limit) => {
    const { data, error } = await useFetch(
      `https://dummyjson.com/products?limit=${limit}`
    );

    if (error.value) {
      console.error("Error fetching products:", error.value);
      return [];
    }

    return data.value?.products || [];
  };

  return { getProducts };
};
