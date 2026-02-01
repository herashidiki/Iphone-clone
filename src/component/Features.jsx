import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
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
      className="common-padding bg-zinc relative overflow-hidden"
    >
      <div className="screen-max-width mx-auto flex flex-col gap-12">

        {/* TITLE */}
        <div className="mb-6 w-full">
          <h1
            id="features_title"
            className="section-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Explore the full story.
          </h1>
        </div>

        {/* HERO TEXT */}
        <div className="flex flex-col items-center gap-12 sm:gap-16">
          <div className="flex flex-col items-start px-4 sm:px-0 text-center sm:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight">
              iPhone.
            </h2>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white leading-tight">
              Forged in titanium.
            </h2>
          </div>

          {/* VIDEO */}
          <div className="relative w-full max-w-5xl h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center rounded-xl overflow-hidden">
            <video
              ref={videoRef}
              className="w-full h-full object-cover object-center"
              preload="auto"
              muted
              playsInline
            >
              <source src={exploreVideo} type="video/mp4" />
            </video>
          </div>

          {/* IMAGES */}
          <div className="feature-video-container flex flex-col sm:flex-row gap-6 w-full">
            <div className="overflow-hidden flex-1 h-64 sm:h-[50vh] rounded-xl">
              <img
                src={explore1Img}
                alt="titanium"
                className="feature-video g_grow w-full h-full object-cover"
              />
            </div>
            <div className="overflow-hidden flex-1 h-64 sm:h-[50vh] rounded-xl">
              <img
                src={explore2Img}
                alt="titanium 2"
                className="feature-video g_grow w-full h-full object-cover"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="feature-text-container space-y-6 sm:space-y-8 max-w-3xl mx-auto px-4 sm:px-0 text-center sm:text-left">
            <p className="feature-text g_text text-lg leading-relaxed text-zinc-400">
              iPhone 15 Pro is{' '}
              <span className="text-white font-medium">
                the first iPhone to feature an aerospace-grade titanium design
              </span>
              , engineered with the same alloy used in{' '}
              <span className="text-zinc-300">
                spacecraft sent on missions to Mars
              </span>.
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
    </section>
  )
}

export default Features
