import { motion } from "framer-motion";
import { Bell, UserPlus, ShoppingCart, CreditCard, MessageSquare, Settings, Trash2, CheckCircle2 } from "lucide-react";
import { cn } from "@/src/lib/utils";
import Button from "../ui/button";

const notifications = [
  { id: 1, title: "New User Registered", description: "Sarah Smith created a new account.", time: "2 mins ago", icon: UserPlus, color: "blue", isRead: false },
  { id: 2, title: "Order Placed", description: "New order #ORD-1234 received.", time: "15 mins ago", icon: ShoppingCart, color: "emerald", isRead: false },
  { id: 3, title: "Payment Successful", description: "Payment of $240.00 confirmed.", time: "1 hour ago", icon: CreditCard, color: "purple", isRead: true },
  { id: 4, title: "New Message", description: "You have a new support ticket.", time: "3 hours ago", icon: MessageSquare, color: "orange", isRead: true },
  { id: 5, title: "System Update", description: "Shop Dashboard v2.4 is now live.", time: "1 day ago", icon: Settings, color: "zinc", isRead: true },
  { id: 6, title: "Security Alert", description: "New login from a new device.", time: "2 days ago", icon: Bell, color: "red", isRead: true },
];

export default function Notifications() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Notifications</h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium mt-1">Stay updated with your SaaS activity and alerts.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <CheckCircle2 size={18} />
            Mark all as read
          </Button>
          <Button variant="danger" className="gap-2">
            <Trash2 size={18} />
            Clear all
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
        <div className="divide-y divide-zinc-100 dark:divide-zinc-900">
          {notifications.map((notif, i) => (
            <motion.div
              key={notif.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "p-6 flex gap-4 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group cursor-pointer",
                !notif.isRead && "bg-emerald-50/20 dark:bg-emerald-500/5"
              )}
            >
              <div className={cn(
                "shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm",
                notif.color === "blue" ? "bg-blue-50 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400" :
                notif.color === "emerald" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" :
                notif.color === "purple" ? "bg-purple-50 text-purple-600 dark:bg-purple-500/10 dark:text-purple-400" :
                notif.color === "orange" ? "bg-orange-50 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400" :
                notif.color === "red" ? "bg-red-50 text-red-600 dark:bg-red-500/10 dark:text-red-400" :
                "bg-zinc-50 text-zinc-600 dark:bg-zinc-900 dark:text-zinc-400"
              )}>
                <notif.icon size={24} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white truncate">{notif.title}</h4>
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider">{notif.time}</span>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">{notif.description}</p>
                {!notif.isRead && (
                  <div className="mt-3 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">New</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 rounded-xl hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
                  <CheckCircle2 size={18} />
                </button>
                <button className="p-2 rounded-xl hover:bg-red-100 dark:hover:bg-red-500/10 text-zinc-400 hover:text-red-500 transition-colors">
                  <Trash2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
