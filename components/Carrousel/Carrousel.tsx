/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
export interface Props {
  img: string;
  imgDos: string;
}

const Carrousel = ({ img, imgDos }: Props) => {
  //Array of Images
  const images = [img, imgDos];

  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    indicators: true,
    scale: 1.2,
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: (
      <div style={{ width: "30px", marginRight: "-50px", cursor: "pointer" }}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.52452 17.5C7.52452 16.8728 7.76403 16.2456 8.24203 15.7673L23.2914 0.718117C24.2487 -0.239209 25.8009 -0.239209 26.7578 0.718117C27.7147 1.67506 27.7147 3.22689 26.7578 4.18429L13.4413 17.5L26.7573 30.8158C27.7143 31.7732 27.7143 33.3248 26.7573 34.2817C25.8004 35.2395 24.2482 35.2395 23.2909 34.2817L8.24157 19.2327C7.76348 18.7543 7.52452 18.1271 7.52452 17.5Z"
            fill="black"
          />
        </svg>
      </div>
    ),
    nextArrow: (
      <div style={{ width: "30px", marginLeft: "-50px", cursor: "pointer" }}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 35 35"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.4755 17.5C27.4755 18.1272 27.236 18.7544 26.758 19.2327L11.7086 34.2819C10.7513 35.2392 9.19913 35.2392 8.24219 34.2819C7.28526 33.3249 7.28526 31.7731 8.24219 30.8157L21.5587 17.5L8.24266 4.18417C7.28572 3.22684 7.28572 1.67517 8.24266 0.718309C9.1996 -0.239482 10.7517 -0.239482 11.7091 0.718309L26.7584 15.7673C27.2365 16.2457 27.4755 16.8729 27.4755 17.5Z"
            fill="black"
          />
        </svg>
      </div>
    ),
  };
  return (
    <div className="">
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className="flex justify-center m-3 h-full lg:w-8/12 "
          >
            <img className=" object-cover shadow-xl" src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Carrousel;
