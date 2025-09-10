// src/components/SearchForm.js
import { useState } from "react";

export default function SearchForm({ onSearch }) {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (from && to) {
      onSearch(from, to);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-80">
      <input
        type="text"
        placeholder="From"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="border p-2"
      />
      <input
        type="text"
        placeholder="To"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="border p-2"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded"
      >
        Search Flights
      </button>
    </form>
  );
}
