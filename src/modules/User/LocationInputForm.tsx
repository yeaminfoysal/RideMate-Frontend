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
            limit: 5,
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
