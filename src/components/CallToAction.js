const CallToAction = ({ headline, subheadline, buttonText, buttonLink }) => {
  return (
    <div className="cta bg-blue-500 text-white py-10 px-10 text-center">
      <h2 className="text-3xl font-bold">{headline}</h2>
      <p className="text-lg mt-4">{subheadline}</p>
      <a
        href={buttonLink}
        className="mt-8 inline-block bg-white text-blue-500 px-6 py-3 rounded"
      >
        {buttonText}
      </a>
    </div>
  );
};
export default CallToAction;
