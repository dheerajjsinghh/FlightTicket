// src/pages/Booking.js
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Booking() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const flight = state?.flight;

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = () => {
    // Pass booking details to Confirmation page
    navigate("/confirmation", { state: { flight, passenger: { name, age, email } } });
  };

  if (!flight) {
    return <p className="p-6">No flight selected.</p>;
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Passenger Details</h2>

      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border p-2"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2"
        />

        <button
          onClick={handleConfirm}
          className="bg-blue-600 text-white p-2 rounded mt-2"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}
