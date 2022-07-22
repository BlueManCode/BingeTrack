import React, { ReactNode, useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarRowProps {
  icon: ReactNode;
  title: string;
  redirect: string;
}

const SideBarMenuOption = (props: SidebarRowProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isActive, setisActive] = useState(false);
  const menuOption = useRef(null);

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === props.redirect) {
      setisActive(true);
    }
  }, []);

  const handleNavigation = () => {
    navigate(props.redirect);
  };

  return (
    <div ref={menuOption} className={`${isActive ? 'bg-neutral-800' : ''} flex hover:bg-neutral-800 cursor-pointer p-3 pl-6 ml-4 mr-4 text-lg font-normal items-center gap-4 mb-1 rounded-md`} onClick={handleNavigation}>
      {props.icon}
      {props.title}
    </div>
  );
};

export default SideBarMenuOption;
