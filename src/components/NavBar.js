import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className='bg-gray-700'>
      <div className='container mx-auto  flex justify-between'>
        <nav>
          <NavLink
            to='/portfolio'
            exact
            activeClassName='text-white'
            className='inflex-flex items-center py-6 px-3 mr-4 text-blue-100 hover:text-blue-800 text-4xl font-bold cursive tracking-widest'
          >
            AlejandroCSC
          </NavLink>
          <NavLink
            to='/portfolio/post'
            activeClassName='text-blue-100 bg-blue-700'
            className='inline-flex items-center py-3 px-3 my-8 rounded text-blue-200 hover:text-blue-800'
          >
            Blog Posts
          </NavLink>
          <NavLink
            to='/portfolio/project'
            activeClassName='text-blue-100 bg-blue-700'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800'
          >
            Projects
          </NavLink>
          <NavLink
            to='/portfolio/about'
            activeClassName='text-blue-100 bg-blue-700'
            className='inline-flex items-center py-3 px-3 my-6 rounded text-blue-200 hover:text-blue-800'
          >
            About Me!
          </NavLink>
        </nav>
        <div className='inline-flex py-3 px-3 my-6'>
          <SocialIcon
            url='https://github.com/AlejandroCSC'
            className='mr-4'
            target='_blank'
            fgColor='#fff'
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
