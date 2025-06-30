import React from "react";
import {
  Zap,
  Users,
  Rocket,
  Shield,
  Clock,
  Target,
  Cpu,
  Network,
  Sparkles,
} from "lucide-react";

const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      icon: Zap,
      title: "Rapid Prototyping",
      description:
        "From concept to working prototype in weeks, not months. We believe in fast iteration and quick wins.",
      color: "text-yellow-400",
      bgColor: "from-yellow-500/10 to-orange-500/10",
      borderColor: "border-yellow-400/30",
    },
    {
      icon: Target,
      title: "Tailored Solutions",
      description:
        "Every solution is custom-built for your specific needs, industry, and business objectives.",
      color: "text-cyan-400",
      bgColor: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-400/30",
    },
    {
      icon: Cpu,
      title: "Cutting-Edge AI",
      description:
        "Leveraging the latest AI technologies and frameworks to deliver state-of-the-art solutions.",
      color: "text-purple-400",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-400/30",
    },
    {
      icon: Rocket,
      title: "Scalable Architecture",
      description:
        "Built to grow with your business, our solutions scale seamlessly as your needs evolve.",
      color: "text-emerald-400",
      bgColor: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-400/30",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Industry-leading security practices protect your data and ensure compliance with regulations.",
      color: "text-red-400",
      bgColor: "from-red-500/10 to-orange-500/10",
      borderColor: "border-red-400/30",
    },
    {
      icon: Network,
      title: "Seamless Integration",
      description:
        "Our solutions integrate smoothly with your existing systems and workflows.",
      color: "text-blue-400",
      bgColor: "from-blue-500/10 to-indigo-500/10",
      borderColor: "border-blue-400/30",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-purple-950"></div>
      <div className="absolute top-1/4 left-0 w-[28rem] h-[28rem] bg-gradient-to-r from-cyan-400/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-[22rem] h-[22rem] bg-gradient-to-r from-purple-400/10 via-pink-500/10 to-cyan-400/10 rounded-full blur-3xl animate-float-delayed"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-cyan-400/40 rounded-full px-8 py-4 mb-10 shadow-lg hover:border-cyan-300/60 transition-all duration-500">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-cyan-300 text-sm font-medium tracking-wide">
              WHY CHOOSE US
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-white mb-8 drop-shadow-[0_2px_12px_rgba(0,255,255,0.10)]">
            Why Choose
            <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_2px_12px_rgba(0,255,255,0.10)]">
              {" "}
              STAV AI
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            We combine cutting-edge AI technology with deep business expertise
            to deliver solutions that transform how you work, think, and grow.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${advantage.bgColor} backdrop-blur-xl rounded-2xl p-8 border ${advantage.borderColor} hover:border-opacity-80 transition-all duration-700 transform hover:-translate-y-3 hover:scale-110 shadow-xl hover:shadow-cyan-400/20`}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${advantage.bgColor} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-700`}
              ></div>

              {/* Icon */}
              <div className="relative flex items-center justify-center w-16 h-16 bg-slate-800/60 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                <advantage.icon className={`w-8 h-8 ${advantage.color}`} />
                <div
                  className={`absolute inset-0 ${advantage.color} opacity-20 rounded-2xl blur-lg group-hover:opacity-40 transition-opacity duration-500`}
                ></div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-500 drop-shadow-[0_2px_8px_rgba(0,255,255,0.10)]">
                {advantage.title}
              </h3>
              <p className="text-slate-200 leading-relaxed group-hover:text-slate-100 transition-colors duration-500">
                {advantage.description}
              </p>

              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${advantage.bgColor} opacity-30 blur-sm`}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Process Section */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-16">
            Our Proven Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "Understand your challenges and goals",
                color: "from-cyan-500 to-blue-500",
              },
              {
                step: "02",
                title: "Strategy",
                desc: "Design the optimal AI solution",
                color: "from-purple-500 to-pink-500",
              },
              {
                step: "03",
                title: "Development",
                desc: "Build and test your custom system",
                color: "from-emerald-500 to-teal-500",
              },
              {
                step: "04",
                title: "Deployment",
                desc: "Launch and optimize performance",
                color: "from-orange-500 to-red-500",
              },
            ].map((phase, index) => (
              <div
                key={index}
                className={
                  "group text-center transition-all duration-700 transform animate-fade-in-up"
                }
                style={{
                  animationDelay: `${index * 0.25 + 0.25}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="text-4xl font-bold text-white mb-4">
                  {phase.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  {phase.title}
                </h4>
                <p className="text-slate-300 leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
