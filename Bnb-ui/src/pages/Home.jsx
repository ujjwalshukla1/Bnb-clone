import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Property from "../components/Property";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import axios from "axios";

function Home() {
  const [property, setProperty] = useState([]);

  const GetProperty = async () => {
    try {
      const response = await axios.get("http://localhost:8000/properties/all");
      setProperty(response.data.properties);
      console.log(response.data.properties);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetProperty();
  }, []);

  return (
    <>
      <Navbar />
      <Property />
      <h1>{property.price}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {property.length > 0 ? (
          property.map((prop) => <Cards key={prop._id} prop={prop} />)
        ) : (
          <p>No properties listed</p>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
