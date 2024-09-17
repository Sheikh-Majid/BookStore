import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import data  from "../../public/data.json"
import Cards from './Cards';

const FreeBooks = () => {

    const FilterData = data.filter((data) => data.category === "free");
    // console.log("filter data" , FilterData)
     var settings = {
       dots: true,
       infinite: false,
       speed: 500,
       slidesToShow: 3,
       slidesToScroll: 3,
       initialSlide: 0,
       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             infinite: true,
             dots: true,
           },
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2,
           },
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           },
         },
       ],
     };
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div>
        <div className=" text-xl font-semibold">Free Offered Books</div>
        <p className="font-medium text-[18px] pb-2">
          {" "}
          Discover our collection of free books, handpicked for avid readers
          like you. Enjoy a variety of genres, from timeless classics to
          contemporary gems, all available at no cost. Whether you're looking to
          explore new worlds or gain fresh insights, these books are yours to
          enjoy, anytime, anywhere.
        </p>
      </div>
      <div className="slider-container my-5">
        <Slider {...settings}>
                  {
                      FilterData.map((data) => (
             <Cards data={data}/>
         ))
         }
        </Slider>
      </div>
    </div>
  );
}

export default FreeBooks
