"use client";

import { useEffect, useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";

import { DynamicDataProps } from "./DynamicDataProps";
import { fetchUnavailableDates } from "@/app/graphql/fetch-unavailable-dates";
import { ProductType } from "@/app/types/ProductType";
import { RentType } from "@/app/types/RentType";
import { fetchProductStock } from "@/app/graphql/fetch-product-stock";
import { ReservedDate } from "./ReservedDate";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function DynamicData({
  id,
  rentType,
  productType,
}: DynamicDataProps) {
  const [stock, setStock] = useState<number | null>(null);
  const [unavailableDates, setUnavailableDates] = useState<ReservedDate[]>([]);

  useEffect(() => {
    const fetchDynamicData = async () => {
      if (productType === ProductType.SIMPLE) {
        const stock = await fetchProductStock(id);
        setStock(stock || 0);
      } else {
        const rentalPeriods = await fetchUnavailableDates(id);
        const blockedDates = rentalPeriods.map(
          (period): ReservedDate => ({
            start: moment(period.startDate).toDate(),
            end: moment(period.endDate).toDate(),
            title: "No disponible",
            allDay: rentType === RentType.PER_NIGHT,
          })
        );
        setUnavailableDates(blockedDates);
      }
    };
    fetchDynamicData();
  }, [productType]);

  return (
    <nav className="flex space-x-4">
      {productType === ProductType.SIMPLE && (
        <p className="text-sm text-gray-500">Inventario: {stock}</p>
      )}

      {productType !== ProductType.SIMPLE && (
        <Calendar
          localizer={localizer}
          events={unavailableDates}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      )}
    </nav>
  );
}
