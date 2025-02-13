import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const propertyLoc = queryParams.get("propertyLoc");
  const distance = queryParams.get("distance");

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/properties/all",
          {
            params: { propertyLoc, distance },
          }
        );
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, [propertyLoc, distance]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {loading ? (
        <p>Loading properties...</p>
      ) : properties.length === 0 ? (
        <p>No properties found matching your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {properties > 0 &&
            properties.map((property) => (
              <div
                key={property._id}
                className="border rounded-lg p-4 shadow-lg"
              >
                <img
                  src={property.image1}
                  alt="Property"
                  className="w-full h-40 object-cover rounded-md mb-3"
                />
                <h2 className="text-lg font-semibold">
                  {property.propertyLoc}
                </h2>
                <p>
                  {property.category} - ${property.price}/night
                </p>
                <p>Available: {property.availability ? "Yes" : "No"}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
                  View Details
                </button>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
