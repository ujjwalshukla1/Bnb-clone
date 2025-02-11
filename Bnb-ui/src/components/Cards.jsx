/* eslint-disable react/prop-types */
import {} from "react";
import { useNavigate } from "react-router-dom";

function Cards({ prop }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/rooms", { state: { property: prop } });
  };
  console.log("prop", prop);
  return (
    <div className="p-4">
      <div
        className="p-4 cursor-pointer border rounded-lg shadow-md"
        onClick={() => handleNavigate()}
      >
        <div className="carousel h-auto w-fit rounded-xl">
          <div
            id="slide1"
            className="carousel-item w-full object-cover rounded-md"
          >
            <img
              className="w-full h-40 object-cover rounded-md"
              src={prop.image1}
              alt="Slide 1"
            />
          </div>

          <div
            id="slide2"
            className="carousel-item w-full object-cover rounded-md"
          >
            <img
              className="w-full h-40 object-cover rounded-md"
              src={prop.image2}
              alt="Slide 2"
            />
          </div>

          <div
            id="slide3"
            className="carousel-item w-full object-cover rounded-md"
          >
            <img
              className="w-full h-40 object-cover rounded-md"
              src={prop.image3}
              alt="Slide 3"
            />
          </div>
        </div>

        <div className="card-body gap-0 p-2">
          <h2 className="card-title text-base text-gray-700">
            {prop.propertyLoc}
          </h2>
          <p className="text-base font-normal text-gray-500">{prop.distance}</p>
          <p className="text-base font-normal text-gray-500">
            {prop.availability}
          </p>
          <p className="font-medium text-base text-black">{prop.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
