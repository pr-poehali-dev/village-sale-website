import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MortgageCalculator from '@/components/MortgageCalculator';
import PricesSection from '@/components/PricesSection';
import Infrastructure from '@/components/Infrastructure';
import Reviews from '@/components/Reviews';
import InstallmentSection from '@/components/InstallmentSection';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <HeroSection />
      <MortgageCalculator />
      <PricesSection />
      <Infrastructure />
      <Reviews />
      <InstallmentSection />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;