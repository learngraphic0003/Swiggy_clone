import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { GoSignIn } from "react-icons/go";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpCircleSharp } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";

const Header = () => {
  const [toggle, settoggle] = useState(false);

  const hidesidemenu = () => {
    settoggle(false);
  };

  return (
    <>

    
      <div
        className="black-overlay w-full h-full fixed duration-500 z-[1]"
        onClick={hidesidemenu}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
          
        }}
      >  </div>

      <div
        onClick={( ) => {
          settoggle(false);
        }}
        className="w-[500px] bg-red-500 h-full absolute duration-[400ms] z-[2] "
        style={{ left: toggle ? "0%" : "-100%" }}
      > </div>

      <header className="p-[15px] shadow-xl top-0 sticky  bg-white z-[2]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="w-[80px]">
            <Link to="/">
              <img
                src="https://www.gianisicecream.com/wp-content/uploads/2023/01/Swiggy-Logo-PNG-768x763.png"
                alt="not found"
                className="w-full hover:scale-110 duration-150"
              />
            </Link>
          </div>
          <div>
            <span className="font-bold border-b-[3px] border-[black] mr-1" onClick={ ( ) => {
              settoggle ('true')
            }}>India</span> is my country
          </div>
          <nav className="flex list-none gap-4 ml-auto font-semibold text-[18px]">
            <ul className="flex list-none gap-4 ml-auto font-semibold text-[18px]">
              {[
                { icon: <IoSearch />, label: "Search", key: "search", box : <input className=" text-black bg-gray-200 w-[360px] rounded-[17px] p-[6px] text-[17px]" type="text" placeholder="enter you best food" />   },
                { icon: <BiSolidOffer />, label: "Offers", key: "offers",  sup: "new" },
                { icon: <IoHelpCircleSharp />, label: "Help", key: "help", path: "/HelpCenter" },
                { icon: <GoSignIn />, label: "Login", key: "sign-in", path: "/login" },
                { icon: <BsCart4 />, label: "Cart", key: "cart", path: "/cart", sup: "0" },
              ].map((item) => (
                
                <li className="flex items-center gap-2 " key={item.key}>
                  
                  <Link to={item.path} className="flex items-center gap-2 hover:text-orange-500">
                      {item.box} {item.icon} {item.label} <sup>{item.sup}</sup>
                  </Link>
                </li>
               
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
