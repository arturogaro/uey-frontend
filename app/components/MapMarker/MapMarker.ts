"use client";

import { useEffect, useState } from "react";

import { MarkerProps } from "./MapMarkerProps";

export default function MapMarker(options: MarkerProps) {
  const [marker, setMarker] = useState<any>();

  useEffect(() => {
    if (!marker) {
      setMarker(new (window as any).google.maps.Marker());
    }

    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
}
