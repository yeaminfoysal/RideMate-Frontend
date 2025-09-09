/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import mbxClient from "@mapbox/mapbox-sdk";
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";

const baseClient = mbxClient({ accessToken: import.meta.env.VITE_MAPBOX_TOKEN });
const geocodingClient = mbxGeocoding(baseClient);

interface LocationInputProps {
  label: string;
  onSelect: (place: { name: string; lat: number; lng: number }) => void;
}

const LocationInput: React.FC<LocationInputProps> = ({ label, onSelect }) => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      try {
        const response = await geocodingClient
          .forwardGeocode({
            query: value,
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
    <div className="relative w-full">
      <label className="block font-semibold mb-1">{label}</label>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        placeholder={`Enter ${label}`}
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-background border rounded w-full mt-1 z-50 max-h-48 overflow-auto">
          {suggestions.map((place) => (
            <li
              key={place.id}
              className="p-2 hover:bg-background/90 cursor-pointer"
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
