import React from "react";
import {
  ArrowRight,
  Play,
  Zap,
  TrendingUp,
  Bot,
  Sparkles,
  Cpu,
  Network,
} from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-aos="fade-up"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%2306b6d4%22 fill-opacity=%220.12%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-70 animate-pulse"></div>

        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-36 h-36 border-2 border-cyan-400/30 rounded-lg rotate-45 animate-spin-slow shadow-cyan-500/20 shadow-2xl"></div>
        <div className="absolute bottom-32 right-16 w-28 h-28 border-2 border-purple-400/30 rounded-full animate-bounce-slow shadow-purple-500/20 shadow-2xl"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 border-2 border-blue-400/30 rotate-12 animate-pulse shadow-blue-500/20 shadow-2xl"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[22rem] h-[22rem] bg-gradient-to-r from-purple-400/20 via-pink-500/20 to-cyan-400/20 rounded-full blur-3xl animate-float-delayed"></div>
      </div>

      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Hero Content */}
        <div
          className="max-w-5xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {/* Futuristic Badge */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-400/40 rounded-full px-8 py-4 mb-10 group shadow-lg hover:border-cyan-300/60 transition-all duration-500">
            <div className="relative">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              <div className="absolute inset-0 w-5 h-5 bg-cyan-400 rounded-full blur-sm opacity-30 animate-ping"></div>
            </div>
            <span className="text-cyan-300 text-sm font-medium tracking-wide">
              Next-Generation AI Intelligence
            </span>
            <Cpu className="w-4 h-4 text-cyan-400 animate-spin-slow" />
          </div>

          {/* Main Headline with Glitch Effect */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight drop-shadow-[0_2px_12px_rgba(0,255,255,0.15)]">
            <span className="block relative">
              AI-Powered
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                AI-Powered
              </div>
            </span>
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_2px_12px_rgba(0,255,255,0.10)]">
              Automation
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl mt-4 text-slate-200 font-light">
              Tailored for Your Business
            </span>
          </h1>

          {/* Enhanced Subtext */}
          <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            We build{" "}
            <span className="text-cyan-400 font-medium">
              custom AI solutions
            </span>{" "}
            that automate your operations, boost productivity, and reduce costs.
            Transform your business with
            <span className="text-purple-400 font-medium">
              {" "}
              intelligent automation
            </span>
            .
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 mb-16">
            <button
              className="group relative bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-white px-12 py-6 rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-cyan-400/30"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("openScheduleCallModal"))
              }
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-300 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative flex items-center space-x-3">
                <span>Schedule a Free Call</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
              </div>
              <div className="absolute inset-0 border border-cyan-300/60 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>

          {/* Enhanced Stats with Animations */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="group text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 hover:border-green-400/60 transition-all duration-500 hover:transform hover:scale-110 shadow-green-400/10">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <TrendingUp className="w-10 h-10 text-green-400" />
                  <div className="absolute inset-0 w-10 h-10 bg-green-400 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-500">
                85%
              </div>
              <div className="text-slate-400 font-medium">Cost Reduction</div>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 hover:border-yellow-400/60 transition-all duration-500 hover:transform hover:scale-110 shadow-yellow-400/10">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <Zap className="w-10 h-10 text-yellow-400" />
                  <div className="absolute inset-0 w-10 h-10 bg-yellow-400 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors duration-500">
                3x
              </div>
              <div className="text-slate-400 font-medium">
                Faster Processing
              </div>
            </div>

            <div className="group text-center p-6 rounded-2xl bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-110 shadow-cyan-400/10">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  <Bot className="w-10 h-10 text-cyan-400" />
                  <div className="absolute inset-0 w-10 h-10 bg-cyan-400 rounded-full blur-lg opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                </div>
              </div>
              <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-500">
                24/7
              </div>
              <div className="text-slate-400 font-medium">Automation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-36 h-36 bg-purple-400/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-20 w-20 h-20 bg-blue-400/20 rounded-full blur-2xl animate-pulse delay-500"></div>

      {/* Network Connections */}
      <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping delay-700"></div>
      <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping delay-1000"></div>
    </section>
  );
};

export default HeroSection;
