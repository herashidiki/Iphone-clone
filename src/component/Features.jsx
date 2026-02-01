import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import { animateWithGsap } from '../utils/animations'
import { explore1Img, explore2Img, exploreVideo } from '../utils'

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
  const videoRef = useRef(null)
  const containerRef = useRef(null)

  useGSAP(
    () => {
      /* ---------------- SET INITIAL STATES ---------------- */
      gsap.set('#features_title', { y: 100, opacity: 0 })
      gsap.set('.g_grow', { scale: 0.8, opacity: 0 })
      gsap.set('.g_text', { y: 40, opacity: 0 })

      /* ---------------- VIDEO ---------------- */
      gsap.to(videoRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          once: true,
          markers: false, // set true for debugging
        },
        onStart: () => {
          const video = videoRef.current
          if (video) {
            video.currentTime = 0
            video.play().catch(() => {})
          }
        },
      })

      /* ---------------- TITLE ---------------- */
      animateWithGsap(
        '#features_title',
        { y: 0, opacity: 1 },
        {
          scrollTrigger: {
            trigger: '#features_title',
            start: 'top 85%',
            markers: false,
          },
        }
      )

      /* ---------------- IMAGES ---------------- */
      animateWithGsap(
        '.g_grow',
        { scale: 1, opacity: 1, ease: 'power1' },
        {
          scrollTrigger: {
            trigger: '.feature-video-container',
            start: 'top 80%',
            scrub: 1,
            markers: false,
          },
        }
      )

      /* ---------------- TEXT ---------------- */
      animateWithGsap(
        '.g_text',
        { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 },
        {
          scrollTrigger: {
            trigger: '.feature-text-container',
            start: 'top 85%',
            markers: false,
          },
          stagger: 0.2,
        }
      )

      ScrollTrigger.refresh()
    },
    { scope: containerRef }
  )

  return (
    <section
      ref={containerRef}
      className="h-full common-padding bg-zinc relative"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            Explore the full story.
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold text-white">
              iPhone.
            </h2>
            <h2 className="text-5xl lg:text-7xl font-semibold text-white">
              Forged in titanium.
            </h2>
          </div>

          <div className="flex-center flex-col sm:px-10">
            {/* VIDEO */}
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                id="exploreVideo"
                ref={videoRef}
                className="w-full h-full object-cover object-center rounded-xl"
                preload="auto"
                muted
                playsInline
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative mt-24">
              {/* IMAGES */}
              <div className="feature-video-container flex gap-6 mb-24">
                <div className="overflow-hidden flex-1 h-[50vh] rounded-xl">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow w-full h-full object-cover"
                  />
                </div>

                <div className="overflow-hidden flex-1 h-[50vh] rounded-xl">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    className="feature-video g_grow w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* TEXT */}
              <div className="feature-text-container space-y-10 max-w-3xl mx-auto">
                <p className="feature-text g_text text-lg leading-relaxed text-zinc-400">
                  iPhone 15 Pro is{' '}
                  <span className="text-white font-medium">
                    the first iPhone to feature an aerospace-grade titanium
                    design
                  </span>
                  , engineered with the same alloy used in{' '}
                  <span className="text-zinc-300">
                    spacecraft sent on missions to Mars
                  </span>
                  .
                </p>

                <p className="feature-text g_text text-lg leading-relaxed text-zinc-400">
                  Titanium delivers{' '}
                  <span className="text-white font-medium">
                    our lightest Pro models ever
                  </span>
                  , while maintaining{' '}
                  <span className="text-zinc-300">
                    exceptional strength, durability, and performance
                  </span>
                  — designed for professionals who demand more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
