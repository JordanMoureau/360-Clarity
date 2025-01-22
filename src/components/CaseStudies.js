function CaseStudies() {
  const studies = [
    {
      title: "Transforming Leadership and Team Collaboration",
      description:
        "A director approached Sam to help improve their leadership approach, which they felt was neither effective nor sustainable. After working with Sam, their culture and engagement survey showed the highest scores ever recorded for their team. The team became more collaborative, more problem-solving oriented, and far less reliant on micromanagement. The results set a new standard for how the team supported one another.",
    },
    {
      title: "Revitalizing Sales Strategy",
      description:
        "In the fourth quarter, a tech company wasn’t hitting sales targets. Sam worked with the Senior VP to refine messaging and clarify instructions for the team. Within two weeks of implementing Sam’s recommendations, the sales team exceeded projections, turning the quarter into a record-breaking success.",
    },
    {
      title: "Empowering a New Team Leader",
      description:
        "A new team leader worked with Sam on hypothetical situations and leadership training. When assigned their first major project, they exceeded expectations for deliverables, time, and budget. The leader credited Sam’s coaching for their success and went on to lead future projects with growing confidence and competence.",
    },
  ];

  return (
    <div className="case-studies py-12 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
        <div className="relative border-l-2 border-blue-500">
          {studies.map((study, index) => (
            <div key={index} className="mb-8 ml-5 relative">
              {/* Timeline Dot */}
              <div className="absolute w-6 h-6 bg-blue-500 rounded-full -left-8"></div>
              <h3 className="text-xl font-semibold text-gray-800">
                {study.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mt-2">
                {study.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
