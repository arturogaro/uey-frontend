import client from "./apollo-client";
import { Product } from "../types/Product";
import { GET_PRODUCT_ALL_DATA } from "./queries";

type ProductResponse = {
  product: Product;
};

export const fetchProductAllData = async (id: string): Promise<Product | null> => {
  try {
    const response = await client.query<ProductResponse>({
      query: GET_PRODUCT_ALL_DATA,
      variables: { id },
    });
    return response.data.product;
  } catch (error) {
    console.error(error);
    return null;
  }
};
