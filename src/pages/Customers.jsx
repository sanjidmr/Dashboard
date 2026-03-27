import { motion } from "framer-motion";
import { Search, Filter, MoreHorizontal, Mail, Phone, MapPin, ExternalLink, UserPlus } from "lucide-react";
import { useState } from "react";
import Button from "../ui/button";
import Modal from "../ui/Modal";
import { cn } from "@/src/lib/utils";

const customers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+1 234 567 890", location: "New York, USA", orders: 12, spent: "$2,450.00", status: "Active", avatar: "https://picsum.photos/seed/john/100/100" },
  { id: 2, name: "Sarah Smith", email: "sarah@example.com", phone: "+1 987 654 321", location: "London, UK", orders: 8, spent: "$1,200.00", status: "Active", avatar: "https://picsum.photos/seed/sarah/100/100" },
  { id: 3, name: "Mike Johnson", email: "mike@example.com", phone: "+1 555 444 333", location: "Berlin, Germany", orders: 3, spent: "$450.00", status: "Inactive", avatar: "https://picsum.photos/seed/mike/100/100" },
  { id: 4, name: "Emma Wilson", email: "emma@example.com", phone: "+1 111 222 333", location: "Paris, France", orders: 15, spent: "$3,200.00", status: "Active", avatar: "https://picsum.photos/seed/emma/100/100" },
  { id: 5, name: "David Brown", email: "david@example.com", phone: "+1 444 555 666", location: "Toronto, Canada", orders: 5, spent: "$890.00", status: "Active", avatar: "https://picsum.photos/seed/david/100/100" },
  { id: 6, name: "Lisa Green", email: "lisa@example.com", phone: "+1 777 888 999", location: "Sydney, Australia", orders: 2, spent: "$150.00", status: "Inactive", avatar: "https://picsum.photos/seed/lisa/100/100" },
];

export default function Customers() {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Customers</h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium mt-1">Manage your customer relationships and data.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Filter size={18} />
            Filter
          </Button>
          <Button className="gap-2">
            <UserPlus size={18} />
            Add Customer
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-zinc-100 dark:border-zinc-900">
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search customers by name, email..." 
              className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl pl-11 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50/50 dark:bg-zinc-900/50 border-b border-zinc-100 dark:border-zinc-900">
                <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Customer</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Orders</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Total Spent</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-wider">Location</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-400 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100 dark:divide-zinc-900">
              {customers.map((customer, i) => (
                <motion.tr 
                  key={customer.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="group hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors cursor-pointer"
                  onClick={() => setSelectedCustomer(customer)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src={customer.avatar} 
                        alt={customer.name} 
                        className="w-10 h-10 rounded-xl object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <p className="text-sm font-semibold text-zinc-900 dark:text-white">{customer.name}</p>
                        <p className="text-xs text-zinc-500">{customer.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={cn(
                      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                      customer.status === "Active" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" : "bg-zinc-50 text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600"
                    )}>
                      <div className={cn("w-1.5 h-1.5 rounded-full", customer.status === "Active" ? "bg-emerald-500" : "bg-zinc-400")} />
                      {customer.status}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">{customer.orders}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-bold text-zinc-900 dark:text-white">{customer.spent}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-zinc-500">{customer.location}</span>
                  </td>
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
      </div>

      {/* Customer Profile Modal */}
      <Modal 
        isOpen={!!selectedCustomer} 
        onClose={() => setSelectedCustomer(null)} 
        title="Customer Profile"
        className="max-w-md"
      >
        {selectedCustomer && (
          <div className="space-y-8">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-3xl bg-emerald-500 p-1 mb-4">
                <img 
                  src={selectedCustomer.avatar} 
                  alt={selectedCustomer.name} 
                  className="w-full h-full rounded-[20px] object-cover border-4 border-white dark:border-zinc-950"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">{selectedCustomer.name}</h3>
              <p className="text-zinc-500 font-medium">{selectedCustomer.email}</p>
              <div className={cn(
                "mt-3 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest",
                selectedCustomer.status === "Active" ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400" : "bg-zinc-50 text-zinc-400 dark:bg-zinc-900 dark:text-zinc-600"
              )}>
                {selectedCustomer.status}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Total Orders</p>
                <p className="text-xl font-bold text-zinc-900 dark:text-white">{selectedCustomer.orders}</p>
              </div>
              <div className="p-4 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-1">Total Spent</p>
                <p className="text-xl font-bold text-zinc-900 dark:text-white">{selectedCustomer.spent}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Email Address</p>
                  <p className="text-sm font-semibold">{selectedCustomer.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Phone Number</p>
                  <p className="text-sm font-semibold">{selectedCustomer.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Location</p>
                  <p className="text-sm font-semibold">{selectedCustomer.location}</p>
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="flex-1 gap-2">
                <Mail size={16} />
                Message
              </Button>
              <Button className="flex-1 gap-2">
                <ExternalLink size={16} />
                View Full Profile
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
