import { ArrowRight, Bot, Brain, Sparkles, Calendar, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-pink-600/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <div className="inline-flex items-center gap-2 bg-[#13102B] border border-[#2A2250] rounded-full px-4 py-2 mb-8">
          <Sparkles size={14} className="text-yellow-400" />
          <span className="text-xs font-semibold text-gray-300 tracking-wider uppercase">Summer 2026 — Limited Seats</span>
          <Sparkles size={14} className="text-yellow-400" />
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6" style={{ fontFamily: "Nunito, sans-serif" }}>
          AI and <span className="gradient-text">Robotics</span>
          <br />
          Summer Workshop
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Give your child the superpower of the future. A hands-on, project-based workshop where kids aged 8-14 build real AI models and robots. No experience needed.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <div className="flex items-center gap-2 bg-[#13102B] border border-[#2A2250] rounded-full px-4 py-2">
            <Calendar size={14} className="text-purple-400" />
            <span className="text-sm text-gray-300">Starts 15 July 2026</span>
          </div>
          <div className="flex items-center gap-2 bg-[#13102B] border border-[#2A2250] rounded-full px-4 py-2">
            <Clock size={14} className="text-pink-400" />
            <span className="text-sm text-gray-300">4 Weeks Online</span>
          </div>
          <div className="flex items-center gap-2 bg-[#13102B] border border-[#2A2250] rounded-full px-4 py-2">
            <Bot size={14} className="text-emerald-400" />
            <span className="text-sm text-gray-300">Age 8-14 Years</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a href="#register" className="btn-primary text-white font-bold px-8 py-4 rounded-full text-base flex items-center gap-2">
            Enroll Now — Rs. 2,999
            <ArrowRight size={18} />
          </a>
          <a href="#details" className="text-gray-400 hover:text-white font-medium px-8 py-4 rounded-full border border-[#2A2250] transition-all duration-200 text-base">
            Learn More
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="glass-card rounded-2xl px-6 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <Brain size={18} className="text-purple-400" />
            </div>
            <span className="text-sm font-semibold text-gray-200">Machine Learning</span>
          </div>
          <div className="glass-card rounded-2xl px-6 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-pink-500/10 flex items-center justify-center">
              <Bot size={18} className="text-pink-400" />
            </div>
            <span className="text-sm font-semibold text-gray-200">Robotics</span>
          </div>
          <div className="glass-card rounded-2xl px-6 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-yellow-500/10 flex items-center justify-center">
              <Sparkles size={18} className="text-yellow-400" />
            </div>
            <span className="text-sm font-semibold text-gray-200">Creative AI</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;