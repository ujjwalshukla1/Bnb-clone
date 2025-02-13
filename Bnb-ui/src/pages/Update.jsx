import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

function Update() {
  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const property = location.state?.property;

  const [update, setUpdate] = useState(property || {});

  if (property && property._id === id) {
    console.log("Property from state:", property);
  } else {
    console.log("Property not found in state or ID mismatch.");
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://bnb-clone-1.onrender.com/properties/update/${id}`,
        update
      );
      console.log(response.data);
      if (response.status === 200) {
        toast.success("Property Updated Successfully");
        navigate("/my");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row">
        <img
          className="h-screen shadow-xl w-2/4 rounded-md"
          src="https://i.pinimg.com/736x/51/f5/7c/51f57c1f8405780a6340ef91bc085738.jpg"
        />
        <div className="w-screen flex items-center justify-center bg-gray-100 p-6 ">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 mt-5 ml-10 rounded-lg shadow-lg w-full max-w-sm max-h-[90vh] overflow-auto"
          >
            <h2 className="text-lg font-semibold text-center mb-3 text-gray-800">
              Update Your Property
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
                    value={update.propertyLoc || ""}
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
                    value={update.distance}
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
                    value={update.availability}
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
                    value={update.category}
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
                    value={update.price}
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
                      value={update.userId}
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
                    value={update.image1}
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
                    value={update.image2}
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
                    value={update.image3}
                    onChange={handleChange}
                    className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                    required
                    disabled={!isAuthenticated}
                  />
                </div>
              </div>
            ) : (
              <p className="text-center p-6">
                Please log in to list you property
              </p>
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

export default Update;
