import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animations';

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from('#chip', {
      scrollTrigger: {
        trigger: '#chip',
        start: '20% bottom',
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: 'power2.inOut'
    })

    animateWithGsap('.g_fadeIn', {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.inOut'
    })
  }, []);

  return (
    <section className="common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width mx-auto">

        {/* Chip Image */}
        <div id="chip" className="flex justify-center my-16 sm:my-20">
          <img src={chipImg} alt="chip" className="w-36 sm:w-44 md:w-48 lg:w-52 h-auto z-10" />
        </div>

        {/* Title and Subtitle */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16 px-4">
          <h2 className="hiw-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            A17 Pro chip.<br />A monster win for gaming.
          </h2>
          <p className="hiw-subtitle text-gray-400 text-base sm:text-lg mt-4 max-w-xl">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        {/* Frame + Video */}
        <div className="mt-8 sm:mt-10 md:mt-16 mb-10 sm:mb-14 flex justify-center relative w-full">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-3xl lg:max-w-4xl flex justify-center">

            {/* Phone Frame */}
            <img
              src={frameImg}
              alt="frame"
              className="w-full h-auto object-contain z-10"
            />

            {/* Inner screen container */}
            <div className="absolute top-[9%] left-[6%] w-[88%] h-[82%] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] z-0">
              <video
                className="w-full h-full object-cover pointer-events-none"
                playsInline
                preload="auto"
                muted
                autoPlay
                loop
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>

          </div>
        </div>

        <p className="text-gray-400 font-semibold text-center mt-2 sm:mt-4">Honkai: Star Rail</p>

        {/* Text Sections */}
        <div className="hiw-text-container flex flex-col md:flex-row gap-8 md:gap-16 lg:gap-24 items-start md:items-center max-w-5xl mx-auto mt-10">

          {/* Left Column */}
          <div className="flex flex-col flex-1 space-y-4 sm:space-y-6">
            <p className="hiw-text g_fadeIn text-gray-400 text-base sm:text-lg md:text-lg leading-relaxed">
              A17 Pro is an entirely new class of iPhone chip that delivers our{' '}
              <span className="text-white font-medium">
                best graphic performance by far
              </span>.
            </p>

            <p className="hiw-text g_fadeIn text-gray-400 text-base sm:text-lg md:text-lg leading-relaxed">
              Mobile{' '}
              <span className="text-white font-medium">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col flex-1 space-y-1 sm:space-y-2 text-center g_fadeIn mt-6 md:mt-0">
            <p className="hiw-text text-gray-400 text-base sm:text-lg">New</p>
            <p className="hiw-bigtext text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">Pro-class GPU</p>
            <p className="hiw-text text-gray-400 text-base sm:text-lg">with 6 cores</p>
          </div>

        </div>

      </div>
    </section>
  )
}

export default HowItWorks;
