import {} from "react";
import { useLocation, } from "react-router-dom";

function Update() {
 
  const location = useLocation();
  const property = location.state?.property;

  console.log("Property", property);
  return <div>Update</div>;
}

export default Update;
