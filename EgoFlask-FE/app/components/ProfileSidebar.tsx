import { NavLink } from "@remix-run/react";
import _ from "lodash";
import profileimg from "../../public/images/Frame 38.png";

const links = [
  {
    to: '/profile',
    label: 'Hồ sơ của tôi'
  },
  {
    to: '/orders',
    label: 'Đơn hàng'
  },
];

export const ProfileSidebar = () => {
  return (
    <div className="">
      
      <div className="flex justify-center p-7">
        <img className="w-20 h-20" src={profileimg} alt="Profile" />
        <div className="flex p-7 text-black text-2xl font-bold font-['Noto Serif']">
          A Nguyễn
        </div>
      </div>

   
      <div className="my-7 space-y-12">
        {_.map(links, (link, index) => (
          <NavLink 
            key={index} 
            to={link.to}
            className={({ isActive }) =>
              `block text-xl font-semibold font-['Noto Serif'] p-4 border-2 rounded-r-3xl w-full ${isActive ? 'bg-[#0055C3] text-white border-[#0055C3] hover:text-white hover:no-underline' : 'bg-white text-black border-gray-300 hover:no-underline'}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
