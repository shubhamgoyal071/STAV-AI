import React from "react";
import {
  Bot,
  BarChart3,
  MessageSquare,
  Cog,
  Workflow,
  Database,
  Brain,
  Zap,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Cpu,
  Network,
} from "lucide-react";

const Services: React.FC = () => {
  const detailedServices = [
    {
      icon: Bot,
      title: "AI Process Automation",
      description:
        "Transform repetitive tasks into intelligent, self-managing workflows that adapt and optimize over time.",
      features: [
        "Document processing and data extraction",
        "Workflow orchestration and optimization",
        "Smart task routing and prioritization",
        "Exception handling and error reduction",
        "Integration with existing systems",
        "Real-time performance monitoring",
      ],
      useCases: [
        "Invoice processing and approval workflows",
        "Customer onboarding automation",
        "Inventory management and reordering",
        "Quality control and compliance checks",
      ],
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10",
      borderColor: "border-cyan-400/30",
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics & AI Insights",
      description:
        "Leverage machine learning to forecast trends, identify opportunities, and make data-driven decisions.",
      features: [
        "Custom machine learning models",
        "Real-time data processing and analysis",
        "Interactive dashboards and reporting",
        "Trend forecasting and pattern recognition",
        "Risk assessment and mitigation",
        "Performance optimization recommendations",
      ],
      useCases: [
        "Sales forecasting and demand planning",
        "Customer churn prediction",
        "Market trend analysis",
        "Financial risk assessment",
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-400/30",
    },
    {
      icon: MessageSquare,
      title: "Intelligent Chatbots & Virtual Assistants",
      description:
        "Deploy conversational AI that understands context, learns from interactions, and provides exceptional user experiences.",
      features: [
        "Natural language processing (NLP)",
        "Multi-channel deployment (web, mobile, social)",
        "Context-aware conversations",
        "Integration with business systems",
        "Continuous learning and improvement",
        "Advanced analytics and insights",
      ],
      useCases: [
        "Customer support automation",
        "Lead qualification and nurturing",
        "Internal IT helpdesk",
        "E-commerce shopping assistance",
      ],
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/10",
      borderColor: "border-emerald-400/30",
    },
    {
      icon: Database,
      title: "AI-Powered CRM & Customer Intelligence",
      description:
        "Enhance customer relationships with AI that analyzes behavior, predicts needs, and personalizes interactions.",
      features: [
        "Customer behavior analysis",
        "Personalized recommendations",
        "Automated lead scoring",
        "Sentiment analysis and feedback processing",
        "Campaign optimization",
        "Customer lifetime value prediction",
      ],
      useCases: [
        "Dynamic pricing strategies",
        "Personalized marketing campaigns",
        "Customer retention programs",
        "Sales opportunity identification",
      ],
      color: "from-indigo-500 to-blue-500",
      bgColor: "from-indigo-500/10 to-blue-500/10",
      borderColor: "border-indigo-400/30",
    },
    {
      icon: Workflow,
      title: "Intelligent Process Optimization",
      description:
        "Analyze and optimize business processes using AI to identify bottlenecks, reduce waste, and improve efficiency.",
      features: [
        "Process mining and analysis",
        "Bottleneck identification",
        "Resource optimization",
        "Performance benchmarking",
        "Continuous improvement recommendations",
        "ROI tracking and reporting",
      ],
      useCases: [
        "Supply chain optimization",
        "Manufacturing process improvement",
        "Service delivery enhancement",
        "Resource allocation optimization",
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-400/30",
    },
    {
      icon: Brain,
      title: "Custom AI Development",
      description:
        "Bespoke AI solutions designed specifically for your unique business challenges and industry requirements.",
      features: [
        "Requirements analysis and solution design",
        "Custom model development and training",
        "Scalable architecture implementation",
        "Third-party integrations",
        "Ongoing maintenance and optimization",
        "Training and knowledge transfer",
      ],
      useCases: [
        "Industry-specific AI applications",
        "Proprietary algorithm development",
        "Legacy system modernization",
        "Specialized data processing",
      ],
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-500/10 to-cyan-500/10",
      borderColor: "border-teal-400/30",
    },
  ];

  const industries = [
    "Healthcare & Life Sciences",
    "Financial Services",
    "Manufacturing",
    "Retail & E-commerce",
    "Technology",
    "Professional Services",
    "Real Estate",
    "Education",
  ];

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
                AI SOLUTIONS PORTFOLIO
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-8">
              Comprehensive AI Solutions
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                for Modern Business
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
              From automation to analytics, we deliver end-to-end AI solutions
              that transform operations, enhance decision-making, and drive
              sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section
        className="py-24 bg-slate-950"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our AI Services
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Explore our comprehensive suite of AI solutions designed to
              address every aspect of modern business automation and
              intelligence.
            </p>
          </div>

          <div className="space-y-24">
            {detailedServices.map((service, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={String(200 + index * 100)}
                className={`${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } flex flex-col lg:flex items-center gap-16`}
              >
                {/* Service Info */}
                <div className="flex-1">
                  <div
                    className={`relative inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} mb-8`}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-lg opacity-50`}
                    ></div>
                  </div>
                  <h3 className="text-4xl font-bold text-white mb-6">
                    {service.title}
                  </h3>
                  <p className="text-lg text-slate-300 mb-10 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <h4 className="text-xl font-semibold text-white mb-6">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start space-x-3"
                        data-aos="fade-right"
                        data-aos-delay={String(300 + featureIndex * 50)}
                      >
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Use Cases */}
                <div className="flex-1">
                  <div
                    className={`bg-gradient-to-br ${service.bgColor} backdrop-blur-xl rounded-3xl p-10 border ${service.borderColor}`}
                    data-aos="fade-left"
                    data-aos-delay={String(400 + index * 100)}
                  >
                    <h4 className="text-xl font-semibold text-white mb-8">
                      Common Use Cases:
                    </h4>
                    <div className="space-y-6">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <div
                          key={useCaseIndex}
                          className="flex items-start space-x-4"
                          data-aos="zoom-in"
                          data-aos-delay={String(500 + useCaseIndex * 50)}
                        >
                          <Zap
                            className={`w-5 h-5 mt-0.5 flex-shrink-0 text-cyan-400`}
                          />
                          <span className="text-slate-300">{useCase}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section
        className="py-24 bg-slate-900"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              Our AI solutions are tailored to meet the unique challenges and
              opportunities across diverse industries and business sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-800/50 to-blue-900/50 backdrop-blur-xl rounded-2xl p-8 text-center border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 transform hover:-translate-y-2"
                data-aos="flip-left"
                data-aos-delay={String(200 + index * 100)}
              >
                <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors duration-500">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        className="py-24 bg-slate-950"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our Development Process
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto">
              A proven methodology that ensures successful AI implementation
              from concept to deployment and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                phase: "01",
                title: "Discovery & Analysis",
                description:
                  "Deep dive into your business processes, challenges, and objectives to identify AI opportunities.",
                color: "from-cyan-500 to-blue-500",
              },
              {
                phase: "02",
                title: "Solution Design",
                description:
                  "Architect the optimal AI solution with detailed specifications, timelines, and success metrics.",
                color: "from-purple-500 to-pink-500",
              },
              {
                phase: "03",
                title: "Development & Testing",
                description:
                  "Build, train, and rigorously test your AI solution with continuous feedback and refinement.",
                color: "from-emerald-500 to-teal-500",
              },
              {
                phase: "04",
                title: "Deployment & Optimization",
                description:
                  "Launch your solution with full support, monitoring, and ongoing optimization for peak performance.",
                color: "from-orange-500 to-red-500",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="group text-center"
                data-aos="fade-up"
                data-aos-delay={String(200 + index * 100)}
              >
                <div
                  className={`relative w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-8 group-hover:scale-110 transition-transform duration-500`}
                >
                  {step.phase}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}
                  ></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-500">
                  {step.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-24 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-xl text-white border-t border-cyan-400/20"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Cpu className="w-8 h-8 text-cyan-400 animate-spin-slow" />
            <Network className="w-8 h-8 text-blue-400 animate-pulse" />
            <Zap className="w-8 h-8 text-purple-400 animate-bounce" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Implement AI in Your Business?
          </h2>
          <p className="text-xl mb-10 text-slate-300 leading-relaxed">
            Let's discuss which AI solutions can deliver the greatest impact for
            your specific business needs and objectives.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8">
            <button
              className="relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-12 py-5 rounded-2xl font-semibold text-lg overflow-hidden group transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("openScheduleCallModal"))
              }
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="relative">Schedule Free Consultation</span>
              <div className="absolute inset-0 border border-cyan-400/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
