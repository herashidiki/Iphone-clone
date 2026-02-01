import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
import { useEffect, useState, useRef } from 'react'

const Hero = () => {
  const videoRef = useRef(null)

  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  )

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', {
      opacity: 1,
      y: -30,
      duration: 1,
      ease: 'power3.out',
      delay: 1
    })

    gsap.fromTo(
      videoRef.current,
      { scale: 1.2, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
        delay: 1.2
      }
    )

    gsap.to('#cta', {
      opacity: 1,
      y: -50,
      duration: 1,
      ease: 'power3.out',
      delay: 2
    })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title opacity-0 translate-y-10">
          iPhone 15 Pro
        </p>

        <div className="md:w-10/12 w-9/12">
          <video
            ref={videoRef}
            className="pointer-events-none"
            autoPlay
            muted
            playsInline
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero
