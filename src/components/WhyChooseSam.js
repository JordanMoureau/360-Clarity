import React from "react";
import backgroundImage from "../assets/teamwork.jpg";

function WhyChooseSam() {
  return (
    <div
      className="relative py-16 px-8 lg:px-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500 to-blue-100 opacity-45"></div>

      <div className="relative max-w-5xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-8">Why Choose Sam?</h2>
        <p className="text-lg leading-relaxed mb-12">
          With over 20 years of experience in leadership, workplace psychology,
          and organizational strategy, Sam has transformed teams across
          industries. His blend of academic research and real-world application
          ensures actionable insights tailored to your unique workplace needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Proven Expertise
            </h3>
            <p className="text-gray-700">
              Sam holds advanced academic qualifications in workplace psychology
              and leadership, enabling him to deliver strategies backed by
              research and proven success.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Tailored Solutions
            </h3>
            <p className="text-gray-700">
              No cookie-cutter approaches—Sam works closely with your team to
              design strategies that fit your organization’s unique challenges
              and goals.
            </p>
          </div>
          {/* Card 3 */}
          <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Lasting Impact
            </h3>
            <p className="text-gray-700">
              Sam's actionable insights lead to measurable improvements in
              retention, satisfaction, and team performance, delivering
              long-term benefits for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseSam;
