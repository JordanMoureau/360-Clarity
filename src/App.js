import "./index.css";
import React from "react";
import HeroSection from "./components/HeroSection";
import InfoSection from "./components/InfoSection";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import AboutSam from "./components/AboutSam";
import WhyChooseSam from "./components/WhyChooseSam";
import CaseStudies from "./components/CaseStudies";

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <HeroSection
        headline="Clarity for Your Workplace Starts Here"
        subheadline="Book your free Workplace Culture Audit and take the first step toward stronger retention, engagement, and success."
        buttonText="Schedule Your Free Audit"
        buttonLink="https://calendly.com/360-clarity/30-min-online"
      />
      <div className="info-sections-container px-6 py-12 bg-gray-50 flex justify-center">
        <div className="max-w-screen-md w-full">
          <InfoSection
            title="Clarity Leads to Success"
            description="Discover actionable insights to improve your workplace culture. With Sam’s expert guidance, you'll transform your team’s dynamics, increase productivity, and retain your top talent. Build a thriving environment where everyone feels valued and empowered."
          />
          <InfoSection
            title="Tailored Solutions for Every Team"
            description="Sam’s customized strategies are designed to meet the unique needs of your business. Get the tools you need to foster collaboration, drive engagement, and create a workplace where employees excel."
          />
          <InfoSection
            title="Boost Retention, Engagement, and Results"
            description="Experience measurable improvement in employee satisfaction and team performance. Sam’s psychology-backed methods give you a clear path to better retention and greater success."
          />
          <InfoSection
            title="A Happier, More Productive Workplace"
            description="Everyone deserves to love coming to work. Sam helps you uncover the hidden gaps in your workplace culture and provides solutions that improve morale and drive results."
          />
          <InfoSection
            title="Expert Guidance Backed by Science"
            description="With a background in workplace psychology, Sam delivers evidence-based strategies that address the root causes of challenges, ensuring sustainable growth and lasting success."
          />
        </div>
      </div>
      <Testimonials
        testimonials={[
          {
            clientName: "Virginia",
            quote:
              "From day one, I witnessed how [Sam] encourages professional and personal growth of those who work for and with him and that never wavered.",
          },
          {
            clientName: "Rose",
            quote:
              "He is able to develop strong relationships with students and others within the organization, give students and staff individualized attention, organize and run department-wide processes, collaborate with others to accomplish goals and affect change...",
          },
          {
            clientName: "Marc",
            quote:
              "He is the consummate professional that is steady during the storm. Sam has the rare combination of skills that allow him to confront leaders at all levels with both courage and respect. His advice is direct, respectful and well received.",
          },
          {
            clientName: "Meredith",
            quote:
              "He listened carefully and kept detailed discussion points to help keep our time on track. I appreciated that he didn't jump to give advice, but rather challenged my thinking and helped me decide action steps. I'm so thankful for Sam!",
          },
        ]}
      />

      <AboutSam />
      <WhyChooseSam />
      <CaseStudies />

      {/* Call to Action Section */}
      <CallToAction
        headline="Take the First Step Toward a Better Workplace"
        subheadline="Book your free audit and unlock actionable steps to improve retention and engagement."
        buttonText="Book Now"
        buttonLink="https://calendly.com/360-clarity/30-min-online"
      />
    </div>
  );
}

export default App;
