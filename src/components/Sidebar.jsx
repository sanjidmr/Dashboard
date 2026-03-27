import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  BarChart3, 
  ShoppingBag, 
  Users, 
  Package, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  LogOut,
  MessageSquare,
  Bell,
  Sun,
  Moon
} from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/src/lib/utils";
import { useTheme } from "@/src/hooks/useTheme";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: BarChart3, label: "Analytics", path: "/analytics" },
  { icon: ShoppingBag, label: "Orders", path: "/orders" },
  { icon: Users, label: "Customers", path: "/customers" },
  { icon: Package, label: "Products", path: "/products" },
  { icon: MessageSquare, label: "Messages", path: "/messages" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.aside
      initial={false}
      animate={{ width: isCollapsed ? 80 : 260 }}
      className={cn(
        "fixed left-0 top-0 h-screen bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 z-50 flex flex-col transition-colors duration-300",
        isCollapsed ? "items-center" : "items-stretch"
      )}
    >
      {/* Logo */}
      <div className={cn("p-6 flex items-center gap-3", isCollapsed ? "justify-center" : "justify-between")}>
        {!isCollapsed && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
              <ShoppingBag size={18} className="text-white" />
            </div>
            <span className="font-bold text-xl text-zinc-900 dark:text-white tracking-tight">Shop</span>
          </motion.div>
        )}
        {isCollapsed && (
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
             <ShoppingBag size={22} className="text-white" />
          </div>
        )}
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 transition-colors"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1 mt-4 overflow-y-auto scrollbar-hide">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative",
              isActive 
                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" 
                : "text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100"
            )}
          >
            {({ isActive }) => (
              <>
                <item.icon size={22} className={cn(
                  "shrink-0",
                  isActive ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                )} />
                {!isCollapsed && (
                  <span className="font-medium text-sm whitespace-nowrap">{item.label}</span>
                )}
                {isActive && (
                  <motion.div 
                    layoutId="active-pill"
                    className="absolute left-0 w-1 h-6 bg-emerald-500 rounded-r-full"
                  />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 space-y-2">
        <button
          onClick={toggleTheme}
          className={cn(
            "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-200",
            isCollapsed ? "justify-center" : ""
          )}
        >
          {theme === "dark" ? <Sun size={22} /> : <Moon size={22} />}
          {!isCollapsed && <span className="font-medium text-sm">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>}
        </button>

        <NavLink to="/login" className={cn(
          "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-zinc-500 hover:bg-red-50 hover:text-red-600 dark:hover:bg-red-500/10 dark:hover:text-red-400 transition-all duration-200",
          isCollapsed ? "justify-center" : ""
        )}>
          <LogOut size={22} />
          {!isCollapsed && <span className="font-medium text-sm">Logout</span>}
        </NavLink>
      </div>
    </motion.aside>
  );
}
