import SummaryCards from "@/src/components/dashboard/SummaryCards";
import ChartsSection from "@/src/components/dashboard/ChartsSection";
import RecentActivity from "@/src/components/dashboard/RecentActivity";
import NotificationsPanel from "@/src/components/dashboard/NotificationsPanel";
import { motion } from "framer-motion";
import Button from "../ui/button";
import { Download, Plus } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-4"
      >
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Dashboard Overview</h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium mt-1">Monitor your SaaS performance and key metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Download size={18} />
            Export Data
          </Button>
          <Button className="gap-2">
            <Plus size={18} />
            New Project
          </Button>
        </div>
      </motion.div>

      {/* Stats Cards */}
      <SummaryCards />

      {/* Charts Section */}
      <ChartsSection />

      {/* Bottom Section: Activity & Notifications */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2">
          <RecentActivity />
        </div>
        <div>
          <NotificationsPanel />
        </div>
      </div>
    </div>
  );
}
