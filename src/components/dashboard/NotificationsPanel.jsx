import { motion } from "framer-motion";
import { UserPlus, ShoppingCart, CreditCard, MessageSquare } from "lucide-react";
import { cn } from "@/src/lib/utils";

const notifications = [
  {
    id: 1,
    title: "New User Registered",
    description: "Sarah Smith created a new account.",
    time: "2 mins ago",
    icon: UserPlus,
    color: "blue"
  },
  {
    id: 2,
    title: "Order Placed",
    description: "New order #ORD-1234 received.",
    time: "15 mins ago",
    icon: ShoppingCart,
    color: "emerald"
  },
  {
    id: 3,
    title: "Payment Successful",
    description: "Payment of $240.00 confirmed.",
    time: "1 hour ago",
    icon: CreditCard,
    color: "purple"
  },
  {
    id: 4,
    title: "New Message",
    description: "You have a new support ticket.",
    time: "3 hours ago",
    icon: MessageSquare,
    color: "orange"
  }
];

export default function NotificationsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.7 }}
      className="bg-white dark:bg-zinc-950 p-6 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm mt-8"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Recent Notifications</h3>
        <button className="text-xs font-bold text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
          Mark all as read
        </button>
      </div>

      <div className="space-y-6">
        {notifications.map((notif) => (
          <div key={notif.id} className="flex gap-4 group cursor-pointer">
            <div className={cn(
              "shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110",
              notif.color === "blue" ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400" :
              notif.color === "emerald" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" :
              notif.color === "purple" ? "bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400" :
              "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400"
            )}>
              <notif.icon size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-bold text-zinc-900 dark:text-white truncate">{notif.title}</p>
                <span className="text-[10px] font-bold text-zinc-400 uppercase">{notif.time}</span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1">{notif.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-8 py-3 rounded-2xl bg-zinc-50 dark:bg-zinc-900 text-sm font-bold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
        View All Notifications
      </button>
    </motion.div>
  );
}
