import { motion } from "framer-motion";
import { Search, Send, MoreVertical, Phone, Video, Info, Paperclip, Smile, MessageSquare } from "lucide-react";
import { useState } from "react";
import { cn } from "@/src/lib/utils";

const contacts = [
  { id: 1, name: "John Doe", status: "Online", lastMessage: "Hey, how's it going?", time: "2m", avatar: "https://picsum.photos/seed/john/100/100", unread: 2 },
  { id: 2, name: "Sarah Smith", status: "Offline", lastMessage: "The project is ready for review.", time: "15m", avatar: "https://picsum.photos/seed/sarah/100/100", unread: 0 },
  { id: 3, name: "Mike Johnson", status: "Online", lastMessage: "Can we hop on a quick call?", time: "1h", avatar: "https://picsum.photos/seed/mike/100/100", unread: 0 },
  { id: 4, name: "Emma Wilson", status: "Away", lastMessage: "Thanks for the update!", time: "3h", avatar: "https://picsum.photos/seed/emma/100/100", unread: 1 },
  { id: 5, name: "David Brown", status: "Offline", lastMessage: "See you tomorrow.", time: "1d", avatar: "https://picsum.photos/seed/david/100/100", unread: 0 },
];

const messages = [
  { id: 1, sender: "John Doe", text: "Hey Alex, are you available for a quick sync?", time: "10:30 AM", isMe: false },
  { id: 2, sender: "Me", text: "Sure! What's on your mind?", time: "10:32 AM", isMe: true },
  { id: 3, sender: "John Doe", text: "I wanted to discuss the new feature roadmap for Q2.", time: "10:33 AM", isMe: false },
  { id: 4, sender: "John Doe", text: "I've drafted some initial ideas in the shared doc.", time: "10:33 AM", isMe: false },
  { id: 5, sender: "Me", text: "Great, I'll take a look and we can chat in 10 mins.", time: "10:35 AM", isMe: true },
];

export default function Messages() {
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const [message, setMessage] = useState("");

  return (
    <div className="h-[calc(100vh-160px)] flex bg-white dark:bg-zinc-950 rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
      {/* Sidebar */}
      <div className="w-full md:w-80 border-r border-zinc-100 dark:border-zinc-900 flex flex-col">
        <div className="p-6 border-b border-zinc-100 dark:border-zinc-900">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Messages</h2>
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input 
              type="text" 
              placeholder="Search chats..." 
              className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl pl-10 pr-4 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
            />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {contacts.map((contact) => (
            <button
              key={contact.id}
              onClick={() => setActiveContact(contact)}
              className={cn(
                "w-full p-4 flex items-center gap-3 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors border-l-4",
                activeContact.id === contact.id ? "bg-emerald-50/50 dark:bg-emerald-500/5 border-emerald-500" : "border-transparent"
              )}
            >
              <div className="relative">
                <img 
                  src={contact.avatar} 
                  alt={contact.name} 
                  className="w-12 h-12 rounded-xl object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className={cn(
                  "absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-zinc-950",
                  contact.status === "Online" ? "bg-emerald-500" : contact.status === "Away" ? "bg-orange-500" : "bg-zinc-400"
                )} />
              </div>
              <div className="flex-1 text-left min-w-0">
                <div className="flex items-center justify-between mb-0.5">
                  <p className="text-sm font-bold text-zinc-900 dark:text-white truncate">{contact.name}</p>
                  <span className="text-[10px] font-bold text-zinc-400 uppercase">{contact.time}</span>
                </div>
                <p className="text-xs text-zinc-500 truncate">{contact.lastMessage}</p>
              </div>
              {contact.unread > 0 && (
                <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-[10px] font-bold text-white">
                  {contact.unread}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="hidden md:flex flex-1 flex-col bg-zinc-50/30 dark:bg-zinc-900/10">
        {/* Chat Header */}
        <div className="p-4 border-b border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={activeContact.avatar} 
              alt={activeContact.name} 
              className="w-10 h-10 rounded-xl object-cover"
              referrerPolicy="no-referrer"
            />
            <div>
              <p className="text-sm font-bold text-zinc-900 dark:text-white">{activeContact.name}</p>
              <p className="text-xs text-emerald-500 font-bold uppercase tracking-wider">{activeContact.status}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 transition-colors">
              <Phone size={20} />
            </button>
            <button className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 transition-colors">
              <Video size={20} />
            </button>
            <button className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 transition-colors">
              <Info size={20} />
            </button>
            <button className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
          {messages.map((msg) => (
            <div key={msg.id} className={cn("flex flex-col", msg.isMe ? "items-end" : "items-start")}>
              <div className={cn(
                "max-w-[70%] p-4 rounded-2xl text-sm font-medium shadow-sm",
                msg.isMe 
                  ? "bg-emerald-500 text-white rounded-tr-none" 
                  : "bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white border border-zinc-100 dark:border-zinc-900 rounded-tl-none"
              )}>
                {msg.text}
              </div>
              <span className="text-[10px] font-bold text-zinc-400 uppercase mt-1 px-1">{msg.time}</span>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className="p-4 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">
          <form 
            onSubmit={(e) => { e.preventDefault(); setMessage(""); }}
            className="flex items-center gap-3 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl px-4 py-2 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all"
          >
            <button type="button" className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
              <Paperclip size={20} />
            </button>
            <input 
              type="text" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..." 
              className="flex-1 bg-transparent border-none outline-none text-sm text-zinc-900 dark:text-zinc-100 py-2"
            />
            <button type="button" className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors">
              <Smile size={20} />
            </button>
            <button 
              type="submit"
              className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Empty State for Mobile (when no contact selected) */}
      <div className="md:hidden flex-1 flex items-center justify-center p-8 text-center">
        <div className="space-y-4">
          <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 mx-auto">
            <MessageSquare size={32} />
          </div>
          <h3 className="text-lg font-bold text-zinc-900 dark:text-white">Select a chat</h3>
          <p className="text-sm text-zinc-500">Choose a contact from the list to start messaging.</p>
        </div>
      </div>
    </div>
  );
}
