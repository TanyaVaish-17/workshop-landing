import { Users, Clock, Monitor, CalendarDays, Tag } from "lucide-react";

const WorkshopDetails = () => {
  return (
    <section id="details" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-purple-400 tracking-widest uppercase mb-3 block">
            Workshop Details
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>
            Everything You Need to <span className="gradient-text">Know</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            A structured, beginner-friendly program designed to spark curiosity and build real skills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:border-[#6C3FE8] transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
              <Users size={24} className="text-purple-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Age Group</p>
              <p className="text-xl font-bold text-white" style={{ fontFamily: "Nunito, sans-serif" }}>8 - 14 Years</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:border-[#6C3FE8] transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
              <Clock size={24} className="text-pink-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Duration</p>
              <p className="text-xl font-bold text-white" style={{ fontFamily: "Nunito, sans-serif" }}>4 Weeks</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:border-[#6C3FE8] transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
              <Monitor size={24} className="text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Mode</p>
              <p className="text-xl font-bold text-white" style={{ fontFamily: "Nunito, sans-serif" }}>Online</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:border-[#6C3FE8] transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
              <Tag size={24} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Fee</p>
              <p className="text-xl font-bold text-white" style={{ fontFamily: "Nunito, sans-serif" }}>Rs. 2,999</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:border-[#6C3FE8] transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <CalendarDays size={24} className="text-blue-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Start Date</p>
              <p className="text-xl font-bold text-white" style={{ fontFamily: "Nunito, sans-serif" }}>15 July 2026</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 flex items-center gap-5 hover:border-[#6C3FE8] transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center flex-shrink-0">
              <Tag size={24} className="text-orange-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-1">Category</p>
              <p className="text-xl font-bold text-white" style={{ fontFamily: "Nunito, sans-serif" }}>AI and Robotics</p>
            </div>
          </div>

        </div>

        <div className="mt-12 rounded-2xl p-8 text-center" style={{ background: "linear-gradient(135deg, rgba(108,63,232,0.15), rgba(236,72,153,0.15))", border: "1px solid rgba(108,63,232,0.3)" }}>
          <p className="text-white text-lg font-semibold mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
            Seats are filling up fast!
          </p>
          <p className="text-gray-400 text-sm mb-6">
            Only a limited number of seats are available. Secure your child's spot today.
          </p>
          <a href="#register" className="btn-primary text-white font-bold px-8 py-3 rounded-full text-sm inline-block">
            Reserve a Seat Now
          </a>
        </div>

      </div>
    </section>
  );
};

export default WorkshopDetails;