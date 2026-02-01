import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className="w-full py-4 sm:py-5 px-4 sm:px-10 flex justify-center">
      <nav className="flex w-full max-w-[1280px] items-center">
        {/* Apple Logo */}
        <img
          src={appleImg}
          alt="Apple"
          className="w-[14px] h-[18px] sm:w-[15px] sm:h-[20px]"
        />

        {/* Nav Links (hidden on small screens) */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-4 lg:px-5 text-sm cursor-pointer text-gray hover:text-white transition-colors"
            >
              {nav}
            </div>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-5 sm:gap-7 ml-auto">
          <img
            src={searchImg}
            alt="search"
            className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
          />
          <img
            src={bagImg}
            alt="bag"
            className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]"
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
