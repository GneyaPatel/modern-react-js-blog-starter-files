import React from 'react'
import { NavLink } from 'react-router-dom'

//react icons
import { FaFacebook, FaTwitter, FaBars  } from "react-icons/fa";
 

const Navbar = () => {
    //navitems
    const navItems =[
        {path:"/", link: "Home" },
        {path:"/about", link: "About"},
        {path:"/blogs", link: "Blogs"},
        {path:"/services", link: "Services"},
        {path:"/contact", link: "Contact"}
,
    ]
  return (
    <header className='bg-black text-white'>
      <nav className='px-4 py-4 max-w-7xl mx-0'>
        <a href="/"  className='text-xl font-bold text-white'>Design<span className='text-orange-500'>DK</span></a>

        {/* navitems for lg devices*/}
        <ul className='md:flex gap-12 text-lg hidden'>
          {
           navItems.map(({path,link})=><li className='text-white' key={path}>
              <NavLink to={path}>{link}</NavLink>
           </li>)
          }
        </ul>

        {/*menu icons */}
        <div className='text-white lg:flex gap-4 items-center hidden'>
          <a href="/" className='hover:text-orange-500'><FaFacebook/></a>
          <a href="/" className='hover:text-orange-500'><FaTwitter  /></a>
          <button className='bg-orange-500 px-6 py-2 font-medium round hover:bg-white hover:text-orange-500 transition-all duration-200 ease-in'>Log-in</button>
        </div>

        {/*mobile menu btn, display mobile screen */}
        <div>
          <button className='cursor-pointer'><FaBars className='w-5 h-5'/></button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar