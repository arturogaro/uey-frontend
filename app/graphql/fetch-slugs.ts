import client from "./apollo-client";
import { GET_SLUGS } from "../graphql/queries";
import { Product } from "../types/Product";

type ProductResponse = {
  products: Product[];
};

export const fetchSlugs = async (): Promise<Product[]> => {
  try {
    const response = await client.query<ProductResponse>({
      query: GET_SLUGS,
    });
    return response.data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
};
