import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import Button from "../ui/button";
import { Download, Filter, Calendar } from "lucide-react";

const data = [
  { name: "Mon", users: 4000, revenue: 2400 },
  { name: "Tue", users: 3000, revenue: 1398 },
  { name: "Wed", users: 2000, revenue: 9800 },
  { name: "Thu", users: 2780, revenue: 3908 },
  { name: "Fri", users: 1890, revenue: 4800 },
  { name: "Sat", users: 2390, revenue: 3800 },
  { name: "Sun", users: 3490, revenue: 4300 },
];

export default function Analytics() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Analytics</h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium mt-1">Deep dive into your business metrics and trends.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Calendar size={18} />
            Mar 2026
          </Button>
          <Button variant="outline" className="gap-2">
            <Filter size={18} />
            Filter
          </Button>
          <Button className="gap-2">
            <Download size={18} />
            Export CSV
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Growth */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-zinc-950 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
        >
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Revenue Growth</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#18181b", border: "none", borderRadius: "12px", color: "#fff" }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* User Acquisition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white dark:bg-zinc-950 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
        >
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">User Acquisition</h3>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "#9ca3af" }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: "#18181b", border: "none", borderRadius: "12px", color: "#fff" }}
                />
                <Bar dataKey="users" fill="#3b82f6" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>

      {/* Detailed Reports Table Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-zinc-950 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm"
      >
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6">Conversion Metrics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "Click-Through Rate", value: "4.2%", change: "+0.5%" },
            { label: "Conversion Rate", value: "2.8%", change: "+0.2%" },
            { label: "Bounce Rate", value: "32.4%", change: "-1.2%" },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-1">{item.label}</p>
              <div className="flex items-end justify-between">
                <h4 className="text-2xl font-bold text-zinc-900 dark:text-white">{item.value}</h4>
                <span className={item.change.startsWith("+") ? "text-emerald-500 text-xs font-bold" : "text-red-500 text-xs font-bold"}>
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
