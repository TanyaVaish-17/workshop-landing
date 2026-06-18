import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Does my child need any prior coding experience?",
      answer: "No prior experience is needed at all. This workshop is designed from the ground up for complete beginners. Our mentors use fun, visual tools and step-by-step guidance so any child aged 8-14 can follow along confidently.",
    },
    {
      question: "What does my child need to attend the workshop?",
      answer: "Just a laptop or desktop computer with a stable internet connection. All software tools used in the workshop are free and browser-based, so there is nothing extra to install or buy.",
    },
    {
      question: "How are the online sessions conducted?",
      answer: "Sessions are conducted live over video call with a trained mentor. Each session is interactive, project-based, and limited to a small group so every child gets personal attention.",
    },
    {
      question: "Will my child receive a certificate after completing the workshop?",
      answer: "Yes! Every child who completes the workshop and submits their capstone project will receive an official Kidrove certificate of completion that they can add to their portfolio.",
    },
    {
      question: "What is the refund policy if we need to cancel?",
      answer: "We offer a full refund if you cancel at least 7 days before the workshop start date. Cancellations made within 7 days of the start date are eligible for a 50% refund or a free transfer to the next batch.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-emerald-400 tracking-widest uppercase mb-3 block">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Everything parents usually want to know before enrolling their child.
          </p>
        </div>

        <div className="flex flex-col gap-4">

          <div className="glass-card rounded-2xl overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left"
              onClick={() => toggle(0)}
            >
              <span className="text-white font-semibold text-base pr-4" style={{ fontFamily: "Nunito, sans-serif" }}>
                {faqs[0].question}
              </span>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#2A2250] flex items-center justify-center transition-transform duration-300 ${openIndex === 0 ? "rotate-180" : ""}`}>
                <ChevronDown size={16} className="text-purple-400" />
              </div>
            </button>
            {openIndex === 0 && (
              <div className="px-6 pb-5">
                <p className="text-gray-400 text-sm leading-relaxed">{faqs[0].answer}</p>
              </div>
            )}
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left"
              onClick={() => toggle(1)}
            >
              <span className="text-white font-semibold text-base pr-4" style={{ fontFamily: "Nunito, sans-serif" }}>
                {faqs[1].question}
              </span>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#2A2250] flex items-center justify-center transition-transform duration-300 ${openIndex === 1 ? "rotate-180" : ""}`}>
                <ChevronDown size={16} className="text-purple-400" />
              </div>
            </button>
            {openIndex === 1 && (
              <div className="px-6 pb-5">
                <p className="text-gray-400 text-sm leading-relaxed">{faqs[1].answer}</p>
              </div>
            )}
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left"
              onClick={() => toggle(2)}
            >
              <span className="text-white font-semibold text-base pr-4" style={{ fontFamily: "Nunito, sans-serif" }}>
                {faqs[2].question}
              </span>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#2A2250] flex items-center justify-center transition-transform duration-300 ${openIndex === 2 ? "rotate-180" : ""}`}>
                <ChevronDown size={16} className="text-purple-400" />
              </div>
            </button>
            {openIndex === 2 && (
              <div className="px-6 pb-5">
                <p className="text-gray-400 text-sm leading-relaxed">{faqs[2].answer}</p>
              </div>
            )}
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left"
              onClick={() => toggle(3)}
            >
              <span className="text-white font-semibold text-base pr-4" style={{ fontFamily: "Nunito, sans-serif" }}>
                {faqs[3].question}
              </span>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#2A2250] flex items-center justify-center transition-transform duration-300 ${openIndex === 3 ? "rotate-180" : ""}`}>
                <ChevronDown size={16} className="text-purple-400" />
              </div>
            </button>
            {openIndex === 3 && (
              <div className="px-6 pb-5">
                <p className="text-gray-400 text-sm leading-relaxed">{faqs[3].answer}</p>
              </div>
            )}
          </div>

          <div className="glass-card rounded-2xl overflow-hidden">
            <button
              className="w-full flex items-center justify-between px-6 py-5 text-left"
              onClick={() => toggle(4)}
            >
              <span className="text-white font-semibold text-base pr-4" style={{ fontFamily: "Nunito, sans-serif" }}>
                {faqs[4].question}
              </span>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#2A2250] flex items-center justify-center transition-transform duration-300 ${openIndex === 4 ? "rotate-180" : ""}`}>
                <ChevronDown size={16} className="text-purple-400" />
              </div>
            </button>
            {openIndex === 4 && (
              <div className="px-6 pb-5">
                <p className="text-gray-400 text-sm leading-relaxed">{faqs[4].answer}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;