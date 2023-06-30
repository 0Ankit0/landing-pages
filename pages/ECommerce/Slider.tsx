import { useState } from "react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
} from "react-icons/bs"; /*for left and right arrow*/
import { RxDotFilled } from "react-icons/rx"; /*for the dot at the bottom of images*/
import Card from "./Card";
//npm install react-icons --save

function Slider() {
  const slides = [
    {
      text: "This is the first slide",
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      text: "This is the second slide",
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      text: "This is the third slide",
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      text: "This is the fourth slide",
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      text: "This is the fifth slide",
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide =
      currentIndex === 0; /*get the index of the first element of the array*/
    const newIndex = isFirstSlide
      ? slides.length - 1
      : currentIndex - 1; /*don't reduce if first else  reduce*/
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide =
      currentIndex ===
      slides.length - 1; /*get the index of the last element of the array*/
    const newIndex = isLastSlide
      ? 0
      : currentIndex + 1; /*reduce if not last and don't if it is last*/
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    /*function used to change slide when clicking on the dot*/
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[550px] w-full relative group">
      {/*use group to group the left and right buttons together to implement sth
      with both on them*/}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full  bg-center bg-cover duration-500 flex place-items-center"
      >
        <p className=" text-gray-100 text-[4rem] ml-24">
          {slides[currentIndex]?.text}
        </p>
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        {/*only show if hovered on the grouped main parent else remain hidden*/}
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        {/*same as the left arrow*/}
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center">
        {slides.map(
          (
            slide,
            slideIndex //Use () if you want to render sth on the screen
          ) => (
            <div
              key={slideIndex} //using key to know which dot was clicked
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Slider;
