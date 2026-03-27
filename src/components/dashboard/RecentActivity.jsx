import { motion } from "framer-motion";
import { MoreHorizontal, ExternalLink, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { cn } from "@/src/lib/utils";

const transactions = [
  {
    id: "ORD-1234",
    customer: "John Doe",
    email: "john@example.com",
    amount: "$240.00",
    status: "Completed",
    date: "Mar 24, 2026",
    avatar: "https://picsum.photos/seed/john/100/100"
  },
  {
    id: "ORD-1235",
    customer: "Sarah Smith",
    email: "sarah@example.com",
    amount: "$1,200.00",
    status: "Pending",
    date: "Mar 23, 2026",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: "ORD-1236",
    customer: "Mike Johnson",
    email: "mike@example.com",
    amount: "$45.00",
    status: "Cancelled",
    date: "Mar 22, 2026",
    avatar: "https://picsum.photos/seed/mike/100/100"
  },
  {
    id: "ORD-1237",
    customer: "Emma Wilson",
    email: "emma@example.com",
    amount: "$320.00",
    status: "Completed",
    date: "Mar 21, 2026",
    avatar: "https://picsum.photos/seed/emma/100/100"
  },
  {
    id: "ORD-1238",
    customer: "David Brown",
    email: "david@example.com",
    amount: "$89.00",
    status: "Completed",
    date: "Mar 20, 2026",
    avatar: "https://picsum.photos/seed/david/100/100"
  }
];

export default function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-white dark:bg-zinc-950 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm mt-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Recent Transactions</h3>
        <button className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1">
          View All <ExternalLink size={14} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-zinc-100 dark:border-zinc-900">
              <th className="pb-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Customer</th>
              <th className="pb-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Order ID</th>
              <th className="pb-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Amount</th>
              <th className="pb-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Status</th>
              <th className="pb-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Date</th>
              <th className="pb-4 text-xs font-bold text-zinc-400 uppercase tracking-wider text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900">
            {transactions.map((tx) => (
              <tr key={tx.id} className="group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors">
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={tx.avatar} 
                      alt={tx.customer} 
                      className="w-10 h-10 rounded-xl object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-white">{tx.customer}</p>
                      <p className="text-xs text-zinc-500">{tx.email}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <span className="text-sm font-medium text-zinc-600 dark:text-zinc-400">{tx.id}</span>
                </td>
                <td className="py-4">
                  <span className="text-sm font-bold text-zinc-900 dark:text-white">{tx.amount}</span>
                </td>
                <td className="py-4">
                  <div className={cn(
                    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold",
                    tx.status === "Completed" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" :
                    tx.status === "Pending" ? "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400" :
                    "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400"
                  )}>
                    {tx.status === "Completed" && <CheckCircle2 size={14} />}
                    {tx.status === "Pending" && <Clock size={14} />}
                    {tx.status === "Cancelled" && <AlertCircle size={14} />}
                    {tx.status}
                  </div>
                </td>
                <td className="py-4">
                  <span className="text-sm text-zinc-500">{tx.date}</span>
                </td>
                <td className="py-4 text-right">
                  <button className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
