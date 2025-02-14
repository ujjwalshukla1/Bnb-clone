import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [people, setPeople] = useState(1);
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!destination || !checkIn || !checkOut) {
      alert("Please fill in all fields before searching!");
      return;
    }

    navigate(
      `/search?destination=${destination}&checkIn=${checkIn}&checkOut=${checkOut}&people=${people}`
    );
  };

  return (
    <div className="w-full max-w-4xl bg-white shadow-xl p-4 rounded-lg border-2 border-slate-200 md:rounded-full md:px-6">
      {/* Flexbox for Desktop, Stack on Mobile */}
      <div className="flex items-center flex-col md:flex-row md:items-center gap-3">
        {/* Destination */}
        <div className="flex-1">
          <label className="text-xs font-medium text-gray-700 mb-1 block">
            Destination
          </label>
          <input
            type="text"
            placeholder="Search destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="input input-bordered rounded-full w-full"
          />
        </div>

        {/* Check-In */}
        <div className="flex-1">
          <label className="text-xs font-medium text-gray-700 mb-1 block">
            Check-In
          </label>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="input input-bordered rounded-full w-full"
          />
        </div>

        {/* Check-Out */}
        <div className="flex-1">
          <label className="text-xs font-medium text-gray-700 mb-1 block">
            Check-Out
          </label>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="input input-bordered rounded-full w-full"
          />
        </div>

        {/* No. of People */}
        <div className="flex-1">
          <label className="text-xs font-medium text-gray-700 mb-1 block">
            No. of People
          </label>
          <select
            value={people}
            onChange={(e) => setPeople(e.target.value)}
            className="select select-bordered rounded-full w-full"
          >
            {[...Array(10).keys()].map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1} {num === 0 ? "Person" : "People"}
              </option>
            ))}
          </select>
        </div>

        {/* Search Button */}
        <div className="md:mt-3 flex items-center mt-2 md:justify-center">
          <button
            className="btn btn-error text-white rounded-full h-full "
            onClick={handleSearch}
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
}
