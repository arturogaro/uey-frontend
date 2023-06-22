import client from "./apollo-client";
import { Product } from "../types/Product";
import { GET_PRODUCT_STOCK } from "./queries";

type ProductResponse = {
  product: Product;
};

export const fetchProductStock = async (
  id: string
): Promise<number | undefined> => {
  try {
    const response = await client.query<ProductResponse>({
      query: GET_PRODUCT_STOCK,
      variables: { id },
    });
    return response.data.product?.stock;
  } catch (error) {
    console.error(error);
    return;
  }
};
