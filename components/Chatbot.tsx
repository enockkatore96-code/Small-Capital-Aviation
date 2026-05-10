"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "bot";
  content: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hello! Welcome to Small Capital Aviation. How can I assist you with your cargo and logistics needs today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInput("");

    // Simple bot responses
    setTimeout(() => {
      let botResponse =
        "Thank you for your message. Our team will get back to you shortly. For urgent inquiries, please call +254 794606252.";

      const lowerMsg = userMessage.toLowerCase();
      if (lowerMsg.includes("track") || lowerMsg.includes("shipment")) {
        botResponse =
          "To track your shipment, please enter your tracking ID (e.g., SC-7890123) in the tracking section of our dashboard, or provide it here and I'll help you.";
      } else if (lowerMsg.includes("price") || lowerMsg.includes("cost")) {
        botResponse =
          "Our pricing varies based on cargo weight, destination, and service type. Please contact us at kahindienock83@gmail.com for a detailed quote.";
      } else if (
        lowerMsg.includes("contact") ||
        lowerMsg.includes("phone") ||
        lowerMsg.includes("email")
      ) {
        botResponse =
          "You can reach us at:\n- Email: kahindienock83@gmail.com\n- Phone: +254 794606252\n- Location: Nairobi, Kenya (00100)";
      } else if (lowerMsg.includes("service")) {
        botResponse =
          "We offer: Air Cargo, Logistics, Ground Handling, and Compliance services. Would you like details on any specific service?";
      }

      setMessages((prev) => [...prev, { role: "bot", content: botResponse }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-700 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-blue-600 text-white p-5">
              <h3 className="font-bold text-lg">Small Capital Aviation</h3>
              <p className="text-blue-100 text-sm">
                We typically reply within minutes
              </p>
            </div>

            {/* Messages */}
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-blue-600 text-white rounded-br-md"
                        : "bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-white rounded-bl-md"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-zinc-200 dark:border-zinc-800">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type a message..."
                  className="flex-1 px-4 py-3 bg-gray-100 dark:bg-zinc-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSend}
                  className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
