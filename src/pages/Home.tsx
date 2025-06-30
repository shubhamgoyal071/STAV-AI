import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUs from '../components/WhyChooseUs';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <ContactForm />
    </div>
  );
};

export default Home;