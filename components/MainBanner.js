import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel3"));
import Image from "next/image";

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  items: 1,
  navText: [
    "<i class='flaticon-back'></i>",
    "<i class='flaticon-chevron'></i>",
  ],
};

const MainBanner = () => {
  const [display, setDisplay] = React.useState(false);

  React.useEffect(() => {
    setDisplay(true);
  }, []);

  return (
    <React.Fragment>
      {display ? (
        <OwlCarousel
          className="home-slides-two owl-carousel owl-theme"
          {...options}
        >
          <div className="banner-section">
            <div className="home-content">
              <div className="home-banner">
                <Image
                  alt="Late Night Babes Sydney Escorts"
                  src="/images/hero-image-1.webp"
                  layout="fill"
                  objectFit="cover"
                  quality={70}
                />
              </div>

            </div>
          </div>

          <div className="banner-section">
            <div className="home-content">
              <div className="home-banner">
                <Image
                  alt="Late Night Babes Sydney Escorts"
                  src="/images/hero.jpg"
                  layout="fill"
                  objectFit="cover"
                  quality={70}
                />
              </div>
            </div>
          </div>
        </OwlCarousel>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default MainBanner;
