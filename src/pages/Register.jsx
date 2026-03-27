import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight,  User } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../ui/button";
import { FaGithub,FaChrome  } from "react-icons/fa";


export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex items-center justify-center p-6 transition-colors duration-300">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-xl shadow-emerald-500/20 mb-6">
            <div className="w-8 h-8 bg-white rounded-md rotate-45" />
          </div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Create Account</h1>
          <p className="text-zinc-500 dark:text-zinc-400 font-medium mt-2">Start your 14-day free trial today.</p>
        </div>

        {/* Register Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-xl"
        >
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Full Name</label>
              <div className="relative">
                <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input 
                  type="text" 
                  required
                  placeholder="Alex Rivera" 
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Email Address</label>
              <div className="relative">
                <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input 
                  type="email" 
                  required
                  placeholder="alex@example.com" 
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700 dark:text-zinc-300">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400" />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••" 
                  className="w-full bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-2xl pl-12 pr-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <input type="checkbox" required className="w-4 h-4 rounded border-zinc-300 text-emerald-500 focus:ring-emerald-500" />
              <label className="text-xs text-zinc-500">I agree to the <Link to="#" className="text-emerald-500 font-bold hover:underline">Terms of Service</Link> and <Link to="#" className="text-emerald-500 font-bold hover:underline">Privacy Policy</Link></label>
            </div>

            <Button type="submit" className="w-full py-4 text-base" isLoading={isLoading}>
              Create Account <ArrowRight size={18} className="ml-2" />
            </Button>
          </form>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-100 dark:border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-xs font-bold uppercase tracking-widest">
              <span className="bg-white dark:bg-zinc-900 px-4 text-zinc-400">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="gap-2">
              <FaGithub size={18} />
              GitHub
            </Button>
            <Button variant="outline" className="gap-2">
              <FaChrome size={18} />
              Google
            </Button>
          </div>
        </motion.div>

        <p className="text-center text-sm text-zinc-500">
          Already have an account?{" "}
          <Link to="/login" className="font-bold text-emerald-500 hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
}
