import {NavLink, useLocation} from "react-router-dom";
import {MdMenu, MdNotificationsNone, MdExpandMore} from "react-icons/md";
import logo from "../img/kato-logo.png";
import {useEffect, useState} from "react";
import Session, {getName, getRole} from "../Session";
import DropdownNavbar from "./DropdownNavbar";
import axios from "axios";

const Navbar = ({toggleSidebar}) => {
  const location = useLocation().pathname;
  const [notification, setNotification] = useState([]);
  const capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  let handleLogout = function () {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location = "/login";
  };

  const getNotificationData = async () => {
    try {
      const {data} = await axios.get(
        `https://api.kattohair.com/api/notifications`,
        Session()
      );
      setNotification(data.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNotificationData();
  }, [notification]);

  return (
    <>
      <nav className="fixed left-0 right-0 h-20 flex flex-row bg-primary-900 text-white z-50">
        <div className="flex flex-row justify-between items-center p-3 group bg-primary-100 min-w-fit md:w-60 lg:min-w-[270px]">
          <NavLink to="/">
            <img
              src={logo}
              alt="Kato Hair Design"
              className="hidden ml-11 md:block"
            />
          </NavLink>
          <button
            className="hover:bg-primary-500 px-3 py-3.5 rounded-lg"
            onClick={toggleSidebar}
          >
            <MdMenu className="text-2xl" />
          </button>
        </div>
        <div className="flex flex-row justify-end sm:justify-between items-center p-3 w-full">
          <h1 className="font-noto-sans text-lg font-semibold hidden sm:block">
            {location === "/"
              ? "Dashboard"
              : capitalize(location.replace("/", ""))}
          </h1>
          <div className="flex flex-row items-center space-x-3">
            <DropdownNavbar
              label={<MdNotificationsNone className="text-2xl" />}
              size="md"
            >
              {notification ? (
                notification?.map((val) => (
                  <div
                    className="hover:bg-primary-500 w-full px-3 py-2 group"
                    key={val.id}
                  >
                    <dd className="text-black font-bold group-hover:text-white">
                      {val.message}
                    </dd>
                    <dt className="text-gray-500 font-semibold group-hover:text-gray-300">
                      {val.datetime}
                    </dt>
                  </div>
                ))
              ) : (
                <div className="hover:bg-primary-500 text-black hover:text-white w-full px-3 py-2">
                  No notifications
                </div>
              )}
            </DropdownNavbar>

            <DropdownNavbar
              showCollapse="true"
              size="sm"
              label={
                <>
                  <img
                    src="https://via.placeholder.com/35/ffffff/000000/?text=profile"
                    alt="profile"
                    className="rounded-full mr-0 sm:mr-5 relative z-20 group-active:shadow-md"
                  />
                  <div className="hidden sm:flex flex-col mr-0 sm:mr-5 text-left relative z-20">
                    <h1 className="font-noto-sans text-sm font-bold group-active:text-black">
                      {getName()}
                    </h1>
                    <h5 className="font-noto-sans text-xs text-[#C4C4C4] group-active:text-black">
                      {getRole() === "master" ? "Owner" : "Operator"}
                    </h5>
                  </div>
                </>
              }
            >
              <div className="flex flex-col sm:hidden p-3 text-right relative z-20">
                <h1 className="font-noto-sans text-sm font-bold text-black">
                  {getName()}
                </h1>
                <h5 className="font-noto-sans text-xs text-[#C4C4C4] group-active:text-black">
                  {getRole() === "master" ? "Owner" : "Operator"}
                </h5>
              </div>
              <button
                onClick={handleLogout}
                className="hover:bg-primary-500 hover:text-white w-full text-black text-center px-3 py-2"
              >
                Log Out
              </button>
            </DropdownNavbar>
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
