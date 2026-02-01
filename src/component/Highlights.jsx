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
      className="w-screen overflow-hidden h-full common-padding pb-16 lg:pb-20 bg-zinc"
    >
      <div className="screen-max-width">
        {/* HEADER */}
        <div className="mb-8 lg:mb-10 w-full md:flex items-end justify-between">
          <h1
            id="title"
            className="section-heading lg:text-[48px] xl:text-[52px]"
          >
            Get the highlights.
          </h1>

          <div className="flex flex-wrap items-end gap-4 lg:gap-3">
            <p className="link text-sm lg:text-base">
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2 inline-block" />
            </p>
            <p className="link text-sm lg:text-base">
              Watch the event
              <img src={rightImg} alt="right" className="ml-2 inline-block" />
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
