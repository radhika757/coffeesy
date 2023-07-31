import styles from "./SubscriptionPlans.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper css
import "swiper/css";
// import 'swiper/css/bundle';
import "swiper/css/grid";
// import "swiper/css/pagination";
import { Grid, Pagination,Navigation } from "swiper";
 
const SubscriptionPlans = () => {
  return (
    <>
      {/* <div className={styles.body}> */}
        <Swiper
          slidesPerView={2}
          grid={{
            rows: 3, 
            fill: "row",
          }}
          navigation={true}
          spaceBetween={10}
          pagination={{
            type: "fraction",
          }}
          modules={[Grid, Pagination,Navigation]}
          className={`mySwiper ${styles.swiper}`}
          // className={styles.swiper}
        >
          <SwiperSlide className={styles["swiper-slide"]}>
            <h3> Coffee Dark</h3>
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <h3>Coffee caramel</h3>
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <h3>Coffee Oats</h3>
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <h3>Coffee Hazelnut</h3>
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <h3>Coffee Cinnamon</h3>
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <h3>Coffee Pepper</h3>
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <h3>Coffee powder</h3>
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <h3>Coffee beans</h3>
          </SwiperSlide>
          <SwiperSlide className={styles["swiper-slide"]}>
            <h3>Coffee select</h3>
          </SwiperSlide>
        </Swiper>
      
      {/* </div> */}
    </>
  );
};

export default SubscriptionPlans;
