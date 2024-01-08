import React from "react";
import SlickSlider from "react-slick";

function MySlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 5000,
  };

  return (
    <div className="e-commerce__container__slider">
      <SlickSlider
        className="e-commerce__container__slider--item"
        {...settings}
      >
        <div className="e-commerce__container__slider--item__carousel">
          <div className="e-commerce__container__slider--item__carousel--text">
            <h1>Nike Air Force 1 '07</h1>
            <span>
              Original basketball style dazzles. Get comfortable on the field
              This model makes you look stylish outside; 1980s inspired features
              you know well, such as structure, bold details and eye-catching
              design. Refreshes features.
            </span>
            <div className="e-commerce__container__slider--item__carousel--text__button">
              <button>Review</button>
            </div>
          </div>
          <div className="e-commerce__container__slider--item__carousel--image">
            <img
              src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_598,c_limit/60d2e87c-9eaa-46a0-b9aa-0f730291262b/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png"
              alt="22"
            />
          </div>
        </div>
        <div className="e-commerce__container__slider--item__carousel">
          <div className="e-commerce__container__slider--item__carousel--text">
            <h1>Nike Air Force 1 '07 EasyOn</h1>
            <span>
              Easily put on the original basketball shoe that gives you speed
              You can take action. Style your hands thanks to the EasyOn system
              You can put it on and take it off without using it. Stylish
              leather in its simplest color Offers superior wearability. All the
              features you love and more We offer.
            </span>
            <div className="e-commerce__container__slider--item__carousel--text__button">
              <button>Review</button>
            </div>
          </div>
          <div className="e-commerce__container__slider--item__carousel--image">
            <img
              src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/h_598,c_limit/f8dfa191-60b3-44c1-b730-b25e0a908c35/air-force-1-07-easyon-ayakkab%C4%B1-rLFV2F.png"
              alt="22"
            />
          </div>
        </div>
      </SlickSlider>
    </div>
  );
}

export default MySlider;
