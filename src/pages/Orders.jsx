import { motion } from "framer-motion";
import { Search, Filter, ChevronLeft, ChevronRight, MoreHorizontal, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import Button from "../ui/button";
import { cn } from "@/src/lib/utils";

const orders = [
  { id: "ORD-1234", customer: "John Doe", email: "john@example.com", amount: "$240.00", status: "Completed", date: "Mar 24, 2026" },
  { id: "ORD-1235", customer: "Sarah Smith", email: "sarah@example.com", amount: "$1,200.00", status: "Pending", date: "Mar 23, 2026" },
  { id: "ORD-1236", customer: "Mike Johnson", email: "mike@example.com", amount: "$45.00", status: "Cancelled", date: "Mar 22, 2026" },
  { id: "ORD-1237", customer: "Emma Wilson", email: "emma@example.com", amount: "$320.00", status: "Completed", date: "Mar 21, 2026" },
  { id: "ORD-1238", customer: "David Brown", email: "david@example.com", amount: "$89.00", status: "Completed", date: "Mar 20, 2026" },
  { id: "ORD-1239", customer: "Lisa Green", email: "lisa@example.com", amount: "$150.00", status: "Pending", date: "Mar 19, 2026" },
  { id: "ORD-1240", customer: "Tom Harris", email: "tom@example.com", amount: "$540.00", status: "Completed", date: "Mar 18, 2026" },
  { id: "ORD-1241", customer: "Anna White", email: "anna@example.com", amount: "$210.00", status: "Completed", date: "Mar 17, 2026" },
];

export default function Orders() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Orders Management</h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium mt-1">Manage and track all your customer orders.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Filter size={18} />
            Filter
          </Button>
          <Button className="gap-2">
            Export Orders
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-zinc-100 dark:border-zinc-900 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search orders, customers..." 
              className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl pl-11 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-zinc-400 uppercase tracking-wider">Show:</span>
            <select className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-bold rounded-xl px-3 py-1.5 outline-none text-zinc-600 dark:text-zinc-400">
              <option>All Orders</option>
              <option>Completed</option>
              <option>Pending</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/50 border-b border-zinc-100 dark:border-zinc-900">
                <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Order ID</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900">
              {orders.map((order, i) => (
                <motion.tr 
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">{order.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-zinc-900 dark:text-white">{order.customer}</span>
                      <span className="text-xs text-zinc-500">{order.email}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">{order.amount}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      order.status === "Completed" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" :
                      order.status === "Pending" ? "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400" :
                      "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                    )}>
                      {order.status === "Completed" && <CheckCircle2 size={12} />}
                      {order.status === "Pending" && <Clock size={12} />}
                      {order.status === "Cancelled" && <AlertCircle size={12} />}
                      {order.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-zinc-500">{order.date}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-zinc-100 dark:border-zinc-900 flex items-center justify-between">
          <p className="text-sm font-medium text-zinc-500">Showing 1 to 8 of 42 orders</p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-zinc-900 dark:hover:text-white disabled:opacity-50" disabled>
              <ChevronLeft size={18} />
            </button>
            <button className="w-10 h-10 rounded-xl bg-emerald-500 text-white font-bold text-sm">1</button>
            <button className="w-10 h-10 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white font-bold text-sm">2</button>
            <button className="w-10 h-10 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white font-bold text-sm">3</button>
            <button className="p-2 rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-400 hover:text-zinc-900 dark:hover:text-white">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
