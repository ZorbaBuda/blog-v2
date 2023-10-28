import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import image1 from "@/public/moola-bandha-the-master-key.png";
import image2 from "@/public/orgasmo-mujeres-richardson.png";
import image3 from "@/public/biology-of-love.jpg";
import Image from "next/image";
import { generateSlides } from "@/lib/generateSlides";
import "@splidejs/react-splide/css";
import { allPosts } from "@/.contentlayer/generated";
import BlogCard from "./BlogCard8";

export default function Splider() {
  return (
    <>
      <div className="wrapper">
        <h2 id="basic-example-heading">Another example</h2>

        <Splide
          className="flex flex-wrap"
          options={{
            perPage: 4,
            // height: "750px",
            rewind: true,
            gap: "1rem",
          }}
          aria-labelledby="basic-example-heading"
          onMoved={(splide, newIndex) => {
            // eslint-disable-next-line
            console.log("moved", newIndex);

            // eslint-disable-next-line
            console.log("length", splide.length);
          }}
        >
          {allPosts.map((post) => {
            return (
            <SplideSlide key={post._id}>
              <BlogCard key={post._id} post={post} />
              </SplideSlide>
            );
          })}

        </Splide>
      </div>

      <div className="wrapper">
        <h2 id="basic-example-heading">Basic Example</h2>

        <Splide
          className="flex flex-wrap"
          options={{
            perPage: 4,
            height: "10rem",
            rewind: true,
            gap: "1rem",
          }}
          aria-labelledby="basic-example-heading"
          onMoved={(splide, newIndex) => {
            // eslint-disable-next-line
            console.log("moved", newIndex);

            // eslint-disable-next-line
            console.log("length", splide.length);
          }}
        >
          {generateSlides().map((slide) => (
            <SplideSlide key={slide.src}>
              <img src={slide.src} alt={slide.alt} />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <Splide
        options={{
          rewind: true,
          gap: "1rem",
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide>
          <Image src={image1} alt="coverImage" width={324} height={500} />
        </SplideSlide>
        <SplideSlide>
          <Image src={image2} alt="coverImage" width={324} height={500} />
        </SplideSlide>
        <SplideSlide>
          <Image src={image3} alt="coverImage" width={324} height={500} />
        </SplideSlide>
      </Splide>

      <div className="container mx-auto">
        <Splide className="splide">
          <SplideTrack className="splide__track">
            <div className="splide__list gap-x-4">
              <div className="w-full p-4 shadow splide__slide">
                <div className="space-y-2">
                  <center>
                    <img
                      className="rounded-t-lg"
                      src="https://image.slidesdocs.com/responsive-images/slides/0-blue-business-style-corporate-publicity-introduction-powerpoint-background_dc6f4ac2db__960_540.jpg"
                      alt=""
                      width="350"
                      height="350"
                    />
                  </center>
                  <h1 className="text-2xl font-semibold">
                    Tailwind Card Slider 1
                  </h1>
                  <p className="text-gray-600">
                    tailwind card slider with splidejs It is a long established
                    fact that a reader will be distracted.
                  </p>
                  <center>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center"
                    >
                      Know More
                    </button>
                  </center>
                </div>
              </div>
              <div className="w-full p-4 shadow splide__slide">
                <div className="space-y-2">
                  <center>
                    <img
                      className="rounded-t-lg"
                      src="https://image.slidesdocs.com/responsive-images/slides/0-blue-business-style-corporate-publicity-introduction-powerpoint-background_dc6f4ac2db__960_540.jpg"
                      alt=""
                      width="350"
                      height="350"
                    />
                  </center>
                  <h3 className="text-2xl font-semibold">
                    Tailwind Card Slider 2
                  </h3>
                  <p className="text-gray-600">
                    tailwind card slider with splidejs It is a long established
                    fact that a reader will be distracted.
                  </p>
                  <center>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center"
                    >
                      Know More
                    </button>
                  </center>
                </div>
              </div>
              <div className="w-full p-4 shadow splide__slide">
                <div className="space-y-2">
                  <center>
                    <img
                      className="rounded-t-lg"
                      src="https://image.slidesdocs.com/responsive-images/slides/0-blue-business-style-corporate-publicity-introduction-powerpoint-background_dc6f4ac2db__960_540.jpg"
                      alt=""
                      width="350"
                      height="350"
                    />
                  </center>
                  <h3 className="text-2xl font-semibold">
                    Tailwind Card Slider 3
                  </h3>
                  <p className="text-gray-600">
                    tailwind card slider with splidejs It is a long established
                    fact that a reader will be distracted.
                  </p>
                  <center>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center"
                    >
                      Know More
                    </button>
                  </center>
                </div>
              </div>
              <div className="w-full p-4 shadow splide__slide">
                <div className="space-y-2">
                  <center>
                    <img
                      className="rounded-t-lg"
                      src="https://image.slidesdocs.com/responsive-images/slides/0-blue-business-style-corporate-publicity-introduction-powerpoint-background_dc6f4ac2db__960_540.jpg"
                      alt=""
                      width="350"
                      height="350"
                    />
                  </center>
                  <h3 className="text-2xl font-semibold">
                    Tailwind Card Slider 4
                  </h3>
                  <p className="text-gray-600">
                    tailwind card slider with splidejs It is a long established
                    fact that a reader will be distracted.
                  </p>
                  <center>
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center"
                    >
                      Know More
                    </button>
                  </center>
                </div>
              </div>
            </div>
          </SplideTrack>
        </Splide>
      </div>
    </>
  );
}
