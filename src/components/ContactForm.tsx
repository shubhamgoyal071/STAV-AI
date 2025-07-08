import React, { useState } from "react";
import {
  Send,
  CheckCircle,
  Phone,
  Mail,
  Calendar,
  Sparkles,
  Zap,
} from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
    timeline: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const endpoint = "https://sheetdb.io/api/v1/vstilkmjtiuco";
    const data = {
      data: {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        budget: formData.budget,
        timeline: formData.timeline,
      },
    };
    try {
      await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      alert("There was an error submitting the form. Please try again.");
    }
  };

  if (isSubmitted) {
    return (
      <section
        className="py-24 bg-slate-950 relative overflow-hidden"
        data-aos="fade-up"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl rounded-3xl p-16 border border-green-400/30">
            <div className="relative">
              <CheckCircle className="w-20 h-20 text-green-400 mx-auto mb-8" />
              <div className="absolute inset-0 w-20 h-20 bg-green-400 rounded-full blur-lg opacity-30 mx-auto animate-pulse"></div>
            </div>

            <h2 className="text-4xl font-bold text-white mb-6">
              Thank You for Your Interest!
            </h2>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              We've received your inquiry and will get back to you within 24
              hours to schedule your free consultation.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="relative bg-gradient-to-r from-green-500 to-emerald-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg overflow-hidden group transition-all duration-500 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative">Send Another Message</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-24 bg-slate-950 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-purple-950"></div>
      <div className="absolute top-0 left-1/4 w-[28rem] h-[28rem] bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-[22rem] h-[22rem] bg-gradient-to-r from-purple-400/10 via-pink-500/10 to-cyan-400/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contact Info */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-400/40 rounded-full px-8 py-4 mb-10 shadow-lg hover:border-cyan-300/60 transition-all duration-500">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-sm font-medium tracking-wide">
                GET IN TOUCH
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 drop-shadow-[0_2px_12px_rgba(0,255,255,0.10)]">
              Let's Discuss Your
              <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_2px_12px_rgba(0,255,255,0.10)]">
                AI Transformation
              </span>
            </h2>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed">
              Ready to revolutionize your business with AI? Schedule a free
              discovery call to explore how our solutions can drive efficiency
              and growth.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-10">
              <div className="flex items-center space-x-4 group">
                <div className="relative p-4 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 backdrop-blur-xl rounded-2xl border border-cyan-400/40 group-hover:border-cyan-400/60 transition-all duration-500 shadow-lg">
                  <Phone className="w-6 h-6 text-cyan-400" />
                  <div className="absolute inset-0 bg-cyan-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div>
                  <div className="font-semibold text-white">Phone</div>
                  <div className="text-slate-300">+91 6377406473</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="relative p-4 bg-gradient-to-br from-purple-500/30 to-pink-500/30 backdrop-blur-xl rounded-2xl border border-purple-400/40 group-hover:border-purple-400/60 transition-all duration-500 shadow-lg">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <div className="absolute inset-0 bg-purple-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-slate-300">help.stavai@gmail.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="relative p-4 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 backdrop-blur-xl rounded-2xl border border-emerald-400/40 group-hover:border-emerald-400/60 transition-all duration-500 shadow-lg">
                  <Calendar className="w-6 h-6 text-emerald-400" />
                  <div className="absolute inset-0 bg-emerald-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div>
                  <div className="font-semibold text-white">Location</div>
                  <div className="text-slate-300">Noida, India</div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/60 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/30 shadow-lg">
              <h3 className="font-bold text-white mb-6 flex items-center">
                <Zap className="w-5 h-5 text-cyan-400 mr-2" />
                What You'll Get:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-4 flex-shrink-0" />
                  Free 30-minute strategy consultation
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-4 flex-shrink-0" />
                  Custom AI solution roadmap
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-4 flex-shrink-0" />
                  ROI analysis and timeline estimate
                </li>
                <li className="flex items-center text-slate-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-4 flex-shrink-0" />
                  No commitment required
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/60 backdrop-blur-xl rounded-3xl p-10 border border-cyan-400/30 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-300 mb-3"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-800/60 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white placeholder-slate-400"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-300 mb-3"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-800/60 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white placeholder-slate-400"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-300 mb-3"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-800/60 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white placeholder-slate-400"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-300 mb-3"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-800/60 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white placeholder-slate-400"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="budget"
                    className="block text-sm font-medium text-slate-300 mb-3"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-800/60 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white"
                  >
                    <option value="">Select budget range</option>
                    <option value="15k-25k">₹15k - ₹25k</option>
                    <option value="25k-50k">₹25k - ₹50k</option>
                    <option value="50k-1L">₹50k - ₹1L</option>
                    <option value="1L+">₹1L+</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-sm font-medium text-slate-300 mb-3"
                  >
                    Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-slate-800/60 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white"
                  >
                    <option value="">Select timeline</option>
                    <option value="asap">ASAP</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months+">6+ months</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-300 mb-3"
                >
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-slate-800/60 border border-slate-600 rounded-xl focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all duration-300 text-white placeholder-slate-400"
                  placeholder="Describe your business challenges and how AI automation could help..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="relative w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-5 rounded-2xl font-semibold text-lg overflow-hidden group transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center space-x-3"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative">Schedule Free Consultation</span>
                <Send className="w-5 h-5 relative" />
                <div className="absolute inset-0 border border-cyan-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
