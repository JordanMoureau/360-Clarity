import React from "react";

const AboutSam = () => {
  return (
    <div className="bg-gray-50 py-12 px-8 lg:px-16">
      <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Image Section */}
        <div className="w-full lg:w-1/3 flex justify-center mb-8 lg:mb-0">
          <img
            src="https://static.wixstatic.com/media/210bf7_2499a7c3e02b4923847f2bc2d78faee1~mv2.png/v1/fill/w_401,h_437,al_c,lg_1,q_85,enc_avif,quality_auto/Portrait.png" // Replace with actual photo URL
            alt="Sam Jennings workplace coach"
            className="rounded-full w-48 h-48 lg:w-60 lg:h-60 object-cover shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div className="lg:w-2/3 lg:pl-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Meet Sam – Your Workplace Culture Expert
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Sam brings decades of experience in leadership development,
            workplace psychology, and organizational strategy. He’s dedicated to
            helping businesses create thriving cultures that drive retention,
            satisfaction, and productivity.
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mt-4">
            With a unique blend of academic expertise and hands-on experience,
            Sam understands what it takes to foster meaningful changes in
            workplace environments. His commitment to helping organizations
            succeed is unparalleled, making him an invaluable partner for any
            team looking to grow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSam;
