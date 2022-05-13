import { BiTask, BiMessageAltDetail, BiBell, BiHeart } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail, HiOutlineSun } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import SectionMenu from "../Nav/SectionMenu";
import SubNav from "./SubNav/SubNav";

export default function MainNav() {
    let navigate = useNavigate();
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
                <div className="flex gap-3 items-center h-16 pl-6 2xl:pl-10">
                    <img
                        src="https://vtubie.com/wp-content/uploads/2020/12/041220201607077946.png"
                        alt="profile"
                        className="w-12 h-12 rounded-full"
                    />
                    <div className="relative top-1 cursor-default">
                        <h1 className="text-base font-bold text-zinc-700">
                            Kantapon
                        </h1>
                        <p className="relative bottom-2 text-zinc-400">
                            Junior
                        </p>
                    </div>
                </div>
            </nav>
            <SubNav />
        </div>
    );
}
