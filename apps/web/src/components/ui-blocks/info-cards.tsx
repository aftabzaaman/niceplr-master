import React from "react";
import { 
  BookOpen, 
  Layout, 
  Zap, 
  Download 
} from "lucide-react";

export function InfoCards() {
  const cards = [
    {
      icon: BookOpen,
      title: "E-Books",
      count: "12 Items",
      color: "text-purple-600",
      bg: "bg-purple-100/50",
    },
    {
      icon: Layout,
      title: "Templates",
      count: "24 Items",
      color: "text-purple-600",
      bg: "bg-purple-100/50",
    },
    {
      icon: Zap,
      title: "Courses",
      count: "8 Items",
      color: "text-purple-600",
      bg: "bg-purple-100/50",
    },
    {
      icon: Download,
      title: "Assets",
      count: "45 Items",
      color: "text-purple-600",
      bg: "bg-purple-100/50",
    },
  ];

  return (
    <section className="container mx-auto px-6 py-12 mt-[35px] md:mt-[50px] lg:mt-[100px] relative z-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="group bg-white/70 dark:bg-white/5 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-500"
          >
            <div className={`w-14 h-14 ${card.bg} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}>
              <card.icon className={`w-6 h-6 ${card.color}`} />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#030014] dark:text-white mb-1">{card.title}</h3>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{card.count}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
