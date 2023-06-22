import { Product } from "../types/Product";
import client from "./apollo-client";
import { ALL_PRODUCTS_QUERY, FILTERED_PRODUCTS_QUERY } from "./queries";

type ProductResponse = {
  products: Product[];
};

export const fetchProduct = async (type: string): Promise<Product[]> => {
  try {
    let response;
    if (type === "") {
      response = await client.query<ProductResponse>({
        query: ALL_PRODUCTS_QUERY,
      });
    } else {
      response = await client.query<ProductResponse>({
        query: FILTERED_PRODUCTS_QUERY,
        variables: { type },
      });
    }
    return response.data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
};
