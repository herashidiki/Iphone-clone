import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="w-full overflow-hidden h-full common-padding pb-12 sm:pb-16 lg:pb-20 bg-zinc"
    >
      <div className="screen-max-width mx-auto">

        {/* HEADER */}
        <div className="mb-6 sm:mb-8 lg:mb-10 w-full flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 lg:gap-0">
          <h1
            id="title"
            className="section-heading text-3xl sm:text-4xl md:text-5xl lg:text-[48px] xl:text-[52px]"
          >
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-center lg:items-end gap-2 sm:gap-3 lg:gap-4 mt-2 lg:mt-0">
            <p className="link text-sm sm:text-base flex items-center">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-1 sm:ml-2 inline-block w-4 h-4 sm:w-5 sm:h-5" />
            </p>
            <p className="link text-sm sm:text-base flex items-center">
              Watch the event
              <img src={rightImg} alt="right" className="ml-1 sm:ml-2 inline-block w-4 h-4 sm:w-5 sm:h-5" />
            </p>
          </div>
        </div>

        {/* CAROUSEL */}
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
