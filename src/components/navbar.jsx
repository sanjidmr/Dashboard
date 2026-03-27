import { Search, Bell, Moon, Sun, ChevronDown } from "lucide-react";
import { useTheme } from "@/src/hooks/useTheme";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 transition-colors duration-300">
      <div className="px-6 h-20 flex items-center justify-between">
        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-3 bg-zinc-100 dark:bg-zinc-900 px-4 py-2 rounded-2xl w-96 border border-zinc-200 dark:border-zinc-800 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500/50 transition-all">
          <Search size={18} className="text-zinc-400" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none outline-none text-sm text-zinc-900 dark:text-zinc-100 w-full placeholder:text-zinc-500"
          />
        </div>

        {/* Mobile Search Icon */}
        <div className="md:hidden">
          <button className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500">
            <Search size={20} />
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 transition-colors relative"
          >
            <motion.div
              initial={false}
              animate={{ rotate: theme === "dark" ? 0 : 180, scale: theme === "dark" ? 1 : 0 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Moon size={20} />
            </motion.div>
            <motion.div
              initial={false}
              animate={{ rotate: theme === "light" ? 0 : -180, scale: theme === "light" ? 1 : 0 }}
              className="flex items-center justify-center"
            >
              <Sun size={20} />
            </motion.div>
          </button>

          {/* Notifications */}
          <Link to="/notifications" className="p-2.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 transition-colors relative">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white dark:border-zinc-950" />
          </Link>

          {/* Profile */}
          <Link to="/settings" className="flex items-center gap-3 pl-2 md:pl-4 border-l border-zinc-200 dark:border-zinc-800 ml-2 group">
            <div className="hidden md:block text-right">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors">Alex Rivera</p>
              <p className="text-xs text-zinc-500">Admin</p>
            </div>
            <div className="flex items-center gap-1 p-1 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center text-white font-bold overflow-hidden shadow-sm">
                <img 
                  src="https://picsum.photos/seed/alex/100/100" 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <ChevronDown size={16} className="text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition-colors" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
