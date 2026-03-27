import { motion } from "framer-motion";
import { User, Bell, Shield, Globe, CreditCard, Moon, Sun, Camera, Save, Settings as SettingsIcon } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/src/hooks/useTheme";
import Button from "../ui/button";
import { cn } from "@/src/lib/utils";

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "security", label: "Security", icon: Shield },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "preferences", label: "Preferences", icon: Globe },
];

export default function Settings() {
  const [activeTab, setActiveTab] = useState("profile");
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Settings</h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium mt-1">Manage your account settings and preferences.</p>
        </div>
        <Button className="gap-2">
          <Save size={18} />
          Save Changes
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Tabs Sidebar */}
        <div className="w-full lg:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-200 group relative",
                activeTab === tab.id 
                  ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" 
                  : "text-zinc-500 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-zinc-900 dark:hover:text-zinc-100"
              )}
            >
              <tab.icon size={20} className={cn(
                "shrink-0",
                activeTab === tab.id ? "text-emerald-600 dark:text-emerald-400" : "text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
              )} />
              <span className="font-bold text-sm whitespace-nowrap">{tab.label}</span>
              {activeTab === tab.id && (
                <motion.div 
                  layoutId="active-settings-pill"
                  className="absolute left-0 w-1 h-6 bg-emerald-500 rounded-r-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="flex-1">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden"
          >
            {activeTab === "profile" && (
              <div className="p-8 space-y-8">
                <div className="flex items-center gap-6">
                  <div className="relative group">
                    <div className="w-24 h-24 rounded-3xl bg-emerald-500 p-1">
                      <img 
                        src="https://picsum.photos/seed/alex/100/100" 
                        alt="Avatar" 
                        className="w-full h-full rounded-[20px] object-cover border-4 border-white dark:border-zinc-950"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <button className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 shadow-lg transition-all group-hover:scale-110">
                      <Camera size={16} />
                    </button>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Profile Photo</h3>
                    <p className="text-sm text-zinc-500 mt-1">Update your profile picture and personal details.</p>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm">Change Photo</Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">Remove</Button>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Full Name</label>
                    <input 
                      type="text" 
                      defaultValue="Alex Rivera" 
                      className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Email Address</label>
                    <input 
                      type="email" 
                      defaultValue="alex@shop.com" 
                      className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Role</label>
                    <input 
                      type="text" 
                      defaultValue="Administrator" 
                      disabled
                      className="w-full bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 text-sm text-zinc-500 cursor-not-allowed"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Location</label>
                    <input 
                      type="text" 
                      defaultValue="San Francisco, CA" 
                      className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Bio</label>
                  <textarea 
                    rows={4} 
                    defaultValue="Product Designer & Developer based in SF. Building the future of SaaS." 
                    className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                  />
                </div>
              </div>
            )}

            {activeTab === "preferences" && (
              <div className="p-8 space-y-8">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Appearance</h3>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400">
                      {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-900 dark:text-white">Dark Mode</p>
                      <p className="text-xs text-zinc-500">Enable dark theme for the dashboard.</p>
                    </div>
                  </div>
                  <button 
                    onClick={toggleTheme}
                    className={cn(
                      "w-12 h-6 rounded-full transition-all relative",
                      theme === "dark" ? "bg-emerald-500" : "bg-zinc-300 dark:bg-zinc-700"
                    )}
                  >
                    <div className={cn(
                      "absolute top-1 w-4 h-4 rounded-full bg-white transition-all",
                      theme === "dark" ? "left-7" : "left-1"
                    )} />
                  </button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white">Language & Region</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Language</label>
                      <select className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all">
                        <option>English (US)</option>
                        <option>Spanish</option>
                        <option>French</option>
                        <option>German</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Timezone</label>
                      <select className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all">
                        <option>(GMT-08:00) Pacific Time</option>
                        <option>(GMT+00:00) UTC</option>
                        <option>(GMT+01:00) Central European Time</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Other tabs placeholders */}
            {activeTab !== "profile" && activeTab !== "preferences" && (
              <div className="p-12 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mb-4">
                  <SettingsIcon size={32} />
                </div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white capitalize">{activeTab} Settings</h3>
                <p className="text-sm text-zinc-500 mt-2">This section is currently being updated. Please check back later.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
