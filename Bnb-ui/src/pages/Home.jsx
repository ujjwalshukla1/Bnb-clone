import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Property from "../components/Property";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import axios from "axios";

function Home() {
  const [properties, setProperties] = useState([]); 
  const [selectedCategory, setSelectedCategory] = useState("");

  const GetProperty = async () => {
    try {
      const response = await axios.get("https://bnb-clone-1.onrender.com/properties/all");
      setProperties(response.data.properties);
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  useEffect(() => {
    GetProperty();
  }, []);

  const filteredProperties = selectedCategory
    ? properties.filter((prop) => prop.category === selectedCategory)
    : properties;

  return (
    <>
      <Navbar />
      <Property setSelectedCategory={setSelectedCategory} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((prop) => <Cards key={prop._id} prop={prop} />)
        ) : (
          <p className="cols-span-full text-center text-gray-500">
            No properties listed in this category
          </p>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Home;
