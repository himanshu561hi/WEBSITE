import React from 'react';
import SEO from '../Components/SEO';
import MainLayout from '../layouts/MainLayout';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import ServicesOverview from '../sections/ServicesOverview';
import MockInterviewCTA from '../sections/MockInterviewCTA';
import ResumeBuilderCTA from '../sections/ResumeBuilderCTA';
import JobPortalCTA from '../sections/JobPortalCTA';
import ProblemSolution from '../sections/ProblemSolution';
import IndustriesServed from '../sections/IndustriesServed';
import PortfolioPreview from '../sections/PortfolioPreview';
import WhyWebsite from '../sections/WhyWebsite';
import Process from '../sections/Process';
import Partners from '../sections/Partners';
import Testimonials from '../sections/Testimonials';
import CTA, { InternshipCTA } from '../sections/CTA';

const Home = () => {
  return (
    <MainLayout>
      <SEO 
        title="Code-A-Nova | Web Development, AI & Business Software Solutions"
        description="Code-A-Nova provides web development, e-commerce, AI automation, ERP and custom software solutions for modern businesses, along with technology internships and career opportunities."
        canonicalUrl="https://code-a-nova.online/"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Code-A-Nova",
          "url": "https://code-a-nova.online/",
          "logo": "https://code-a-nova.online/LOGO.png",
          "description": "Code-A-Nova provides web development, AI automation, e-commerce, ERP and custom software solutions."
        }}
      />
      <Hero />
      <Partners />
      <ProblemSolution />
      <ServicesOverview />
      <Stats />
      <MockInterviewCTA />
      <ResumeBuilderCTA />
      <JobPortalCTA />
      <IndustriesServed />
      <PortfolioPreview />
      <WhyWebsite />
      <Process />
      <Testimonials />
      <CTA />
      <InternshipCTA />
    </MainLayout>
  );
};

export default Home;
