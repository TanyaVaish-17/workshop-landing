import { CheckCircle } from "lucide-react";

const LearningOutcomes = () => {
  const outcomes = [
    {
      title: "Understand AI Fundamentals",
      desc: "Learn what Artificial Intelligence is, how it works, and where it is used in everyday life.",
    },
    {
      title: "Build Your Own Robot",
      desc: "Design and program a basic robot using simple components and beginner-friendly coding tools.",
    },
    {
      title: "Train a Machine Learning Model",
      desc: "Create and train a real ML model using visual tools — no complex math required.",
    },
    {
      title: "Solve Real-World Problems",
      desc: "Apply AI and robotics concepts to build projects that solve actual problems around you.",
    },
    {
      title: "Develop Computational Thinking",
      desc: "Sharpen logical reasoning and problem-solving skills that go far beyond just coding.",
    },
    {
      title: "Present a Capstone Project",
      desc: "Finish the workshop by showcasing your own AI or robotics project to peers and mentors.",
    },
  ];

  return (
    <section id="outcomes" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0D0A1F]">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-pink-400 tracking-widest uppercase mb-3 block">
            What You Will Learn
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>
            Learning <span className="gradient-text">Outcomes</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            By the end of this workshop, your child will walk away with real skills, real projects, and real confidence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="glass-card rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle size={20} className="text-purple-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  {outcomes[0].title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{outcomes[0].desc}</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 hover:border-pink-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle size={20} className="text-pink-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  {outcomes[1].title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{outcomes[1].desc}</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 hover:border-emerald-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle size={20} className="text-emerald-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  {outcomes[2].title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{outcomes[2].desc}</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 hover:border-yellow-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle size={20} className="text-yellow-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  {outcomes[3].title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{outcomes[3].desc}</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle size={20} className="text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  {outcomes[4].title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{outcomes[4].desc}</p>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle size={20} className="text-orange-400" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: "Nunito, sans-serif" }}>
                  {outcomes[5].title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{outcomes[5].desc}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LearningOutcomes;