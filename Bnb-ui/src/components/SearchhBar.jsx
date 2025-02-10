import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [people, setPeople] = useState(1);

  const handleSearch = () => {
    console.log({ destination, checkIn, checkOut, people });
    // Add your search logic here
  };

  return (
    <div className="max-w-3xl bg-white shadow-xl p-4 rounded-full gap-3 border-2 border-slate-200 px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="flex flex-col">
          <label className="text-xs pl-4 font-medium text-gray-700 mb-1">
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

        <div className="flex flex-col">
          <label className="text-xs pl-4 font-medium text-gray-700 mb-1">
            Check-In
          </label>
          <input
            type="date"
            placeholder="Add date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="input input-bordered rounded-full w-full"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs pl-4 font-medium text-gray-700 mb-1">
            Check-Out
          </label>
          <input
            type="date"
            placeholder="Add date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="input input-bordered rounded-full w-full"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-xs pl-4 font-medium text-gray-700 mb-1">
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
      </div>

      <div className="flex mt-4">
        <button
          className="btn btn-error text-white  rounded-full md:w-auto"
          onClick={handleSearch}
        >
          <FaSearch />
        </button>
      </div>
    </div>
  );
}
