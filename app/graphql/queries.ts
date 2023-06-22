import gql from "graphql-tag";

export const ALL_PRODUCTS_QUERY = gql`
  query Products {
    products {
      id
      imageUrl
      slug
      name
      type
      price
    }
  }
`;

export const FILTERED_PRODUCTS_QUERY = gql`
  query Products($type: ProductType) {
    products(type: $type) {
      id
      imageUrl
      slug
      name
      type
      price
    }
  }
`;

export const GET_SLUGS = gql`
  query Products {
    products {
      id
      slug
    }
  }
`;

export const GET_PRODUCT_ALL_DATA = gql`
  query Product($id: ID!) {
    product(id: $id) {
      name
      seller
      imageUrl
      price
      type
      rentType
      latitude
      longitude
    }
  }
`;

export const GET_UNAVAILABLE_DATES = gql`
  query RentalPeriods($productId: String!) {
    rentalPeriods(productId: $productId) {
      startDate
      endDate
    }
  }
`;

export const GET_PRODUCT_STOCK = gql`
  query Product($id: ID!) {
    product(id: $id) {
      stock
    }
  }
`;
