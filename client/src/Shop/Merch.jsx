import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import hamper from "../assets/hamper.jpg";
import coffeeham from "../assets/coffeeham1.jpg";
import frother from '../assets/frother.jpg';
import "./Merch.css";

const Merch = () => {
  const swiperConfig = {
    slidesPerView: 1,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  };

  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <section>
          <Swiper {...swiperConfig} modules={[Navigation]} navigation>
            <SwiperSlide>
              <div className="item">
                <img src={coffeeham} alt="img1" />
                <div className="overlay">
                  <h1>LIMITED OFFERS ON COFFEE MACHINES</h1>
                  <h1>Get yours today!</h1>
                  <button>SHOP NOW</button>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src={hamper} alt="goods" />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="item">
                <img src={frother} alt="frother"/>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </div>
    </>
  );
};

export default Merch;
