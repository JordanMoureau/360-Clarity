import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import AboutSam from "../components/AboutSam";
import WhyChooseSam from "../components/WhyChooseSam";
import CaseStudies from "../components/CaseStudies";

export default function HomePage() {
  return (
    <div className="App">
      {/* Hero Section */}
      <HeroSection
        headline="Your Workplace Transformation Partner"
        subheadline="We're not like other firms. We help business see what others might miss and take high-impact, psychology-driven action."
        buttonText="Schedule Your Free Workplace Culture Audit"
        buttonLink="https://calendly.com/360-clarity/linkedin-intro"
      />
      <div className="info-sections-container px-6 py-12 bg-gray-50 flex justify-center">
        <div className="max-w-screen-md mx-auto">
          {/* Section Heading */}
          <div className="flex w-full justify-center mb-10">
            <h1 className="font-bold text-4xl text-gray-800 text-center">
              How We're Different
            </h1>
          </div>

          {/* Info Sections */}
          <InfoSection
            title="The Yellow Flag Approach—Spotting Problems Before They Happen"
            description="Most leaders focus on red flags or green flags, but 360 Clarity challenges leaders to recognize yellow flags—subtle signs of potential issues or untapped opportunities before they become major problems."
            bulletone="It's a mindset shift. Sam doesn’t just provide solutions—he trains leaders to see their teams differently, anticipate issues sooner, and act faster."
            bullettwo="The impact is lasting. Once leaders master this skill, they can teach it to others, elevating the entire organization."
          />

          <InfoSection
            title="Real Psychological Insight, Not Corporate Jargon"
            description="360 Clarity is rooted in workplace psychology, not just buzzwords. Sam’s expertise blends academic research with real-world leadership experience, ensuring actionable strategies that work."
            bulletone="Data-driven solutions. Every recommendation is backed by behavioral psychology and tested workplace strategies."
            bullettwo="Built for real leaders. No empty theories—just practical, actionable steps that make an immediate impact."
          />

          <InfoSection
            title="No Bureaucracy, Just High-Level Impact"
            description="360 Clarity is nimble, personal and strategic. Sam works directly with leaders to ensure every strategy is practical, sustainable and aligned with real business goals."
            bulletone="No one gets stuck in layers of consultants and advisors."
            bullettwo="Leaders work directly with Sam, who has the experience and insight to make real change happen fast."
          />

          <InfoSection
            title="A Happier, More Productive Workplace"
            description="Everyone deserves to love coming to work. 360 Clarity helps leaders uncover hidden workplace culture gaps and implement solutions that improve morale and drive results."
            bulletone="Create a workplace that people are proud to be part of."
            bullettwo="Focus on retention engagement and performance. Not just surface-level culture talk."
          />

          <InfoSection
            title="360 Clarity is your Partner in Growth, Not Just a Consultant."
            description="Most companies know they need better workplace culture, but they don't know where to start."
            bulletone="Sam helps leaders SEE what's missing, FIX what's broken and BUILD what's next."
            bullettwo="Everything is built to test, refine and improve. Because workplaces (and people) are always evolving."
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
      />
    </div>
  );
}
