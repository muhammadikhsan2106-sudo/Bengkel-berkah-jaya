/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesGrid } from './components/ServicesGrid';
import { ServiceEstimator } from './components/ServiceEstimator';
import { ContactForm } from './components/ContactForm';
import { LocationHours } from './components/LocationHours';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [initialContactMessage, setInitialContactMessage] = useState<string>('');

  const scrollToContact = (customMessage?: string) => {
    if (customMessage) {
      setInitialContactMessage(customMessage);
    }
    const element = document.getElementById('kontak');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToEstimator = () => {
    const element = document.getElementById('estimasi');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceFromGrid = (serviceTitle: string) => {
    scrollToContact(`Halo Bengkel Berkah Jaya, saya berminat untuk pengerjaan layanan: ${serviceTitle}. Mohon info estimasi waktu dan antreannya.`);
  };

  const handleSelectServicesFromEstimator = (messageText: string) => {
    setInitialContactMessage(messageText);
  };

  return (
    <div className="min-h-screen bg-[#060b17] text-slate-100 selection:bg-orange-500 selection:text-white">
      {/* 3-Zone Top Bar */}
      <Navbar onOpenBooking={() => scrollToContact('Halo Bengkel Berkah Jaya, saya ingin booking jadwal servis motor.')} />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => scrollToContact('Halo Bengkel Berkah Jaya, saya ingin konsultasi keluhan motor dan booking servis.')}
          onScrollToEstimator={scrollToEstimator}
        />

        {/* Brand Pillars & Transparent Process */}
        <WhyChooseUs />

        {/* Comprehensive Services with Visual Assets */}
        <ServicesGrid onSelectService={handleSelectServiceFromGrid} />

        {/* Interactive Cost & Duration Estimator */}
        <ServiceEstimator onSelectServicesForContact={handleSelectServicesFromEstimator} />

        {/* Formulir Kontak Sederhana (Nama, Telepon, Pesan, Tombol Kirim Orange) */}
        <ContactForm initialMessage={initialContactMessage} />

        {/* Customer Social Proof / Testimonials */}
        <Testimonials />

        {/* Workshop Location, Schedule, and Directions */}
        <LocationHours />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Clean Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
