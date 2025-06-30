import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  Brain,
  Phone,
  Mail,
  MapPin,
  Cpu,
  Network,
  Zap,
} from "lucide-react";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    // Listen for custom event to open modal
    const openModal = () => setIsModalOpen(true);
    window.addEventListener("openScheduleCallModal", openModal);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("openScheduleCallModal", openModal);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Enhanced Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-slate-950/90 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Enhanced Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  STAV AI
                </span>
                <span className="text-xs text-slate-400 font-medium tracking-wider">
                  INTELLIGENT SOLUTIONS
                </span>
              </div>
            </Link>

            {/* Enhanced Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-cyan-400 group ${
                    location.pathname === link.path
                      ? "text-cyan-400"
                      : "text-slate-300"
                  }`}
                >
                  {link.name}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transform transition-transform duration-300 ${
                      location.pathname === link.path
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></div>
                </Link>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-xl font-semibold overflow-hidden group transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative">Schedule a Call</span>
                <div className="absolute inset-0 border border-cyan-400/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </button>
            </div>

            {/* Enhanced Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl hover:bg-slate-800/50 transition-colors duration-300 border border-slate-700/50"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-slate-300" />
              ) : (
                <Menu className="w-6 h-6 text-slate-300" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-cyan-400/20 shadow-2xl">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-cyan-400 bg-cyan-400/10 border border-cyan-400/30"
                      : "text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-20">{children}</main>

      {/* Enhanced Footer */}
      <footer className="bg-slate-950 text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Enhanced Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    STAV AI
                  </span>
                  <div className="text-xs text-slate-400 font-medium tracking-wider">
                    INTELLIGENT SOLUTIONS
                  </div>
                </div>
              </div>
              <p className="text-slate-300 mb-8 max-w-md leading-relaxed">
                We build custom AI solutions that automate your operations,
                boost productivity, and reduce costs. Transform your business
                with intelligent automation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-slate-300">+91 6377406473</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-slate-300">help.stavai@gmail.com</span>
                </div>
                <div className="flex items-center space-x-4 group">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                  </div>
                  <span className="text-slate-300">Noida, India</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-cyan-400">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <Zap className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-cyan-400">
                AI Solutions
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center space-x-2 group">
                  <Cpu className="w-3 h-3 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>AI Automation</span>
                </li>
                <li className="flex items-center space-x-2 group">
                  <Network className="w-3 h-3 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>Predictive Analytics</span>
                </li>
                <li className="flex items-center space-x-2 group">
                  <Brain className="w-3 h-3 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>Chatbot Development</span>
                </li>
                <li className="flex items-center space-x-2 group">
                  <Zap className="w-3 h-3 text-cyan-400 opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                  <span>Process Optimization</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 STAV AI. All rights reserved. | Pioneering the future of
              intelligent automation.
            </p>
          </div>
        </div>
      </footer>

      {/* Modal for Schedule a Call */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-slate-900 rounded-2xl p-8 w-full max-w-md shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-cyan-400 text-2xl"
            >
              &times;
            </button>
            {isSent ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">
                  Details submitted!
                </h2>
                <p className="text-slate-300 mb-6">We will contact you soon.</p>
                <button
                  onClick={() => {
                    setIsSent(false);
                    setIsModalOpen(false);
                  }}
                  className="bg-cyan-500 text-white px-6 py-2 rounded-xl font-semibold"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Schedule a Call
                </h2>
                <div>
                  <label className="block text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white"
                    rows={3}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold"
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Layout;
