import "./Ingredients.css";
import Axios from "axios";
import { useEffect, useState } from "react";

const Ingredients = () => {
  const [getIng, setIng] = useState([]);
 
  useEffect(() => {
    Axios.get("http://localhost:3001/get_ingredients")
      .then((response) => {
        // console.log(response.data);
        setIng(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="box-container">
        {getIng.map((data) => (
          <div className="box" key={data.id}>
            <img
              src={require(`../assets/Ingrediants/${data.image}`)}
              alt={data.name}
            />
            <h2>{data.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ingredients;
