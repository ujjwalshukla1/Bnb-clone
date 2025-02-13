import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function ResponsiveForm() {
  const { user, isAuthenticated } = useAuth0();
  const [formData, setFormData] = useState({
    propertyLoc: "",
    distance: "",
    availability: "",
    category: "",
    price: "",
    userId: isAuthenticated ? user.name : "",
    image1: "",
    image2: "",
    image3: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      setFormData((prev) => ({ ...prev, userId: user.name }));
    }
  }, [isAuthenticated, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAuthenticated && !formData.userId) {
      setFormData((prev) => ({ ...prev, userId: user.name }));
    }
    try {
      const response = await axios.post(
        "https://bnb-clone-1.onrender.com/properties/create",
        formData
      );
      if (response.status === 200) {
        toast.success("Property Listed Successfully");
        navigate("/");
      }
      console.log("Property Created:", response.data);
    } catch (error) {
      console.error("Error creating property:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <div
          className="hidden md:block w-1/2 h-[100vh] bg-cover bg-center rounded-lg shadow-2xl opacity-90"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/736x/51/f5/7c/51f57c1f8405780a6340ef91bc085738.jpg')",
          }}
        ></div>

        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100 p-6 ">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 mt-5 rounded-lg shadow-lg w-full max-w-sm max-h-[90vh] overflow-auto"
          >
            <h2 className="text-lg font-semibold text-center mb-3 text-gray-800">
              List Your Property
            </h2>
            {isAuthenticated ? (
              <div>
                <div className="mb-2">
                  <label className="block text-xs text-gray-700">
                    Location
                  </label>
                  <input
                    type="text"
                    name="propertyLoc"
                    value={formData.propertyLoc}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                    required
                    disabled={!isAuthenticated}
                  />
                </div>

                <div className="mb-2">
                  <label className="block text-xs text-gray-700">
                    Distance
                  </label>
                  <input
                    type="text"
                    name="distance"
                    value={formData.distance}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                    required
                    disabled={!isAuthenticated}
                  />
                </div>

                <div className="mb-2">
                  <label className="block text-xs text-gray-700">
                    Availability
                  </label>
                  <input
                    type="text"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                    required
                    disabled={!isAuthenticated}
                  />
                </div>

                <div className="mb-2">
                  <label className="block text-xs text-gray-700">
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                    required
                    disabled={!isAuthenticated}
                  >
                    <option value="">Choose a category</option>
                    <option value="Farm">Farm</option>
                    <option value="Icon">Icon</option>
                    <option value="Castles">Castles</option>
                    <option value="Mansions">Mansions</option>
                    <option value="Bed & Breakfast">Bed & Breakfast</option>
                    <option value="Nature">Nature</option>
                    <option value="Pools">Pools</option>
                    <option value="Beaches">Beaches</option>
                    <option value="Mountains">Mountains</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Cycling">Cycling</option>
                    <option value="Apartments">Apartments</option>
                    <option value="Parties">Parties</option>
                  </select>
                </div>

                <div className="mb-2">
                  <label className="block text-xs text-gray-700">Price</label>
                  <input
                    type="text"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                    required
                    disabled={!isAuthenticated}
                  />
                </div>

                {isAuthenticated && (
                  <div className="mb-2">
                    <label className="block text-xs text-gray-700">
                      User ID
                    </label>
                    <input
                      type="text"
                      name="userId"
                      value={formData.userId}
                      className="w-full px-2 py-1 border rounded-lg text-xs bg-gray-200 cursor-not-allowed"
                      readOnly
                    />
                  </div>
                )}

                <div className="mb-2">
                  <label className="block text-xs text-gray-700">Image 1</label>
                  <input
                    type="text"
                    name="image1"
                    value={formData.image1}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                    required
                    disabled={!isAuthenticated}
                  />
                </div>

                <div className="mb-2">
                  <label className="block text-xs text-gray-700">Image 2</label>
                  <input
                    type="text"
                    name="image2"
                    value={formData.image2}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                    required
                    disabled={!isAuthenticated}
                  />
                </div>

                <div className="mb-2">
                  <label className="block text-xs text-gray-700">Image 3</label>
                  <input
                    type="text"
                    name="image3"
                    value={formData.image3}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                    required
                    disabled={!isAuthenticated}
                  />
                </div>
              </div>
            ) : (
              <p className="text-center p-6">Please log in to list you property</p>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-3 py-2 text-xs rounded-lg hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
