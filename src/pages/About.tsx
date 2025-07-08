import React from "react";
import {
  Target,
  Users,
  Lightbulb,
  Award,
  ArrowRight,
  Sparkles,
  Cpu,
  Network,
  Zap,
} from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="pt-20 bg-slate-950">
      {/* Hero Section */}
      <section
        className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 text-white relative overflow-hidden"
        data-aos="fade-up"
      >
        {/* Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

        <div
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            className="max-w-5xl mx-auto text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-400/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
              <span className="text-cyan-300 text-sm font-medium tracking-wide">
                OUR MISSION
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8">
              Democratizing AI for
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                Every Business
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
              We believe AI shouldn't be a luxury for Fortune 500 companies. Our
              mission is to make powerful AI automation accessible to businesses
              of all sizes, transforming operations and unlocking growth
              potential.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        className="py-24 bg-slate-950"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                To democratize artificial intelligence by creating custom,
                scalable solutions that empower businesses to automate
                processes, make data-driven decisions, and achieve unprecedented
                efficiency. We bridge the gap between cutting-edge AI technology
                and practical business applications.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-400/30 group-hover:border-cyan-400/50 transition-all duration-500">
                    <Target className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Accessibility First
                    </h3>
                    <p className="text-slate-300">
                      Making AI solutions available to businesses of all sizes
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30 group-hover:border-purple-400/50 transition-all duration-500">
                    <Lightbulb className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Innovation Driven
                    </h3>
                    <p className="text-slate-300">
                      Continuous learning and adaptation to emerging
                      technologies
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-xl border border-emerald-400/30 group-hover:border-emerald-400/50 transition-all duration-500">
                    <Users className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">
                      Partnership Focused
                    </h3>
                    <p className="text-slate-300">
                      Building lasting relationships through successful outcomes
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-xl rounded-3xl p-12 h-96 flex items-center justify-center border border-cyan-400/20">
                <div className="text-center">
                  <div className="relative w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-12 h-12 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-lg opacity-50"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Excellence
                  </h3>
                  <p className="text-slate-300">
                    Committed to delivering world-class AI solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section
        className="py-24 bg-slate-900"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Our Story
              </h2>
            </div>
            <div className="prose prose-lg mx-auto text-slate-300">
              <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-xl rounded-3xl p-12 border border-cyan-400/20">
                <p className="text-xl leading-relaxed mb-8">
                  STAV AI emerged from a simple observation: while AI technology
                  was advancing rapidly, most businesses struggled to implement
                  and benefit from these powerful tools. Traditional consulting
                  firms either charged prohibitive fees or delivered generic
                  solutions that didn't address specific business needs.
                </p>
                <p className="text-xl leading-relaxed mb-8">
                  Our founding team, with extensive experience in AI development
                  and business operations, recognized an opportunity to create a
                  different kind of AI company. One that combines technical
                  excellence with business acumen, offering custom solutions at
                  accessible price points.
                </p>
                <p className="text-xl leading-relaxed">
                  Today, we're proud to help businesses across industries
                  harness the power of AI to automate processes, gain insights,
                  and drive growth. Every project we undertake reinforces our
                  belief that AI should be a catalyst for business
                  transformation, not a barrier to entry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="py-24 bg-slate-950"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparency",
                description:
                  "Clear communication, honest timelines, and straightforward pricing. No hidden costs or technical jargon.",
                icon: "🔍",
                color: "from-cyan-500/10 to-blue-500/10",
                borderColor: "border-cyan-400/30",
              },
              {
                title: "Innovation",
                description:
                  "Staying at the forefront of AI technology while focusing on practical, business-driven applications.",
                icon: "💡",
                color: "from-purple-500/10 to-pink-500/10",
                borderColor: "border-purple-400/30",
              },
              {
                title: "Results",
                description:
                  "Success measured by your ROI. We deliver solutions that create measurable business value.",
                icon: "📈",
                color: "from-emerald-500/10 to-teal-500/10",
                borderColor: "border-emerald-400/30",
              },
              {
                title: "Adaptability",
                description:
                  "Flexible approaches that evolve with your business needs and changing market conditions.",
                icon: "🔄",
                color: "from-orange-500/10 to-red-500/10",
                borderColor: "border-orange-400/30",
              },
              {
                title: "Quality",
                description:
                  "Rigorous testing, robust architecture, and ongoing optimization ensure reliable performance.",
                icon: "⚡",
                color: "from-yellow-500/10 to-orange-500/10",
                borderColor: "border-yellow-400/30",
              },
              {
                title: "Partnership",
                description:
                  "Long-term relationships built on trust, support, and shared success stories.",
                icon: "🤝",
                color: "from-blue-500/10 to-indigo-500/10",
                borderColor: "border-blue-400/30",
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`group text-center p-8 rounded-2xl bg-gradient-to-br ${value.color} backdrop-blur-xl border ${value.borderColor} hover:border-opacity-60 transition-all duration-500 transform hover:-translate-y-2`}
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-500">
                  {value.title}
                </h3>
                <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-xl text-white border-t border-cyan-400/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Cpu className="w-8 h-8 text-cyan-400 animate-spin-slow" />
            <Network className="w-8 h-8 text-blue-400 animate-pulse" />
            <Zap className="w-8 h-8 text-purple-400 animate-bounce" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-10 text-slate-300 leading-relaxed">
            Join the growing number of businesses leveraging AI to drive
            efficiency, innovation, and growth. Let's discuss your unique
            challenges and opportunities.
          </p>
          <button
            className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-5 rounded-2xl font-semibold text-lg overflow-hidden group transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center space-x-3 mx-auto"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("openScheduleCallModal"))
            }
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative">Start Your AI Journey</span>
            <ArrowRight className="w-5 h-5 relative" />
            <div className="absolute inset-0 border border-cyan-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
