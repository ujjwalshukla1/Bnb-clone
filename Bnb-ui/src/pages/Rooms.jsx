import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

function Rooms() {
  const location = useLocation();
  const property = location.state?.property;
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  const [booking, setBooking] = useState({
    Name: isAuthenticated ? user.name : "",
    PropertyName: property ? property.propertyLoc : "",
    Email: isAuthenticated ? user.email : "",
    CheckIn: "",
    CheckOut: "",
    NoGuest: "",
    Price: property ? property.price : "",
  });

  if (!property) {
    return <p className="text-center text-gray-600">No property data found.</p>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/user/book", booking);
      console.log(res.data);
      if (res.status === 200) {
        toast.success("Booking done, Enjoy!");
        navigate("/");
      }
    } catch (error) {
      console.error("Booking error:", error);
    }
  };

  const handleChange = (e) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-row justify-between">
        <div className="container ">
          <div className="max-w-4xl flex flex-row gap-3 bg-white shadow-lg rounded-lg p-4">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {property.propertyLoc}
              </h2>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 mt-5 rounded-lg mr-20 shadow-lg w-full max-w-sm max-h-[70vh] overflow-auto"
        >
          <h2 className="text-lg font-semibold text-center mb-3 text-gray-800">
            Book your property
          </h2>
          {isAuthenticated ? (
            <div>
              <div className="mb-2">
                <label className="block text-xs text-gray-700">Name</label>
                <input
                  type="text"
                  name="Name"
                  value={booking.Name}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                  required
                  disabled={!isAuthenticated}
                />
              </div>
              <div className="mb-2">
                <label className="block text-xs text-gray-700">Property</label>
                <input
                  type="text"
                  name="PropertyName"
                  value={booking.PropertyName}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                  required
                  disabled={!isAuthenticated}
                />
              </div>

              <div className="mb-2">
                <label className="block text-xs text-gray-700">Email</label>
                <input
                  type="text"
                  name="Email"
                  value={booking.Email}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                  required
                  disabled={!isAuthenticated}
                />
              </div>

              <div className="mb-2">
                <label className="block text-xs text-gray-700">
                  Date of your check-in
                </label>
                <input
                  type="date"
                  name="CheckIn"
                  value={booking.CheckIn}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                  required
                  disabled={!isAuthenticated}
                />
              </div>

              <div className="mb-2">
                <label className="block text-xs text-gray-700">
                  Date of your check-out
                </label>
                <input
                  type="date"
                  name="CheckOut"
                  value={booking.CheckOut}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                  required
                  disabled={!isAuthenticated}
                />
              </div>

              <div className="mb-2">
                <label className="block text-xs text-gray-700">
                  No. of guest
                </label>
                <select
                  name="NoGuest"
                  value={booking.NoGuest}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                  required
                  disabled={!isAuthenticated}
                >
                  <option value="">Choose Number of guest</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>

              <div className="mb-2">
                <label className="block text-xs text-gray-700">Price</label>
                <input
                  type="text"
                  name="Price"
                  value={booking.Price}
                  onChange={handleChange}
                  className="w-full px-2 py-1 border rounded-lg text-xs focus:ring focus:ring-blue-300"
                  required
                  disabled={!isAuthenticated}
                />
              </div>
            </div>
          ) : (
            <p className="text-center p-6">
              Please log in to book your property
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-3 py-2 text-xs rounded-lg hover:bg-blue-600 transition"
          >
            Book your stay
          </button>
        </form>
      </div>
    </>
  );
}

export default Rooms;
