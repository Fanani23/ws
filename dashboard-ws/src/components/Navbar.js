import {NavLink, useLocation} from "react-router-dom";
import {MdMenu, MdNotificationsNone, MdExpandMore} from "react-icons/md";
import logo from "../img/kato-logo.png";
import {useState} from "react";

const Navbar = ({toggleSidebar}) => {
  const location = useLocation().pathname;
  const [profileOpen, setProfileOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <>
      <nav className="fixed left-0 right-0 h-20 flex flex-row bg-primary-900 text-white z-50">
        <div className="flex flex-row justify-between items-center p-3 group bg-primary-100 min-w-fit md:w-60 lg:min-w-[270px]">
          <NavLink to="/">
            <img
              src={logo}
              alt="Kato Hair Design"
              className="hidden md:block"
            />
          </NavLink>
          <div
            role="button"
            className="hover:bg-primary-500 px-3 py-3.5 rounded-lg"
            onClick={toggleSidebar}
          >
            <MdMenu className="text-2xl" />
          </div>
        </div>
        <div className="flex flex-row justify-end sm:justify-between items-center p-3 w-full">
          <h1 className="font-noto-sans text-lg font-semibold hidden sm:block">
            {location === "/"
              ? "Dashboard"
              : capitalize(location.replace("/", ""))}
          </h1>
          <div className="flex flex-row items-center space-x-3">
            <button
              className={`${
                notificationOpen ? "bg-primary-500" : "hover:bg-primary-500"
              } relative group px-3 py-3.5 rounded-lg`}
              onClick={() => setNotificationOpen(!notificationOpen)}
            >
              <MdNotificationsNone className="text-2xl" />
              <div
                className={`${
                  notificationOpen ? "" : "hidden"
                } absolute top-16 right-0 w-48`}
              >
                <div className="bg-white p-3 rounded-lg shadow-lg">
                  <h1 className="text-red-500">Hello World</h1>
                </div>
              </div>
            </button>
            <button
              className={`${
                profileOpen ? "bg-primary-500" : "hover:bg-primary-500"
              } relative flex flex-col sm:flex-row items-center group  active:bg-white rounded-lg px-3 py-2`}
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <img
                src="https://via.placeholder.com/35/ffffff/000000/?text=profile"
                alt="profile"
                className="rounded-full mr-0 sm:mr-5 relative z-20 group-active:shadow-md"
              />
              <div className="hidden sm:flex flex-col mr-0 sm:mr-5 text-left relative z-20">
                <h1 className="font-noto-sans text-sm font-bold group-active:text-black">
                  Ajeng Sekar M
                </h1>
                <h5 className="font-noto-sans text-xs text-[#C4C4C4] group-active:text-black">
                  Owner
                </h5>
              </div>
              <MdExpandMore className="text-2xl hidden sm:block relative z-20" />
              <div
                className={`${
                  profileOpen ? "" : "hidden"
                } group-active:flex absolute top-16 left-0 right-0 pt-3 px-3 pb-3 z-10 bg-white shadow-lg rounded-lg`}
              >
                <div className="hover:bg-primary-500 hover:text-white rounded-lg w-full text-black text-left px-3 py-2">
                  Keluar
                </div>
              </div>
            </button>
          </div>
        </div>
      </nav>
      <div className="absolute top-20 left-0 right-0">
        <div className="flex justify-end px-3">
          <div className="hidden bg-white p-3 rounded-lg shadow-lg">
            <h1 className="text-red-500">Hello World</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
