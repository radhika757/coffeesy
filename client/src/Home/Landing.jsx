import "./Landing.css";
import coffcan from "../assets/coffee-can.png";
import { TypeAnimation } from "react-type-animation";
import fastforward from '../assets/fast-forward.png';

const Landing = () => {
  return (
    <>
      <div className="landing">
        <div className="background-image"></div>
        <div className="left-container">
          <img src={coffcan} alt="coffee can" />
        </div>
        <div className="right-container">
          <TypeAnimation
            sequence={[
              'YOUR BEVERAGE ELEVATED',
              1000,
              'BUT FIRST, COFFEESY!',
              2000,
              'COFFEE: A HUG IN A MUG',
              3000,
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
           
          /> 
          <button>
            <b>EXPLORE <img src={fastforward}  /></b>
          </button>
        </div>
      </div>
    </>
  );
};

export default Landing;
