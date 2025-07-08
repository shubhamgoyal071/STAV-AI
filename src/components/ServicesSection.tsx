import React from "react";
import {
  Bot,
  BarChart3,
  MessageSquare,
  Cog,
  ArrowRight,
  Cpu,
  Network,
  Zap,
  Sparkles,
} from "lucide-react";

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Process Automation",
      description:
        "Streamline repetitive tasks with intelligent automation that learns and adapts to your business processes.",
      features: [
        "Workflow Optimization",
        "Smart Task Routing",
        "Error Reduction",
      ],
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-400/30",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description:
        "Make data-driven decisions with AI-powered insights that predict trends and identify opportunities.",
      features: [
        "Trend Forecasting",
        "Risk Assessment",
        "Performance Insights",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-400/30",
    },
    {
      icon: MessageSquare,
      title: "Intelligent Chatbots",
      description:
        "Enhance customer experience with AI chatbots that provide 24/7 support and seamless interactions.",
      features: [
        "Natural Language Processing",
        "Multi-platform Integration",
        "Learning Capabilities",
      ],
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-400/30",
    },
    {
      icon: Cog,
      title: "Custom AI Solutions",
      description:
        "Tailored AI implementations designed specifically for your unique business challenges and goals.",
      features: [
        "Bespoke Development",
        "Scalable Architecture",
        "Ongoing Support",
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-400/30",
    },
  ];

  return (
    <section
      className="py-24 bg-slate-950 relative overflow-hidden"
      data-aos="fade-up"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950 to-purple-950"></div>
      <div className="absolute top-0 left-1/4 w-[28rem] h-[28rem] bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 right-1/4 w-[22rem] h-[22rem] bg-gradient-to-r from-purple-400/10 via-pink-500/10 to-cyan-400/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className="text-center mb-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-400/40 rounded-full px-8 py-4 mb-10 shadow-lg hover:border-cyan-300/60 transition-all duration-500">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium tracking-wide">
              AI SOLUTIONS PORTFOLIO
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 drop-shadow-[0_2px_12px_rgba(0,255,255,0.10)]">
            Transform Your Business with
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_2px_12px_rgba(0,255,255,0.10)]">
              Intelligent AI Solutions
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            From automation to analytics, we deliver cutting-edge AI solutions
            that drive efficiency, innovation, and growth across your
            organization.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in-up"
              data-aos-delay={String(200 + index * 100)}
              className={`group relative bg-gradient-to-br ${service.bgColor} backdrop-blur-xl rounded-3xl p-8 border ${service.borderColor} hover:border-opacity-80 transition-all duration-700 transform hover:-translate-y-4 hover:scale-110 shadow-xl hover:shadow-cyan-400/20`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-opacity duration-700`}
              ></div>

              {/* Icon */}
              <div
                className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}
              >
                <service.icon className="w-8 h-8 text-white" />
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-500 drop-shadow-[0_2px_8px_rgba(0,255,255,0.10)]">
                {service.title}
              </h3>
              <p className="text-slate-200 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-slate-200 group-hover:text-slate-100 transition-colors duration-500"
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-4 group-hover:scale-125 transition-transform duration-500`}
                    ></div>
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-30 blur-sm`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative text-center bg-gradient-to-r from-slate-900/60 via-blue-900/60 to-purple-900/60 backdrop-blur-xl rounded-3xl p-16 text-white border border-cyan-400/30 overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-400/10 rounded-full blur-3xl animate-float-delayed"></div>

          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 mb-6">
              <Cpu className="w-6 h-6 text-cyan-400 animate-spin-slow" />
              <Network className="w-6 h-6 text-blue-400 animate-pulse" />
              <Zap className="w-6 h-6 text-purple-400 animate-bounce" />
            </div>

            <h3 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our AI solutions can revolutionize your
              operations and drive unprecedented growth.
            </p>

            <button
              className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-5 rounded-2xl font-semibold text-lg overflow-hidden group transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("openScheduleCallModal"))
              }
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative">Schedule Your Free Consultation</span>
              <div className="absolute inset-0 border border-cyan-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
