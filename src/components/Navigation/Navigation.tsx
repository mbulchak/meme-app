import {Navbar, NavbarContent, NavbarItem} from '@heroui/react';
import {NavLink} from 'react-router';

export const Navigation = () => {
  return (
    <Navbar className='border-b rounded-b-2xl border-white/20 shadow-md mb-[30px]'>
      <NavbarContent className='p-[15px] flex gap-8 text-lg font-medium  w-full '>
        <NavbarItem>
          <NavLink to='/table'>Table</NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink to='/list'>List</NavLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
