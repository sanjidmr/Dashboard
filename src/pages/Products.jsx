import { motion } from "framer-motion";
import { Plus, Search, Filter, Edit2, Trash2, Package, Image as ImageIcon } from "lucide-react";
import { useState } from "react";
import Button from "../ui/button";
import Modal from "../ui/Modal";
import { cn } from "@/src/lib/utils";

const products = [
  { id: 1, name: "Premium SaaS Template", category: "Templates", price: "$49.00", stock: 124, status: "Active", image: "https://picsum.photos/seed/saas/400/300" },
  { id: 2, name: "Analytics Dashboard UI", category: "UI Kits", price: "$29.00", stock: 85, status: "Active", image: "https://picsum.photos/seed/ui/400/300" },
  { id: 3, name: "Icon Set Pro", category: "Icons", price: "$19.00", stock: 0, status: "Out of Stock", image: "https://picsum.photos/seed/icons/400/300" },
  { id: 4, name: "React Component Library", category: "Development", price: "$99.00", stock: 42, status: "Active", image: "https://picsum.photos/seed/react/400/300" },
  { id: 5, name: "Marketing Landing Page", category: "Templates", price: "$39.00", stock: 15, status: "Draft", image: "https://picsum.photos/seed/marketing/400/300" },
  { id: 6, name: "Mobile App Wireframes", category: "UI Kits", price: "$25.00", stock: 67, status: "Active", image: "https://picsum.photos/seed/mobile/400/300" },
];

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [view, setView] = useState("grid");

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Products</h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium mt-1">Manage your digital products and inventory.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-zinc-100 dark:bg-zinc-900 p-1 rounded-2xl border border-zinc-200 dark:border-zinc-800">
            <button 
              onClick={() => setView("grid")}
              className={cn("p-2 rounded-xl transition-all", view === "grid" ? "bg-white dark:bg-zinc-800 text-emerald-500 shadow-sm" : "text-zinc-400")}
            >
              <Package size={18} />
            </button>
            <button 
              onClick={() => setView("list")}
              className={cn("p-2 rounded-xl transition-all", view === "list" ? "bg-white dark:bg-zinc-800 text-emerald-500 shadow-sm" : "text-zinc-400")}
            >
              <Filter size={18} />
            </button>
          </div>
          <Button onClick={() => setIsModalOpen(true)} className="gap-2">
            <Plus size={18} />
            Add Product
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:w-96">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl pl-11 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
          />
        </div>
        <div className="flex items-center gap-3">
          <select className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm font-bold rounded-2xl px-4 py-2.5 outline-none text-zinc-600 dark:text-zinc-400">
            <option>All Categories</option>
            <option>Templates</option>
            <option>UI Kits</option>
            <option>Icons</option>
          </select>
          <select className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-sm font-bold rounded-2xl px-4 py-2.5 outline-none text-zinc-600 dark:text-zinc-400">
            <option>Sort by: Newest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Best Selling</option>
          </select>
        </div>
      </div>

      {/* Grid View */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <button className="p-2 rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors">
                  <Edit2 size={16} />
                </button>
                <button className="p-2 rounded-xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md text-zinc-600 dark:text-zinc-400 hover:text-red-500 transition-colors">
                  <Trash2 size={16} />
                </button>
              </div>
              <div className={cn(
                "absolute bottom-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md",
                product.status === "Active" ? "bg-emerald-500/20 text-emerald-400" :
                product.status === "Draft" ? "bg-zinc-500/20 text-zinc-400" :
                "bg-red-500/20 text-red-400"
              )}>
                {product.status}
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-1">{product.category}</p>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white line-clamp-1">{product.name}</h3>
                </div>
                <span className="text-xl font-bold text-zinc-900 dark:text-white">{product.price}</span>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-900">
                <div className="flex items-center gap-2">
                  <Package size={16} className="text-zinc-400" />
                  <span className="text-sm font-medium text-zinc-500">{product.stock} in stock</span>
                </div>
                <Button variant="ghost" size="sm" className="text-emerald-500 hover:text-emerald-600">
                  View Details
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Add Product Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Add New Product"
        className="max-w-2xl"
      >
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Product Name</label>
              <input 
                type="text" 
                placeholder="e.g. Premium UI Kit" 
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Category</label>
              <select className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all">
                <option>Templates</option>
                <option>UI Kits</option>
                <option>Icons</option>
                <option>Development</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Price ($)</label>
              <input 
                type="number" 
                placeholder="0.00" 
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Stock Quantity</label>
              <input 
                type="number" 
                placeholder="0" 
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Description</label>
            <textarea 
              rows={4} 
              placeholder="Describe your product..." 
              className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Product Image</label>
            <div className="border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 flex flex-col items-center justify-center gap-3 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center text-zinc-400 group-hover:text-emerald-500 transition-colors">
                <ImageIcon size={24} />
              </div>
              <div className="text-center">
                <p className="text-sm font-bold text-zinc-900 dark:text-white">Click to upload or drag and drop</p>
                <p className="text-xs text-zinc-500 mt-1">PNG, JPG or GIF (max. 2MB)</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-4">
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
            <Button>Save Product</Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
