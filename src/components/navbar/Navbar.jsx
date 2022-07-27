import "./navbar.css";
import whole from "../../assests/whole.png";
import { useState } from "react";
import Login from "../login/Login";
import { createContext } from "react";

export const Gloabaldata = createContext("");

const Navbar = () => {
  const [sideBar, setsideBar] = useState(false);
  const showSidebar = () => setsideBar(!sideBar);

  const [Switch, setSwitch] = useState(false);
  const SSwitch = () => {
    setSwitch(!Switch);
    console.log(Switch);
  };

  return (
    <>
      <div class="btn-top">
        {!Switch ? (
          <button onClick={SSwitch}>Join Group</button>
        ) : (
          <button onClick={SSwitch}>Leave Group</button>
        )}
      </div>
      <div class="disp">
        <div class="bgg-color d-flex justify-content-between py-3 px-5 border-bottom border-secondary ">
          <a class="navbar-brand pt-1 " href="#">
            <img src={whole} alt="" />
          </a>

          <form role="search w-200">
            <input
              class="form-control  w-200 rounded-pill"
              type="search"
              placeholder="Search for your favorite groups in ATG"
              aria-label="Search"
            />
          </form>
          <div class="d-flex p-auto">
            <div class="mx-3">
              <button class="text-m" onClick={showSidebar}>
                Create Account
                <a class="mx-2" href="">
                  It's free!
                </a>
              </button>
            </div>
          </div>
        </div>
        <Gloabaldata.Provider
          value={{ sideBar: sideBar, setsideBar: setsideBar }}
        >
          <Login />
        </Gloabaldata.Provider>
      </div>
    </>
  );
};

export default Navbar;
