import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import mbxClient from "@mapbox/mapbox-sdk";
import mbxDirections from "@mapbox/mapbox-sdk/services/directions";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in Leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN!;
const baseClient = mbxClient({ accessToken: mapboxToken });
const directionsClient = mbxDirections(baseClient);

interface RouteProps {
  pickup: { lat: number; lng: number; name?: string } | null;
  destination: { lat: number; lng: number; name?: string } | null;
}

// Custom marker icons
const createCustomIcon = (color: string) =>
  L.divIcon({
    className: "custom-marker",
    html: `<div style="
      background-color: ${color};
      width: 24px;
      height: 24px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
    "></div>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
  });

const pickupIcon = createCustomIcon("#10b981"); // green
const destinationIcon = createCustomIcon("#ef4444"); // red

// Component to fit bounds when route changes
function FitBounds({ pickup, destination }: RouteProps) {
  const map = useMap();

  useEffect(() => {
    if (pickup && destination) {
      const bounds = L.latLngBounds(
        [pickup.lat, pickup.lng],
        [destination.lat, destination.lng]
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [pickup, destination, map]);

  return null;
}

const RideMap: React.FC<RouteProps> = ({ pickup, destination }) => {
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>([]);
  const [mapError, setMapError] = useState<string | null>(null);

  // Fetch route from Mapbox Directions API
  useEffect(() => {
    const fetchRoute = async () => {
      if (!pickup || !destination) {
        setRouteCoordinates([]);
        return;
      }

      try {
        const response = await directionsClient
          .getDirections({
            profile: "driving",
            waypoints: [
              { coordinates: [pickup.lng, pickup.lat] },
              { coordinates: [destination.lng, destination.lat] },
            ],
            geometries: "geojson",
          })
          .send();

        const route = response.body.routes[0].geometry;
        // Convert GeoJSON coordinates to Leaflet format [lat, lng]
        // Type assertion: Mapbox Directions returns LineString geometry with [lng, lat] coordinates
        const coords: [number, number][] = (route.coordinates as [number, number][]).map(
          (coord) => [coord[1], coord[0]]
        );
        setRouteCoordinates(coords);
      } catch (err) {
        console.error("Route fetch error:", err);
        setMapError("Failed to fetch route");
      }
    };

    fetchRoute();
  }, [pickup, destination]);

  if (mapError) {
    return (
      <div className="w-full h-[500px] rounded-lg overflow-hidden border flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <p className="text-red-500">{mapError}</p>
      </div>
    );
  }

  // Default center (Dhaka, Bangladesh)
  const center: [number, number] = pickup
    ? [pickup.lat, pickup.lng]
    : [23.8103, 90.4125];

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border relative z-0">
      <MapContainer
        center={center}
        zoom={12}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Pickup Marker */}
        {pickup && (
          <Marker position={[pickup.lat, pickup.lng]} icon={pickupIcon}>
            <Popup>
              <strong>Pickup Location</strong>
              {pickup.name && <p className="text-xs mt-1">{pickup.name}</p>}
            </Popup>
          </Marker>
        )}

        {/* Destination Marker */}
        {destination && (
          <Marker position={[destination.lat, destination.lng]} icon={destinationIcon}>
            <Popup>
              <strong>Destination</strong>
              {destination.name && <p className="text-xs mt-1">{destination.name}</p>}
            </Popup>
          </Marker>
        )}

        {/* Route Polyline */}
        {routeCoordinates.length > 0 && (
          <Polyline
            positions={routeCoordinates}
            color="#3b82f6"
            weight={5}
            opacity={0.8}
          />
        )}

        {/* Fit bounds when pickup/destination change */}
        <FitBounds pickup={pickup} destination={destination} />
      </MapContainer>
    </div>
  );
};

export default RideMap;