import { BiTask, BiMessageAltDetail, BiBell, BiHeart } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineMail, HiOutlineSun } from "react-icons/hi";
import SectionMenu from "../Nav/SectionMenu";

export default function MainNav() {
    return (
        <nav className="w-72 bg-neutral-50 h-screen py-20 pl-10 flex flex-col justify-between">
            <h1 className="text-5xl font-bold h-16 text-teal-600 cursor-pointer">
                ERP
            </h1>
            <div className="all-section-menu grow mt-20">
                <SectionMenu
                    header="Quick Menu"
                    element={[
                        <BiTask className="relative top-2 text-3xl text-zinc-500 cursor-pointer" />,
                        <FaRegUser className="relative top-2 text-3xl text-zinc-500 cursor-pointer" />,
                    ]}
                    name={["Tasks", "Employees"]}
                />
                <SectionMenu
                    header="Notification"
                    element={[
                        <HiOutlineMail className="relative top-2 text-3xl text-zinc-500 cursor-pointer" />,
                        <BiMessageAltDetail className="relative top-2 text-3xl text-zinc-500 cursor-pointer" />,
                        <BiBell className="relative top-2 text-3xl text-zinc-500 cursor-pointer" />,
                    ]}
                    name={["MailBox", "Message", "Notification"]}
                />
                <SectionMenu
                    header="Other"
                    element={[
                        <HiOutlineSun className="relative top-2 text-3xl text-zinc-500 cursor-pointer" />,
                        <BiHeart className="relative top-2 text-3xl text-zinc-500 cursor-pointer" />,
                    ]}
                    name={["Dark Mode", "GoodJob Note"]}
                />
            </div>
            <div className="flex gap-3 items-center h-16">
                <img
                    src="https://vtubie.com/wp-content/uploads/2020/12/041220201607077946.png"
                    alt="profile photo"
                    className="w-12 h-12 rounded-full"
                />
                <div className="relative top-1">
                    <h1 className="text-base font-bold text-zinc-700">
                        Kantapon
                    </h1>
                    <p className="relative bottom-2 text-zinc-400">Junior</p>
                </div>
            </div>
        </nav>
    );
}
