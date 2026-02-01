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
        <div id="chip" className="flex justify-center my-20">
          <img src={chipImg} alt="chip" width={180} height={180} className="z-10" />
        </div>

        {/* Title and Subtitle */}
        <div className="flex flex-col items-center text-center mb-16 px-4">
          <h2 className="hiw-title text-4xl md:text-5xl font-semibold text-white leading-tight">
            A17 Pro chip.<br />A monster win for gaming.
          </h2>
          <p className="hiw-subtitle text-gray-400 text-lg mt-4 max-w-xl">
            It's here. The biggest redesign in the history of Apple GPUs.
          </p>
        </div>

        {/* Frame + Video */}
        <div className="mt-10 md:mt-20 mb-14 flex justify-center relative">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-4xl flex justify-center">

            {/* Phone Frame */}
            <img
              src={frameImg}
              alt="frame"
              className="w-full h-auto object-contain z-10"
            />

            {/* Inner screen container */}
            <div className="absolute top-[9%] left-[6%] w-[88%] h-[82%] overflow-hidden rounded-[1.8rem] md:rounded-[2.5rem] z-0">
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
          <p className="text-gray-400 font-semibold text-center mt-4">Honkai: Star Rail</p>

        {/* Text Sections */}
        <div className="hiw-text-container flex flex-col md:flex-row gap-12 md:gap-24 items-start md:items-center max-w-5xl mx-auto">

          {/* Left Column */}
          <div className="flex flex-col flex-1 space-y-6">
            <p className="hiw-text g_fadeIn text-gray-400 text-lg leading-relaxed">
              A17 Pro is an entirely new class of iPhone chip that delivers our{' '}
              <span className="text-white font-medium">
                best graphic performance by far
              </span>.
            </p>

            <p className="hiw-text g_fadeIn text-gray-400 text-lg leading-relaxed">
              Mobile{' '}
              <span className="text-white font-medium">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col flex-1 space-y-2 text-center g_fadeIn">
            <p className="hiw-text text-gray-400 text-lg">New</p>
            <p className="hiw-bigtext text-3xl md:text-4xl font-bold text-white">Pro-class GPU</p>
            <p className="hiw-text text-gray-400 text-lg">with 6 cores</p>
          </div>

        </div>


      </div>
    </section>
  )
}

export default HowItWorks;
