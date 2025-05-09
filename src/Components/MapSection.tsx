"use client";
import React, { useEffect, useRef, useState } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface House {
  id: number;
  lat: number;
  lng: number;
}

declare global {
  interface Window {
    google: any;
  }
}

const MapSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
      version: "weekly",
    });

    loader
      .load()
      .then(() => {
        const google = window.google;
        const mapInstance = new google.maps.Map(mapRef.current!, {
          center: { lat: 12.9716, lng: 77.5946 },
          zoom: 12,
        });
        setMap(mapInstance);
      })
      .catch((err: Error) => console.error("Error loading Google Maps:", err));
  }, []);

  useEffect(() => {
    if (!map) return;

    fetch("/api/houses")
      .then((res) => res.json())
      .then((houses: House[]) => {
        houses.forEach(({ id, lat, lng }) => {
          new window.google.maps.Marker({
            position: { lat, lng },
            map,
            icon: "/images/house-marker.png",
          });
        });
      })
      .catch((err: Error) => console.error("Error fetching houses:", err));
  }, [map]);

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "400px",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    />
  );
};

export default MapSection;
