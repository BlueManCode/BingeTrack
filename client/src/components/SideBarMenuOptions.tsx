import React from 'react';
import SideBarMenuOption from './SideBarMenuOption';
import { AiFillHome } from 'react-icons/ai';
import { RiSearch2Fill } from 'react-icons/ri';
import { FaUserFriends } from 'react-icons/fa';
import { MdOutlineDataUsage } from 'react-icons/md';
import { FaListUl } from 'react-icons/fa';

const SideBarMenuOptions = () => {
  return (
    <div>
      <SideBarMenuOption icon={<AiFillHome size={25} />} title={'Home'} redirect={'/'} />
      <SideBarMenuOption icon={<RiSearch2Fill size={25} />} title={'Discover'} redirect={'/discover'} />
      <SideBarMenuOption icon={<FaUserFriends size={25} />} title={'Friends'} redirect={'/friends'} />
      <SideBarMenuOption icon={<MdOutlineDataUsage size={25} />} title={'Report'} redirect={'/report'} />
      <SideBarMenuOption icon={<FaListUl size={25} />} title={'My List'} redirect={'/list'} />
    </div>
  );
};

export default SideBarMenuOptions;
