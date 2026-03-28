import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/navbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <Sidebar />
      <main className="transition-all duration-300 pl-20 md:pl-[260px]">
        <Navbar />
        <div className="p-6 md:p-8">
          <Outlet/>
        </div>
      </main>
    </div>
  );
}
