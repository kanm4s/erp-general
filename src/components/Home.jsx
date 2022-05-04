import { BiTask } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

export default function Home() {
    return (
        <div>
            <nav className="w-64 bg-neutral-100 h-screen py-20 pl-10 flex flex-col justify-between">
                <h1 className="text-5xl font-bold overflow-hidden text-teal-600 cursor-pointer">
                    ERP
                </h1>
                <div className="all-section-menu grow mt-20">
                    <div className="section-menu mb-10">
                        <h3 className="menu-header font-bold text-2xl mb-3 text-zinc-700 cursor-default">
                            Quick Menu
                        </h3>
                        <div className="relative left-3 menu-item flex items-baseline mb-2">
                            <BiTask className="relative top-2 text-3xl text-zinc-700 cursor-pointer" />
                            <h1 className="text-lg pl-3 text-zinc-700 cursor-pointer">
                                Tasks
                            </h1>
                        </div>
                        <div className="relative left-3 menu-item flex items-baseline mb-2">
                            <FaRegUser className="relative top-2 text-3xl text-zinc-700 cursor-pointer" />
                            <h1 className="text-lg pl-3 text-zinc-700 cursor-pointer">
                                Employees
                            </h1>
                        </div>
                    </div>
                    <div className="section-menu">
                        <h3 className="menu-header font-bold text-2xl mb-3 text-zinc-700 cursor-default">
                            Quick Menu
                        </h3>
                        <div className="relative left-3 menu-item flex items-baseline mb-2">
                            <BiTask className="relative top-2 text-3xl text-zinc-700 cursor-pointer" />
                            <h1 className="text-lg pl-3 text-zinc-700 cursor-pointer">
                                Tasks
                            </h1>
                        </div>
                        <div className="relative left-3 menu-item flex items-baseline mb-2">
                            <FaRegUser className="relative top-2 text-3xl text-zinc-700 cursor-pointer" />
                            <h1 className="text-lg pl-3 text-zinc-700 cursor-pointer">
                                Employees
                            </h1>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="" alt="profile photo" />
                    <div>
                        <h1>Kantapon</h1>
                        <p>Junior</p>
                    </div>
                </div>
            </nav>
            <main></main>
            <aside></aside>
        </div>
    );
}
