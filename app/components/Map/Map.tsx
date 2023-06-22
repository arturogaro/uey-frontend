"use client";

import React, { useState, useRef, useEffect } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";

import { MapProps, MapRenderProps } from "./MapProps";
import MapMarker from "../MapMarker/MapMarker";

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

function MapRender({ latitude, longitude, children }: MapRenderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new (window as any).google.maps.Map(ref.current, {
          center: { lat: latitude, lng: longitude },
          zoom: 5,
        })
      );
    }
  }, [ref, map]);

  return (
    <>
      <div
        ref={ref}
        style={{
          width: "100%",
          height: "450px",
        }}
      />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
}

export default function Map({ latitude, longitude }: MapProps) {
  return (
    <Wrapper
      apiKey={process.env.NEXT_PUBLIC_MAPS_KEY as string}
      render={render}
    >
      <MapRender latitude={latitude} longitude={longitude}>
        <MapMarker
          position={{ lat: latitude as number, lng: longitude as number }}
        />
      </MapRender>
    </Wrapper>
  );
}
