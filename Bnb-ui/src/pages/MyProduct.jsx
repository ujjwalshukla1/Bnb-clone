import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

function MyProduct() {
  const { user, isAuthenticated } = useAuth0();
  const [property, setProperty] = useState([]);
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/update/${id}`, { state: { property } });
  };

  const GetProperty = async () => {
    try {
      const response = await axios.get("http://localhost:8000/properties/all");
      setProperty(response.data.properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    GetProperty();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">My Listed Properties</h2>

        {isAuthenticated ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {property
              .filter((prop) => prop.userId === user.name)
              .map((prop) => (
                <div key={prop._id} className="p-4 border rounded-lg shadow-md">
                  <img
                    src={prop.image1}
                    alt={prop.propertyLoc}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <h3 className="text-lg font-semibold mt-2">
                    {prop.propertyLoc}
                  </h3>
                  <p className="text-gray-600">Price: ${prop.price}</p>
                  <p className="text-gray-500 text-sm">
                    Category: {prop.category}
                  </p>
                  <button
                    className="btn btn-outline hover:bg-red-500 hover:border-none hover:text-white mt-3 px-6"
                    onClick={() => handleClick(prop._id)}
                  >
                    Edit
                  </button>
                  <button className="btn btn-outline ml-3 hover:bg-red-500 hover:border-none hover:text-white mt-3 px-6">
                    Delete
                  </button>
                </div>
              ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            Please log in to see your properties.
          </p>
        )}
      </div>
    </>
  );
}

export default MyProduct;
