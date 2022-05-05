import MainNav from "./Nav/MainNav";
import MainSidePostIt from "./SidePostIt/MainSidePostIt";

export default function Home() {
    return (
        <div className="flex">
            <MainNav />
            <main className="flex grow bg-slate-200"></main>
            <MainSidePostIt />
        </div>
    );
}
