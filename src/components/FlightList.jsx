// src/components/FlightList.js
import { useNavigate } from "react-router-dom";

export default function FlightList({ flights }) {
  const navigate = useNavigate();

  if (!flights || flights.length === 0) {
    return <p>No flights found.</p>;
  }

  return (
    <div className="flex flex-col gap-3">
      {flights.map((flight) => (
        <div
          key={flight.id}
          className="border p-4 flex justify-between items-center rounded"
        >
          <div>
            <p>
              {flight.from} → {flight.to}
            </p>
            <p>Time: {flight.time}</p>
          </div>
          <span className="font-bold">₹{flight.price}</span>
          <button
            onClick={() => navigate("/booking", { state: { flight } })}
            className="bg-green-600 text-white px-4 py-1 rounded"
          >
            Book
          </button>
        </div>
      ))}
    </div>
  );
}
