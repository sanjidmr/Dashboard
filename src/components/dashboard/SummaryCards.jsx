import { motion } from "framer-motion";
import { DollarSign, Users, ShoppingCart, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/src/lib/utils";

const stats = [
  {
    title: "Total Revenue",
    value: "$124,592.00",
    change: "+12.5%",
    isPositive: true,
    icon: DollarSign,
    color: "emerald"
  },
  {
    title: "Total Users",
    value: "14,231",
    change: "+8.2%",
    isPositive: true,
    icon: Users,
    color: "blue"
  },
  {
    title: "Total Orders",
    value: "2,845",
    change: "-3.1%",
    isPositive: false,
    icon: ShoppingCart,
    color: "orange"
  },
  {
    title: "Growth Rate",
    value: "24.8%",
    change: "+4.3%",
    isPositive: true,
    icon: TrendingUp,
    color: "purple"
  }
];

export default function SummaryCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white dark:bg-zinc-950 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={cn(
              "p-3 rounded-2xl transition-colors duration-300",
              stat.color === "emerald" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" :
              stat.color === "blue" ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400" :
              stat.color === "orange" ? "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400" :
              "bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400"
            )}>
              <stat.icon size={24} />
            </div>
            <div className={cn(
              "flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full",
              stat.isPositive 
                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" 
                : "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
            )}>
              {stat.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              {stat.change}
            </div>
          </div>
          <div>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium mb-1">{stat.title}</p>
            <h3 className="text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">{stat.value}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
