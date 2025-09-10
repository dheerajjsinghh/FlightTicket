// src/pages/Confirmation.js
import { useLocation, useNavigate } from "react-router-dom";

export default function Confirmation() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state?.flight || !state?.passenger) {
    return <p className="p-6">No booking information found.</p>;
  }

  const { flight, passenger } = state;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Booking Confirmed 🎉</h2>

      <div className="border p-4 rounded mb-4">
        <h3 className="font-semibold">Flight Details</h3>
        <p>
          {flight.from} → {flight.to}
        </p>
        <p>Time: {flight.time}</p>
        <p>Price: ₹{flight.price}</p>
      </div>

      <div className="border p-4 rounded mb-4">
        <h3 className="font-semibold">Passenger Details</h3>
        <p>Name: {passenger.name}</p>
        <p>Age: {passenger.age}</p>
        <p>Email: {passenger.email}</p>
      </div>

      <button
        onClick={() => navigate("/")}
        className="bg-green-600 text-white p-2 rounded"
      >
        Book Another Flight
      </button>
    </div>
  );
}
