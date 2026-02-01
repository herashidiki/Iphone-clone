import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import { useEffect, useRef, useState } from "react";
import { hightlightsSlides } from "../constants";
import { pauseImg, playImg, replayImg } from "../utils";

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState([]);
  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to(videoRef.current[videoId], {
      scrollTrigger: {
        trigger: videoRef.current[videoId],
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [videoId, isEnd]);

  useEffect(() => {
    let currentProgress = 0;
    const span = videoSpanRef.current;

    if (span[videoId]) {
      const anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress !== currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], { width: "12px" });
            gsap.to(span[videoId], { backgroundColor: "#afafaf" });
          }
        },
      });

      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }

      return () => gsap.ticker.remove(animUpdate);
    }
  }, [videoId, startPlay, isPlaying]);

  useEffect(() => {
    if (loadedData.length > 3) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;

      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case "video-reset":
        setVideo({
          isEnd: false,
          startPlay: false,
          videoId: 0,
          isLastVideo: false,
          isPlaying: false,
        });
        break;

      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: false }));
        break;

      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: true }));
        break;

      default:
        return;
    }
  };

  const handleLoadedMetaData = (i, e) =>
    setLoadedData((pre) => [...pre, e]);

  return (
    <section className="w-screen overflow-hidden">
      <div className="flex items-center">
        {hightlightsSlides.map((list, i) => (
          <div
            key={list.id}
            id="slider"
            className="flex-shrink-0 w-screen flex justify-center px-6 lg:px-20"
          >
            <div className="video-carousel_container w-full max-w-[1280px]">
              <div className="relative w-full h-[60vh] sm:h-[65vh] lg:h-[72vh] rounded-3xl overflow-hidden bg-black">
                <video
                  playsInline
                  muted
                  preload="auto"
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== hightlightsSlides.length - 1
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                  className="w-full h-full object-cover pointer-events-none"
                >
                  <source src={list.video} type="video/mp4" />
                </video>

                <div className="absolute top-10 left-6 sm:left-10 lg:left-16 z-10 max-w-[520px]">
                  {list.textLists.map((text, idx) => (
                    <p
                      key={idx}
                      className="text-white text-lg sm:text-2xl lg:text-3xl font-medium leading-snug mb-2"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative flex flex-col items-center mt-10 gap-6">
        <div className="flex items-center gap-4 px-6 py-4 bg-gray-900/60 backdrop-blur rounded-full">
          {hightlightsSlides.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="relative h-3 w-3 sm:h-3.5 sm:w-3.5 bg-gray-900 rounded-full overflow-hidden"
            >
              <span
                ref={(el) => (videoSpanRef.current[i] = el)}
                className="absolute inset-0 h-full w-full rounded-full"
              />
            </span>
          ))}
        </div>

        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt="control"
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : () =>
                    handleProcess(isPlaying ? "pause" : "play")
            }
            className="w-6 h-6 sm:w-7 sm:h-7"
          />
        </button>
      </div>
    </section>
  );
};

export default VideoCarousel;
