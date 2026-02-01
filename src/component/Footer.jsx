import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5 bg-black text-gray-300">
      <div className="screen-max-width mx-auto flex flex-col gap-4">

        {/* Shop Info */}
        <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
          <p className="font-semibold text-xs sm:text-sm">
            More ways to shop:{' '}
            <span className="underline text-blue-500">
              Find an Apple Store{' '}
            </span>
            or{' '}
            <span className="underline text-blue-500">
              other retailer
            </span>{' '}
            near you.
          </p>
          <p className="font-semibold text-xs sm:text-sm mt-1 sm:mt-0">
            Or call 000800-040-1966
          </p>
        </div>

        {/* Divider */}
        <div className="bg-neutral-700 my-4 h-[1px] w-full" />

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <p className="font-semibold text-xs sm:text-sm">
            Copyright @ 2024 Apple Inc. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-2 sm:gap-4">
            {footerLinks.map((link, i) => (
              <p key={link} className="font-semibold text-xs sm:text-sm">
                {link}
                {i !== footerLinks.length - 1 && <span className="mx-1 sm:mx-2">|</span>}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
