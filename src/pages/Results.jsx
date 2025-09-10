// src/pages/Results.js
import { useLocation } from "react-router-dom";
import { flights } from "../data/flights";
import FlightList from "../components/FlightList";

export default function Results() {
  const { state } = useLocation();

  const filteredFlights = flights.filter(
    (f) =>
      f.from.toLowerCase() === state.from.toLowerCase() &&
      f.to.toLowerCase() === state.to.toLowerCase()
  );

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Available Flights</h2>
      <FlightList flights={filteredFlights} />
    </div>
  );
}
