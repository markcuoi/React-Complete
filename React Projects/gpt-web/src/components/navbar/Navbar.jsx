import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="navbar__list">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3">What is GPT3?</a>
          </p>
          <p>
            <a href="#possibility">Open AI</a>
          </p>
          <p>
            <a href="#features">Case Studies</a>
          </p>
          <p>
            <a href="#blog">Library</a>
          </p>
        </div>
      </div>

      <div className="navbar__sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>

      {/* Mobile Dropdown */}
      <div className="navbar__dropdown">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}

        {toggleMenu && (
          <div className="dropdown__container scale-up-center">
            <div className="dropdown__list">
              <p>
                <a href="#home">Home</a>
              </p>
              <p>
                <a href="#wgpt3">What is GPT3?</a>
              </p>
              <p>
                <a href="#possibility">Open AI</a>
              </p>
              <p>
                <a href="#features">Case Studies</a>
              </p>
              <p>
                <a href="#blog">Library</a>
              </p>
            </div>

            <div className="dropdown__sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

//   return (
//       {/* ---------Mobile Menu--------- */}
//       <div className="navbar-menu">
//         {toggleMenu && (
//           <div className="navbar-menu-container scale-up-center">
//             <div className="navbar-menu-container-links">
//               <Menu />
//             </div>
//             <div className="navbar-menu-container-sign">
//               <p>Sign in</p>
//               <button type="button">Sign up</button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
// const Menu = () => (
//   <>
//     <p>
//       <a href="#home">Home</a>
//     </p>
//     <p>
//       <a href="#wgpt3">What is GPT3?</a>
//     </p>
//     <p>
//       <a href="#possibility">Open AI</a>
//     </p>
//     <p>
//       <a href="#features">Case Studies</a>
//     </p>
//     <p>
//       <a href="#blog">Library</a>
//     </p>
//   </>
// );
