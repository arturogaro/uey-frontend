import client from "./apollo-client";
import { GET_UNAVAILABLE_DATES } from "./queries";
import { RentalPeriod } from "../types/RentalPeriod";

type RentalPeriodResponse = {
  rentalPeriods: RentalPeriod[];
};

export const fetchUnavailableDates = async (
  id: string
): Promise<RentalPeriod[]> => {
  try {
    const response = await client.query<RentalPeriodResponse>({
      query: GET_UNAVAILABLE_DATES,
      variables: { productId: id },
    });

    return response.data.rentalPeriods;
  } catch (error) {
    console.error(error);
    return [];
  }
};
