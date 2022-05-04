import { BiTask } from "react-icons/bi";
import { FaRegUser } from "react-icons/fa";

export default function Home() {
    return (
        <div>
            <nav>
                <h1 className="logo">ERP</h1>
                <div className="section-menu">
                    <h3 className="menu-header">Quick Menu</h3>
                    <div className="menu-item">
                        <BiTask />
                        <p>Tasks</p>
                    </div>
                    <div className="menu-item">
                        <FaRegUser />
                        <p>Employees</p>
                    </div>
                </div>
            </nav>
            <main></main>
            <aside></aside>
        </div>
    );
}
