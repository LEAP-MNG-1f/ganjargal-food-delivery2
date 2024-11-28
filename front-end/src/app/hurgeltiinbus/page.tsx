import React, { useEffect, useRef, useState } from "react";

// Define types for our data structure
type Address = {
  name: string;
};

type Zone = {
  name: string;
  addresses: Address[];
};

// Centralize our data
const DELIVERY_ZONES: Zone[] = [
  {
    name: "А бүс",
    addresses: [
      { name: "Нархан хотхон" },
      { name: "26-р байр" },
      { name: "45-р байр" },
      { name: "3-р байр" },
      { name: "Хоймор хотхон" },
      { name: "Хангай хотхон" },
    ],
  },
  {
    name: "Б бүс",
    addresses: [
      { name: "Нархан хотхон" },
      { name: "26-р байр" },
      { name: "45-р байр" },
      { name: "3-р байр" },
      { name: "Хоймор хотхон" },
      { name: "Хангай хотхон" },
    ],
  },
];

const GoogleMaps = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const initMap = () => {
      try {
        const google = window.google;
        if (!google || !mapRef.current) {
          throw new Error("Google Maps not loaded");
        }

        const mapOptions = {
          center: { lat: 47.91996922842304, lng: 106.91756534492119 },
          zoom: 13,
          styles: [
            {
              featureType: "poi",
              elementType: "labels",
              stylers: [{ visibility: "off" }],
            },
          ],
          mapTypeControl: false,
          fullscreenControl: false,
        };

        if (!mapInstance.current) {
          mapInstance.current = new google.maps.Map(mapRef.current, mapOptions);
        }
      } catch (err) {
        setError("Failed to load map. Please try again later.");
        console.error("Map initialization error:", err);
      }
    };

    // Load Google Maps script
    if (!window.google) {
      const script = document.createElement("script");
      // Note: In a real application, use environment variables instead of hardcoding the API key
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyBeK6kNAnqtWp2xZpPHmcXOjESpg5cu6ek";
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      script.onerror = () => setError("Failed to load Google Maps");
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      mapInstance.current = null;
    };
  }, []);

  const ZoneCard = ({ zone }: { zone: Zone }) => (
    <div className="flex flex-col w-full md:w-[588px] h-auto min-h-[388px] p-4 md:p-6 items-start rounded-2xl shadow-md gap-4">
      <div className="w-full text-text-secondary font-poppins text-lg md:text-22 font-bold leading-normal py-4 border-b border-[#18BA51]">
        {zone.name}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {zone.addresses.map((address, index) => (
          <p
            key={`${zone.name}-${index}`}
            className="text-black text-base font-sf-pro font-normal leading-normal"
          >
            {address.name}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col w-full h-auto px-4 md:px-[120px] my-6 md:my-10 gap-6 md:gap-8">
      {error ? (
        <div className="text-red-500 text-center p-4 bg-red-50 rounded">
          {error}
        </div>
      ) : (
        <div
          ref={mapRef}
          className="w-full h-[300px] md:h-[616px] rounded-lg"
        />
      )}

      <div className="flex flex-col gap-6 md:gap-10">
        <div className="flex items-center text-text-secondary font-poppins text-lg md:text-22 font-bold leading-normal gap-1">
          <img
            src="/api/placeholder/20/20"
            alt="Delivery Zone Icon"
            className="w-4 h-4 md:w-5 md:h-5"
          />
          <span>Хүргэлтийн бүс дэх хаягууд</span>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-5">
          {DELIVERY_ZONES.map((zone, index) => (
            <ZoneCard key={index} zone={zone} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoogleMaps;
