import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle, Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian phone number"),
});

type FormData = z.infer<typeof schema>;

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setServerError("");
    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        reset();
      } else {
        setServerError(result.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setServerError("Unable to connect to server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="register" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-yellow-400 tracking-widest uppercase mb-3 block">
            Secure Your Spot
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: "Nunito, sans-serif" }}>
            Register <span className="gradient-text">Today</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Fill in the details below and our team will reach out within 24 hours.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-8 sm:p-10">

          {isSuccess ? (
            <div className="text-center py-10">
              <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} className="text-emerald-400" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "Nunito, sans-serif" }}>
                You are Enrolled!
              </h3>
              <p className="text-gray-400 text-base mb-8">
                Thank you for registering. Our team will contact you within 24 hours with next steps.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="btn-primary text-white font-bold px-8 py-3 rounded-full text-sm"
              >
                Register Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} noValidate>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  {...register("name")}
                  className="w-full bg-[#0D0A1F] border border-[#2A2250] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#6C3FE8] transition-colors duration-200 text-sm"
                />
                {errors.name && (
                  <p className="text-red-400 text-xs mt-2">{errors.name.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  {...register("email")}
                  className="w-full bg-[#0D0A1F] border border-[#2A2250] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#6C3FE8] transition-colors duration-200 text-sm"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs mt-2">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your 10-digit phone number"
                  {...register("phone")}
                  className="w-full bg-[#0D0A1F] border border-[#2A2250] rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#6C3FE8] transition-colors duration-200 text-sm"
                />
                {errors.phone && (
                  <p className="text-red-400 text-xs mt-2">{errors.phone.message}</p>
                )}
              </div>

              {serverError && (
                <div className="mb-6 bg-red-500/10 border border-red-500/30 rounded-xl px-4 py-3">
                  <p className="text-red-400 text-sm">{serverError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary text-white font-bold py-4 rounded-xl text-base flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Enroll Now — Rs. 2,999"
                )}
              </button>

              <p className="text-center text-gray-600 text-xs mt-4">
                By registering, you agree to our Terms of Service and Privacy Policy.
              </p>

            </form>
          )}

        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;