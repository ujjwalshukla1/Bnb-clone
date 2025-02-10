import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function Rooms() {
  const location = useLocation();
  const property = location.state?.property;

  if (!property) {
    return <p className="text-center text-gray-600">No property data found.</p>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {property.propertyLoc}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <img
                src={property.image1}
                alt="Property 1"
                className="w-full h-72 object-cover rounded-lg shadow-md"
              />
            </div>
            <img
              src={property.image2}
              alt="Property 2"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <img
              src={property.image3}
              alt="Property 3"
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="mt-6">
            <p className="text-lg text-gray-600">
              <strong>Distance:</strong> {property.distance}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Availability:</strong> {property.availability}
            </p>
            <p className="text-lg text-gray-600">
              <strong>Category:</strong> {property.category}
            </p>
            <p className="text-lg font-semibold text-black">
              <strong>Price:</strong> ${property.price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rooms;
