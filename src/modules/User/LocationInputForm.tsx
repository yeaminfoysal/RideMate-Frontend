/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import mbxClient from "@mapbox/mapbox-sdk";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import { Input } from "@/components/ui/input";

const baseClient = mbxClient({ accessToken: import.meta.env.VITE_MAPBOX_TOKEN });
const geocodingClient = mbxGeocoding(baseClient);

interface LocationInputProps {
  label: string;
  onSelect: (place: { name: string; lat: number; lng: number }) => void;
  value?: { name: string; lat: number; lng: number } | null;
  icon?: React.ReactNode;
  className?: string;
}

const LocationInput: React.FC<LocationInputProps> = ({
  label,
  onSelect,
  value,
  icon,
  className
}) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  // ✅ Sync redux value to input field
  useEffect(() => {
    if (value?.name) {
      setQuery(value.name);
    }
  }, [value]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);

    if (val.length > 2) {
      try {
        const response = await geocodingClient
          .forwardGeocode({
            query: val,
            autocomplete: true,
            limit: 10, // Increased to show more results
            // Prioritize Bangladesh locations
            countries: ['BD'], // Only show results from Bangladesh
            proximity: [90.4125, 23.8103], // Center of Dhaka, Bangladesh (lng, lat)
            // Removed types restriction to show ALL locations including neighborhoods
          })
          .send();

        setSuggestions(response.body.features);
      } catch (err) {
        console.error(err);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleSelect = (place: any) => {
    setQuery(place.place_name);
    setSuggestions([]);
    onSelect({
      name: place.place_name,
      lat: place.center[1],
      lng: place.center[0],
    });
  };

  // Get user's current location using browser geolocation
  const getCurrentLocation = async () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsLoadingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Reverse geocode to get address from coordinates
          const response = await geocodingClient
            .reverseGeocode({
              query: [longitude, latitude],
              limit: 1,
            })
            .send();

          const place = response.body.features[0];
          if (place) {
            setQuery(place.place_name);
            onSelect({
              name: place.place_name,
              lat: latitude,
              lng: longitude,
            });
          }
        } catch (err) {
          console.error("Reverse geocoding error:", err);
          alert("Failed to get address for your location");
        } finally {
          setIsLoadingLocation(false);
        }
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert("Failed to get your location. Please enable location permission.");
        setIsLoadingLocation(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  return (
    <div className={`relative w-full ${className}`}>
      <label className="block font-medium text-sm text-gray-700 dark:text-gray-300 mb-1.5">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground z-10 pointer-events-none">
            {icon}
          </div>
        )}
        <Input
          type="text"
          value={query}
          onChange={handleChange}
          className={`w-full transition-all duration-200 border-gray-200 dark:border-gray-800 focus:ring-2 focus:ring-primary/20 ${icon ? "pl-10" : "pl-3"
            }`}
          placeholder={`Enter ${label}`}
        />

        {/* Show "Use Current Location" button only for Pickup Location */}
        {label === "Pickup Location" && (
          <button
            type="button"
            onClick={getCurrentLocation}
            disabled={isLoadingLocation}
            className="absolute right-2 top-1/2 -translate-y-1/2 px-3 py-1.5 text-xs font-medium text-primary hover:text-primary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border-l border-gray-200 dark:border-gray-700 pl-3"
          >
            {isLoadingLocation ? (
              <span className="flex items-center gap-1">
                <svg className="animate-spin h-3 w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading...
              </span>
            ) : (
              <span className="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Current
              </span>
            )}
          </button>
        )}
      </div>

      {suggestions.length > 0 && (
        <ul className="absolute bg-background border border-border shadow-lg rounded-lg w-full mt-2 z-50 max-h-60 overflow-auto divide-y divide-border">
          {suggestions.map((place) => (
            <li
              key={place.id}
              className="p-3 hover:bg-accent hover:text-accent-foreground cursor-pointer text-sm transition-colors"
              onClick={() => handleSelect(place)}
            >
              {place.place_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationInput;
