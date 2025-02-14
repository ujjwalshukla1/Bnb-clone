/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

function Cards({ prop }) {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/rooms", { state: { property: prop } });
  };

  return (
    <div className="p-2 sm:p-4 w-full max-w-sm mx-auto ">
      <div
        className="cursor-pointer border rounded-lg shadow-md overflow-hidden"
        onClick={handleNavigate}
      >
        <div className="relative w-full overflow-hidden rounded-t-lg">
          <div className="carousel w-full">
            {[prop.image1, prop.image2, prop.image3].map((image, index) => (
              <div key={index} className="carousel-item w-full">
                <img
                  className="w-full h-40 sm:h-48 object-cover"
                  src={image}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="p-3 sm:p-4 bg-white">
          <h2 className="text-sm sm:text-base text-gray-700 font-semibold">
            {prop.propertyLoc}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500">{prop.distance}</p>
          <p className="text-xs sm:text-sm text-gray-500">
            {prop.availability}
          </p>
          <p className="text-sm sm:text-base font-medium text-black">
            {prop.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
