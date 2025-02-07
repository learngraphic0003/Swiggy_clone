import React, { useEffect, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Category = () => {
  const [Category, setCategory] = useState([]);
  const [Slide, Setslide] = useState(0);

  // Fetch categories data from the API
  const fetchCategory = async () => {
    try {
      const response = await fetch("/data/category.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCategory(data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  // Fetch category data on mount
  useEffect(() => {
    fetchCategory();

    // Auto slide every 1 second
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 2000); // 1 second interval

    // Cleanup the interval when the component unmounts
    return () => clearInterval(autoSlide);
  }, [Category.length, Slide]);

  // Go to the next slide
  const nextSlide = () => {
    // Loop back to the first slide when reaching the end
    if (Slide >= Category.length - 1) {
      Setslide(0); // Reset to first item
    } else {
      Setslide(Slide + 1); // Move to next item
    }
  };

  // Go to the previous slide
  const prevslide = () => {
    // Loop back to the last slide when at the first slide
    if (Slide === 0) {
      Setslide(Category.length - 1); // Go to the last item
    } else {
      Setslide(Slide - 1); // Move to the previous item
    }
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex my-3 items-center justify-between">
          <div className="text-[25px] font-bold">What's on your mind?</div>
          <div className="flex">
            <div
              // className="flex justify-center items-center w-[30px] h-[30px] bg-red-300 rounded-full mx-2"
              onClick={prevslide}
            >
              {/* <MdArrowBackIos /> */}
            </div>
            <div
              // className="flex justify-center items-center w-[30px] h-[30px] bg-red-300 rounded-full mx-2"
              onClick={nextSlide}
            >
              {/* <MdArrowForwardIos /> */}
            </div>
          </div>
        </div>
        <div className="flex gap-5 overflow-hidden">
          {Category.map((cat, index) => {
            return (
              <div
                style={{
                  transform: `translateX(-${Slide * 110}%)`, // move all the items
                  transition: "transform 1s ease-in-out", // 1 second transition for sliding effect
                }}
                key={index}
                className="w-[153px] shrink-0"
              >
                <img
                  src={cat.image}
                  alt={" "}
                  className="w-[70%] h-[100px] object-cover rounded-md"
                />
              </div>
            );
          })}
        </div>
        <hr className="my-4 border-[1px]" />
      </div>
    </>
  );
};

export default Category;
