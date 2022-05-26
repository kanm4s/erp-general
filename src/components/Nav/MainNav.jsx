import { useState } from "react";
import { BiTask, BiMessageAltDetail, BiBell, BiHeart } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail, HiOutlineSun } from "react-icons/hi";
import { Outlet, useNavigate } from "react-router-dom";
import SectionMenu from "../Nav/SectionMenu";
import SubNav from "./SubNav/SubNav";
import "./MainNav.css";

export default function MainNav() {
  const navigate = useNavigate();
  const [showMenuProfile, setShowMenuProfile] = useState(false);

  return (
    <div className="absolute flex">
      <nav className="relative w-48 2xl:w-52 z-20 bg-neutral-100 h-screen py-8 2xl:py-16 flex flex-col justify-between">
        <h1
          className="text-4xl font-bold h-16 text-main-color cursor-pointer pl-6 2xl:pl-10"
          onClick={() => navigate("/")}
        >
          ERP
        </h1>
        <div className="all-section-menu grow mt-9">
          <SectionMenu
            header="Quick Menu"
            element={[
              <BiTask className="relative top-1 text-xl cursor-pointer" />,
              <FaRegUser className="relative top-1 text-xl cursor-pointer" />,
            ]}
            name={[
              { title: "Tasks", type: "navigate" },
              { title: "Employees", type: "navigate" },
            ]}
          />
          <SectionMenu
            header="Notification"
            element={[
              <HiOutlineMail className="relative top-1 text-xl cursor-pointer" />,
              <BiMessageAltDetail className="relative top-1 text-xl cursor-pointer" />,
              <BiBell className="relative top-1 text-xl cursor-pointer" />,
            ]}
            name={[
              { title: "MailBox", type: "navigate" },
              { title: "Message", type: "subMenu" },
              { title: "Notification", type: "subMenu" },
            ]}
          />
          <SectionMenu
            header="Other"
            element={[
              <HiOutlineSun className="relative top-1 text-xl cursor-pointer" />,
              <BiHeart className="relative top-1 text-xl cursor-pointer" />,
            ]}
            name={[
              { title: "Dark Mode", type: "subMenu" },
              { title: "GoodJob Note", type: "subMenu" },
            ]}
          />
        </div>
        <div className="relative">
          {showMenuProfile ? (
            <div className="absolute  bottom-1 w-full">
              <h2 className="px-6 py-1 text-zinc-500 hover:text-zinc-100 transition ease-in-out bg-main-nav">
                Edit profile
              </h2>
              <h2 className="px-6 py-1 text-zinc-500 hover:text-zinc-100 transition ease-in-out bg-main-nav">
                Logout
              </h2>
            </div>
          ) : (
            ""
          )}
        </div>
        <div
          className="flex gap-3 items-center h-16 pl-6 2xl:pl-10 cursor-pointer"
          onClick={() => setShowMenuProfile(!showMenuProfile)}
        >
          <img
            src="https://vtubie.com/wp-content/uploads/2020/12/041220201607077946.png"
            alt="profile"
            className="w-12 h-12 rounded-full"
          />
          <div className="relative top-1 cursor-pointer">
            <h1 className="text-base font-bold text-zinc-700">Kantapon</h1>
            <p className="relative bottom-2 text-zinc-400">Junior</p>
          </div>
        </div>
      </nav>
      <SubNav />
      <Outlet />
    </div>
  );
}
