import React, { useState } from "react";
import Fav from "../assets/Favorite.png";
import account from "../assets/Account.png";
import cart from "../assets/Shopping Cart.png";

import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="flex flex-row justify-between items-center py-3 px-4">
        <h1 className="font-bold text-xl cursor-pointer">E.comm</h1>

        <div className="hidden lg:flex nav_items font-semibold">
          <ul>New Arrivals</ul>
          <ul>Contact</ul>
          <ul>About</ul>
        </div>

        <div className="p-4 flex flex-row items-center">
          <img src={Fav} alt="favorites" className="w-[25px] mx-4 cursor-pointer" />

          <ul>
            <img src={cart} alt="cart" className="w-[25px] mx-4 cursor-pointer" />
          </ul>
          <ul>
            <img src={account} alt="account" className="w-[25px] mx-4 cursor-pointer" />
          </ul>
        </div>

        {/* mobile nav */}
        <div className="lg:hidden flex ">
          <div className="flex ">
            <button
              onClick={() => setToggle((prev) => !prev)}
              type="button"
              className=""
            >
              {toggle ? <ImCross /> : <GiHamburgerMenu />}
            </button>
            {toggle && (
              <div className="dropdown">
                <ul onClick={() => setToggle(false)} className="cursor-pointer">
                  New Arrivals
                </ul>
                <ul onClick={() => setToggle(false)} className="cursor-pointer">
                  Contact
                </ul>
                <ul onClick={() => setToggle(false)} className="cursor-pointer">
                  About
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
