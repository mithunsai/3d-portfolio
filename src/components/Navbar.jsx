import { Link } from "react-router-dom"
import { navLinks } from "../contants"
import { styles } from "../styles";
import { close, logo, menu } from "../assets";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <nav className={`${styles.paddingX
        } w-full flex justify-between py-5 max-w-7xl mx-auto`}>
        <div id="logo" className="w-1/2">
          <Link to={'/'} className="flex items-center gap-2">
            <img src={logo} alt="logo" className="w-9 h-9 rounded" />
            <p className="text-white text-[18px] font-bold cursor-pointer">Mithun M <span className="hidden sm:inline-block">| Software Developer</span></p>

          </Link>
        </div>
        <div id="navItems">
          <ul className="hidden sm:flex flex-row gap-10">
            {navLinks.map((nav) => {
              return (<li
                key={nav.id}
                className={`${active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>)
            })}
          </ul>
        </div>
        <div id="menu" className="sm:hidden flex flex-1 justify-end items-center">
          <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-5 min-w-[140px] z-10 rounded-xl`}>
            <ul className="flex flex-col gap-5">
              {navLinks.map((nav) => {
                return (<li
                  key={nav.id}
                  className={`${active === nav.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => { setActive(nav.title); setToggle(!toggle) }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>)
              })}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar