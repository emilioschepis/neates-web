import "keen-slider/keen-slider.min.css";

import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useState } from "react";

import screenshot1 from "../public/screenshots/screenshot_1.png";
import screenshot2 from "../public/screenshots/screenshot_2.png";
import screenshot3 from "../public/screenshots/screenshot_3.png";
import screenshot4 from "../public/screenshots/screenshot_4.png";

const SCREENSHOTS: { image: StaticImageData; alt: string }[] = [
  { image: screenshot1, alt: "Map screen" },
  { image: screenshot2, alt: "New note screen" },
  { image: screenshot3, alt: "Note detail screen" },
  { image: screenshot4, alt: "Note info screen" },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slideChanged: (s) => setCurrent(s.details().relativeSlide),
  });

  return (
    // <div className="relative h-96 w-full md:w-1/3 md:h-auto">
    <div className="w-full h-96 p-8 md:w-1/3 md:h-auto">
      <div ref={sliderRef} className="relative keen-slider w-full h-full">
        {SCREENSHOTS.map((screenshot) => (
          <div key={screenshot.alt} className="keen-slider__slide">
            <Image src={screenshot.image} alt={screenshot.alt} layout="fill" objectFit="contain" />
          </div>
        ))}
        <div className="absolute flex justify-center bottom-8 left-0 right-0">
          <div className="flex items-center space-x-2 bg-gray-800/80 rounded-full p-2">
            {new Array(SCREENSHOTS.length).fill(0).map((_, idx) => (
              <button
                key={idx.toString()}
                onClick={() => slider.moveToSlideRelative(idx)}
                className={`h-2 w-2 rounded-full ${idx === current ? "bg-yellow-500" : "bg-gray-200"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
