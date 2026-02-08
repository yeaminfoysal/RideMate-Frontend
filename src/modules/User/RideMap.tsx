/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState, useRef } from "react";
import Map, { Source, Layer } from "react-map-gl";
import mbxClient from "@mapbox/mapbox-sdk";
import mbxDirections from "@mapbox/mapbox-sdk/services/directions";

const mapboxToken = import.meta.env.VITE_MAPBOX_TOKEN!;
const baseClient = mbxClient({ accessToken: mapboxToken });
const directionsClient = mbxDirections(baseClient);

interface RouteProps {
  pickup: { lat: number; lng: number } | null;
  destination: { lat: number; lng: number } | null;
}

const RideMap: React.FC<RouteProps> = ({ pickup, destination }) => {
  const mapRef = useRef<any>(null);
  const [routeGeoJSON, setRouteGeoJSON] = useState<any>(null);

  // viewState controlled
  const [viewState, setViewState] = useState({
    longitude: pickup?.lng || 90.41,
    latitude: pickup?.lat || 23.81,
    zoom: 12,
  });

  // Fetch route and fit bounds
  useEffect(() => {
    const fetchRoute = async () => {
      if (!pickup || !destination) return;

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
        setRouteGeoJSON(route);

        // Fit map bounds
        const coordinates = [
          [pickup.lng, pickup.lat],
          [destination.lng, destination.lat],
        ];
        const lons = coordinates.map((c) => c[0]);
        const lats = coordinates.map((c) => c[1]);

        const minLon = Math.min(...lons);
        const maxLon = Math.max(...lons);
        const minLat = Math.min(...lats);
        const maxLat = Math.max(...lats);

        if (mapRef.current) {
          const map = mapRef.current.getMap();
          map.fitBounds(
            [
              [minLon, minLat],
              [maxLon, maxLat],
            ],
            { padding: 80, duration: 1000 }
          );

          // Update viewState
          setViewState({
            longitude: (minLon + maxLon) / 2,
            latitude: (minLat + maxLat) / 2,
            zoom: map.getZoom(),
          });
        }
      } catch (err) {
        console.error("Route fetch error:", err);
      }
    };

    fetchRoute();
  }, [pickup, destination]);

  // Layer-based marker GeoJSON
  const markerData = {
    type: "FeatureCollection" as const,
    features: [
      pickup
        ? {
            type: "Feature" as const,
            geometry: { type: "Point" as const, coordinates: [pickup.lng, pickup.lat] },
            properties: { color: "green" },
          }
        : null,
      destination
        ? {
            type: "Feature" as const,
            geometry: { type: "Point" as const, coordinates: [destination.lng, destination.lat] },
            properties: { color: "red" },
          }
        : null,
    ].filter(Boolean),
  } as any;

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border">
      <Map
        ref={mapRef}
        {...viewState}
        onMove={(evt) => setViewState(evt.viewState)}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken={mapboxToken}
      >
        {/* Route Line */}
        {routeGeoJSON && (
          <Source
            id="route"
            type="geojson"
            data={{
              type: "Feature",
              geometry: routeGeoJSON,
              properties: {},
            }}
          >
            <Layer
              id="route-layer"
              type="line"
              paint={{
                "line-color": "#3b82f6",
                "line-width": 5,
              }}
            />
          </Source>
        )}

        {/* Layer-based Markers */}
        <Source id="markers" type="geojson" data={markerData}>
          <Layer
            id="marker-layer"
            type="circle"
            paint={{
              "circle-radius": 10,
              "circle-color": ["get", "color"],
              "circle-stroke-width": 2,
              "circle-stroke-color": "#fff",
            }}
          />
        </Source>
      </Map>
    </div>
  );
};

export default RideMap;
