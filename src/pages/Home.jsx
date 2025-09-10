// src/pages/Home.js
import { useNavigate } from "react-router-dom";
import SearchForm from "../components/SearchForm";

export default function Home() {
  const navigate = useNavigate();

  const handleSearch = (from, to) => {
    navigate("/results", { state: { from, to } });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Flight Booking</h1>
      <SearchForm onSearch={handleSearch} />
    </div>
  );
}
