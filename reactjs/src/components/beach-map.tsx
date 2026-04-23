import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface Beach {
    name: string;
    lat: number;
    lng: number;
    status: "Clean" | "Moderate" | "Polluted";
    level: number;
}

export default function BeachMap() {
    const mapContainer = useRef<HTMLDivElement>(null);

    const beaches: Beach[] = [
        { name: "Juhu Beach", lat: 19.103, lng: 72.8251, status: "Moderate", level: 65 },
        { name: "Versova Beach", lat: 19.1654, lng: 72.8036, status: "Polluted", level: 85 },
        { name: "Girgaon Chowpatty", lat: 18.9517, lng: 72.8241, status: "Clean", level: 35 },
        { name: "Marine Drive", lat: 18.9432, lng: 72.8236, status: "Moderate", level: 60 },
        { name: "Colaba Causeway", lat: 18.9576, lng: 72.8194, status: "Clean", level: 40 },
    ];

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Clean":
                return "bg-green-100 text-green-700";
            case "Moderate":
                return "bg-yellow-100 text-yellow-700";
            case "Polluted":
                return "bg-red-100 text-red-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const getMarkerColor = (status: string) => {
        switch (status) {
            case "Clean":
                return "#22c55e";
            case "Moderate":
                return "#eab308";
            case "Polluted":
                return "#ef4444";
            default:
                return "#6b7280";
        }
    };

    useEffect(() => {
        if (!mapContainer.current) return;

        const map = L.map(mapContainer.current).setView([19.06, 72.83], 11);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; OpenStreetMap contributors',
        }).addTo(map);

        beaches.forEach((beach) => {
            const circleMarker = L.circleMarker([beach.lat, beach.lng], {
                radius: 10,
                fillColor: getMarkerColor(beach.status),
                color: getMarkerColor(beach.status),
                weight: 2,
                opacity: 1,
                fillOpacity: 0.8,
            }).addTo(map);

            const popupContent = `
                <div class="p-3 min-w-56">
                    <h3 class="font-semibold text-gray-800 mb-2">${beach.name}</h3>
                    <div class="space-y-2">
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600">Status:</span>
                            <span class="px-2 py-1 rounded text-xs font-semibold ${getStatusColor(beach.status)}">${beach.status}</span>
                        </div>
                        <div class="flex items-center justify-between">
                            <span class="text-sm text-gray-600">Pollution Level:</span>
                            <span class="text-sm font-semibold">${beach.level}%</span>
                        </div>
                    </div>
                </div>
            `;

            circleMarker.bindPopup(popupContent);
        });

        return () => {
            map.remove();
        };
    }, []);

    return <div ref={mapContainer} className="w-full h-96 rounded-lg overflow-hidden border border-gray-300 shadow-lg" />;
}
